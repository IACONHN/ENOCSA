param(
  [string]$RelativePath
)

Add-Type -AssemblyName System.Drawing

$sourceRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\public\images\proyectos_enocsa_2025')).Path
$outputRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\public\images\proyectos_enocsa_2025_web')).Path
$logoPath = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\public\images\logo_footer.png')).Path
$webImages = @(Get-ChildItem -LiteralPath $outputRoot -Recurse -File | Where-Object { $_.Extension -match '^(?i)\.(jpeg|png)$' })
if ($RelativePath) {
  $normalizedRelativePath = $RelativePath.Replace('/', '\').TrimStart('\')
  $webImages = @($webImages | Where-Object { $_.FullName.Substring($outputRoot.Length).TrimStart('\') -eq $normalizedRelativePath })
}
if ($webImages.Count -eq 0) { throw 'No se encontraron imágenes WEB para regenerar.' }

$workItems = @()
$withoutOriginal = @()
foreach ($webImage in $webImages) {
  $relativePath = $webImage.FullName.Substring($outputRoot.Length).TrimStart('\')
  $sourcePath = Join-Path $sourceRoot $relativePath
  if (Test-Path -LiteralPath $sourcePath -PathType Leaf) {
    $workItems += [PSCustomObject]@{ RelativePath = $relativePath; SourcePath = $sourcePath; OutputPath = $webImage.FullName }
  } else {
    $withoutOriginal += $relativePath
  }
}

$logo = [System.Drawing.Image]::FromFile($logoPath)
try {
  $sourceHashes = @{}
  foreach ($item in $workItems) { $sourceHashes[$item.SourcePath] = (Get-FileHash -LiteralPath $item.SourcePath -Algorithm SHA256).Hash }

  foreach ($item in $workItems) {
    $source = [System.Drawing.Image]::FromFile($item.SourcePath)
    try {
      if ($source.PropertyIdList -contains 0x0112) {
        $orientation = [BitConverter]::ToUInt16($source.GetPropertyItem(0x0112).Value, 0)
        if ($orientation -ne 1) { throw "La orientación EXIF requiere revisión: $($item.SourcePath)" }
      }

      $canvas = New-Object System.Drawing.Bitmap $source.Width, $source.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
      $graphics = [System.Drawing.Graphics]::FromImage($canvas)
      try {
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $source.Width, $source.Height)

        $mainWidth = [Math]::Round($source.Width * 0.52)
        $mainHeight = [Math]::Round($mainWidth * $logo.Height / $logo.Width)
        $mainAttributes = New-Object System.Drawing.Imaging.ImageAttributes
        $mainMatrix = New-Object System.Drawing.Imaging.ColorMatrix
        $mainMatrix.Matrix33 = 0.20
        try {
          $mainAttributes.SetColorMatrix($mainMatrix)
          $mainRectangle = [System.Drawing.Rectangle]::new([int](($source.Width - $mainWidth) / 2), [int](($source.Height - $mainHeight) / 2), $mainWidth, $mainHeight)
          $graphics.DrawImage($logo, $mainRectangle, 0, 0, $logo.Width, $logo.Height, [System.Drawing.GraphicsUnit]::Pixel, $mainAttributes)
        } finally { $mainAttributes.Dispose() }

        $cornerWidth = [Math]::Round($source.Width * 0.17)
        $cornerHeight = [Math]::Round($cornerWidth * $logo.Height / $logo.Width)
        $margin = [Math]::Round([Math]::Min($source.Width, $source.Height) * 0.025)
        $cornerAttributes = New-Object System.Drawing.Imaging.ImageAttributes
        $cornerMatrix = New-Object System.Drawing.Imaging.ColorMatrix
        $cornerMatrix.Matrix33 = 0.32
        try {
          $cornerAttributes.SetColorMatrix($cornerMatrix)
          $positions = @(
            [PSCustomObject]@{ X = $margin; Y = $margin }
            [PSCustomObject]@{ X = $source.Width - $cornerWidth - $margin; Y = $margin }
            [PSCustomObject]@{ X = $margin; Y = $source.Height - $cornerHeight - $margin }
            [PSCustomObject]@{ X = $source.Width - $cornerWidth - $margin; Y = $source.Height - $cornerHeight - $margin }
          )
          foreach ($position in $positions) {
            $rectangle = [System.Drawing.Rectangle]::new([int]$position.X, [int]$position.Y, $cornerWidth, $cornerHeight)
            $graphics.DrawImage($logo, $rectangle, 0, 0, $logo.Width, $logo.Height, [System.Drawing.GraphicsUnit]::Pixel, $cornerAttributes)
          }
        } finally { $cornerAttributes.Dispose() }

        $temporaryOutput = Join-Path (Split-Path -Parent $item.OutputPath) ".watermark-$([guid]::NewGuid())$([IO.Path]::GetExtension($item.OutputPath))"
        try {
          if ($item.OutputPath -match '(?i)\.png$') {
            $canvas.Save($temporaryOutput, [System.Drawing.Imaging.ImageFormat]::Png)
          } else {
            $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
            $parameters = New-Object System.Drawing.Imaging.EncoderParameters 1
            try {
              $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 93L
              $canvas.Save($temporaryOutput, $encoder, $parameters)
            } finally { $parameters.Dispose() }
          }
          Move-Item -LiteralPath $temporaryOutput -Destination $item.OutputPath -Force
        } finally {
          if (Test-Path -LiteralPath $temporaryOutput) { Remove-Item -LiteralPath $temporaryOutput -Force }
        }
      } finally {
        $graphics.Dispose()
        $canvas.Dispose()
      }
    } finally { $source.Dispose() }
  }

  foreach ($item in $workItems) {
    if ((Get-FileHash -LiteralPath $item.SourcePath -Algorithm SHA256).Hash -ne $sourceHashes[$item.SourcePath]) {
      throw "El original fue alterado: $($item.SourcePath)"
    }
  }

  [PSCustomObject]@{
    WebImagesBefore = $webImages.Count
    ImagesRegenerated = $workItems.Count
    WithoutOriginal = $withoutOriginal
    CentralLogo = '52% ancho, horizontal, opacidad 20%'
    CornerLogos = '4 por imagen, 17% ancho, opacidad 32%, margen 2.5%'
  } | ConvertTo-Json
} finally { $logo.Dispose() }
