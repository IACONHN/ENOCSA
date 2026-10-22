Add-Type -AssemblyName System.Drawing

$sourceRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\public\images\proyectos_enocsa_2025')).Path
$outputRoot = Join-Path $PSScriptRoot '..\public\images\proyectos_enocsa_2025_web'
$logoPath = Join-Path $PSScriptRoot '..\public\images\logo_footer.png'
$projects = @(Get-ChildItem -LiteralPath $sourceRoot -Directory)
$images = @(Get-ChildItem -LiteralPath $sourceRoot -Recurse -File |
  Where-Object { $_.Extension -match '^(?i)\.(jpeg|png)$' })
$jpegCount = @($images | Where-Object Extension -match '^(?i)\.jpeg$').Count
$pngCount = @($images | Where-Object Extension -match '^(?i)\.png$').Count

if ($projects.Count -ne 28 -or $images.Count -ne 216 -or $jpegCount -ne 208 -or $pngCount -ne 8) {
  throw 'La fuente oficial no coincide con 28 carpetas, 216 imágenes, 208 JPEG y 8 PNG.'
}

if (Test-Path -LiteralPath $outputRoot) {
  if (@(Get-ChildItem -LiteralPath $outputRoot -Recurse -Force).Count -gt 0) {
    throw 'La carpeta de salida ya contiene archivos; no se sobrescribirá nada.'
  }
} else {
  New-Item -ItemType Directory -Path $outputRoot | Out-Null
}

$logo = [System.Drawing.Image]::FromFile($logoPath)
try {
  $sourceHashes = @{}
  foreach ($file in $images) {
    $sourceHashes[$file.FullName] = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash
  }

  foreach ($file in $images) {
    $source = [System.Drawing.Image]::FromFile($file.FullName)
    try {
      if ($source.PropertyIdList -contains 0x0112) {
        $orientation = [BitConverter]::ToUInt16($source.GetPropertyItem(0x0112).Value, 0)
        if ($orientation -ne 1) { throw "La orientación EXIF requiere revisión: $($file.FullName)" }
      }

      $relativePath = $file.FullName.Substring($sourceRoot.Length).TrimStart('\')
      $outputPath = Join-Path $outputRoot $relativePath
      $outputDirectory = Split-Path -Parent $outputPath
      if (-not (Test-Path -LiteralPath $outputDirectory)) {
        New-Item -ItemType Directory -Path $outputDirectory | Out-Null
      }
      if (Test-Path -LiteralPath $outputPath) { throw "La salida ya existe: $outputPath" }

      $canvas = New-Object System.Drawing.Bitmap $source.Width, $source.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
      $graphics = [System.Drawing.Graphics]::FromImage($canvas)
      try {
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $source.Width, $source.Height)

        $mainWidth = [Math]::Round($source.Width * 0.52)
        $mainHeight = [Math]::Round($mainWidth * $logo.Height / $logo.Width)
        $mainMatrix = New-Object System.Drawing.Imaging.ColorMatrix
        $mainMatrix.Matrix33 = 0.20
        $mainAttributes = New-Object System.Drawing.Imaging.ImageAttributes
        try {
          $mainAttributes.SetColorMatrix($mainMatrix)
          $mainRectangle = [System.Drawing.Rectangle]::new(
            [int](($source.Width - $mainWidth) / 2),
            [int](($source.Height - $mainHeight) / 2),
            $mainWidth,
            $mainHeight
          )
          $graphics.DrawImage($logo, $mainRectangle, 0, 0, $logo.Width, $logo.Height, [System.Drawing.GraphicsUnit]::Pixel, $mainAttributes)
        } finally {
          $mainAttributes.Dispose()
        }

        $cornerWidth = [Math]::Round($source.Width * 0.17)
        $cornerHeight = [Math]::Round($cornerWidth * $logo.Height / $logo.Width)
        $margin = [Math]::Round([Math]::Min($source.Width, $source.Height) * 0.025)
        $cornerMatrix = New-Object System.Drawing.Imaging.ColorMatrix
        $cornerMatrix.Matrix33 = 0.32
        $cornerAttributes = New-Object System.Drawing.Imaging.ImageAttributes
        try {
          $cornerAttributes.SetColorMatrix($cornerMatrix)
          $cornerPositions = @(
            [PSCustomObject]@{ X = $margin; Y = $margin }
            [PSCustomObject]@{ X = $source.Width - $cornerWidth - $margin; Y = $margin }
            [PSCustomObject]@{ X = $margin; Y = $source.Height - $cornerHeight - $margin }
            [PSCustomObject]@{ X = $source.Width - $cornerWidth - $margin; Y = $source.Height - $cornerHeight - $margin }
          )
          foreach ($position in $cornerPositions) {
            $cornerRectangle = [System.Drawing.Rectangle]::new([int]$position.X, [int]$position.Y, $cornerWidth, $cornerHeight)
            $graphics.DrawImage($logo, $cornerRectangle, 0, 0, $logo.Width, $logo.Height, [System.Drawing.GraphicsUnit]::Pixel, $cornerAttributes)
          }
        } finally {
          $cornerAttributes.Dispose()
        }

        if ($file.Extension -match '^(?i)\.png$') {
          $canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        } else {
          $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
          $parameters = New-Object System.Drawing.Imaging.EncoderParameters 1
          try {
            $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 93L
            $canvas.Save($outputPath, $encoder, $parameters)
          } finally {
            $parameters.Dispose()
          }
        }
      } finally {
        $graphics.Dispose()
        $canvas.Dispose()
      }
    } finally {
      $source.Dispose()
    }
  }

  foreach ($file in $images) {
    if ((Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash -ne $sourceHashes[$file.FullName]) {
      throw "El original fue alterado: $($file.FullName)"
    }
  }

  [PSCustomObject]@{
    ProjectsProcessed = $projects.Count
    ImagesProcessed = $images.Count
    JPEG = $jpegCount
    PNG = $pngCount
    CentralLogo = '52% ancho, horizontal, opacidad 20%'
    CornerLogos = '4 por imagen, 17% ancho, opacidad 32%, margen 2.5%'
  } | ConvertTo-Json
} finally {
  $logo.Dispose()
}
