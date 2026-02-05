(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const E=`<nav class="navbar">\r
    <div class="container">\r
        <div class="logo">\r
            <a href="index.html">\r
                <img src="./images/logo.png" alt="Logo Enocsa">\r
            </a>\r
        </div>\r
\r
\r
        <div class="hamburger">\r
            <span></span>\r
            <span></span>\r
            <span></span>\r
        </div>\r
\r
        <ul class="nav-links">\r
            <li><a href="#about">Nosotros</a></li>\r
            <li><a href="#services">Servicios</a></li>\r
            <li><a href="#portfolio">Portafolio</a></li>\r
            <li><a href="#contact">Contacto</a></li>\r
        </ul>\r
    </div>\r
</nav>`,O=`<section class="hero">\r
  <div class="overlay">\r
    <div class="container hero-content">\r
      <h1>Construyendo el Futuro con Responsabilidad y Unión</h1>\r
      <p>Soluciones integrales en ingeniería y construcción civil.</p>\r
      <a href="#portfolio" class="btn-primary">Conoce Nuestros Proyectos</a>\r
    </div>\r
  </div>\r
</section>\r
\r
`,f=`<section id="about" class="about">\r
    <div class="container about-container">\r
        <div class="about-img">\r
            <img src="./images/enocsa4.jpeg" alt="Equipo ENOCSA">\r
        </div>\r
        <div class="about-text">\r
            <h2><strong>Sobre Nosotros</strong></h2>\r
            <p>En 2008 se funda CONSTRUCCIONES ENOC GARCIA C.E.G. en Tegucigalpa M.D.C., por el ING. EDDUIN ENOC GARCIA\r
                MATUTE, en el grado de Contratista Individual.</p>\r
            <p>Para ese entonces se realizaron proyectos como ser; Construcción de Puentes Vehiculares y Peatonales y\r
                Construcción de\r
                muro de contención anclado en Tegucigalpa, Construcción de Línea de conducción y obras complementarias\r
                en el\r
                municipio de Candeleros Juticalpa y La Ampliación de alcantarillado sanitario en el Municipio de San\r
                Ignacio, entre otros.</p>\r
            <p>En el año 2010 realiza una alianza ENOC-COINPRO-COLOLO-INPROCO-IGC, empresas que en conjunto realizaron\r
                consultorías, formulación y ejecución de proyectos de infraestructura como ser Pavimentación de\r
                Carreteras, obras\r
                Hidráulicas, entre otras.</p>\r
            <p>En 2013 se forma una red de Socios, Ingenieros Contratistas Individuales, creando <strong>EMPRESA EN\r
                    OBRAS DE CONSTRUCCION S.A. DE C.V.- ENOC S.A. DE C.V.</strong> la cual es dirigida por el\r
                <strong>ING. EDDUIN ENOC GARCIA\r
                    MATUTE</strong> como Gerente\r
                General y Representante de la nueva empresa.\r
            </p>\r
        </div>\r
        <div>\r
            <p>ENOC S.A. nace con la ideología principal de crecer como empresa, abarcando así proyectos de mayor\r
                envergadura que no se podrían realizar como Contratista Individual.</p></br>\r
            <p>Esta seguirá siendo una empresa dedicada a la formulación y ejecución de obras civiles en Honduras,\r
                desarrollándose a largo plazo como empresa, adquiriendo nuevas experiencias y estudiando estas con el\r
                objetivo de mejorar\r
                continuamente.</p></br>\r
            <p>La empresa constructora cuenta con el mejor equipo humano de alta capacidad y experiencia, así como la\r
                mejor Calidad de mano de obra enelmercadode la Construcción; Actualmente desarrolla proyectos de\r
                Estructura e\r
                Infraestructura en las ramas de Ingeniería Civil.</p></br>\r
            <p>En cuanto a nuestros clientes estos pueden ser en el ámbito público como privado con el objetivo de\r
                adquirir mayor conocimiento y crecer en ambos argumentos.</p></br>\r
            <p>ENOC S.A. Más que un gran equipo de trabajo, es una Gran Familia que se preocupa por el desarrollo y\r
                crecimiento de su personal, la empresa y por supuesto de Honduras.</p>\r
        </div>\r
        <section>\r
            <h2 class="centered"><strong>Datos Generales</strong></h2></br>\r
            <div class="card-section fade-in">\r
                <div class="info-card" id="mision">\r
                    <div class="card-icon"><i class="fa-solid fa-bullseye"></i></div>\r
                    <h3>Misión</h3>\r
                    <p>Somos una empresa líder en la formulación y ejecución\r
                        de obras civiles, dedicada a transformar\r
                        infraestructuras con precisión técnica y tecnología de\r
                        vanguardia. Nuestro compromiso es superar las\r
                        expectativas de nuestros clientes mediante la\r
                        excelencia operativa, el desarrollo de nuestra Gran\r
                        Familia de colaboradores y un impacto positivo en el\r
                        crecimiento de Honduras.\r
                    </p>\r
                </div>\r
                <div class="card-section fade-in">\r
                    <div class="info-card" id="politica">\r
                        <div class="card-icon"><i class="fa-solid fa-check-circle"></i></div>\r
                        <h3>Política de Calidad</h3>\r
                        <p>En ENOC S.A. de C.V., la calidad es nuestra firma. Nos\r
                            comprometemos a entregar soluciones de ingeniería\r
                            moderna fundamentadas en la creatividad, la\r
                            experiencia y la mejora continua de nuestros procesos.\r
                            Garantizamos la excelencia a través de mano de obra\r
                            altamente calificada y el cumplimiento estricto de los\r
                            estándares técnicos, asegurando siempre la plena\r
                            satisfacción de nuestros clientes y la seguridad de\r
                            nuestras obras.\r
                        </p>\r
                    </div>\r
                    <div class="card-section fade-in">\r
                        <div class="info-card" id="vision">\r
                            <div class="card-icon"><i class="fa-solid fa-eye"></i></div>\r
                            <h3>Visión</h3>\r
                            <p>Para el año 2030, seremos el referente de ingeniería y\r
                                construcción más confiable a nivel regional,\r
                                reconocidos por nuestra capacidad técnica para\r
                                ejecutar proyectos de alta complejidad y por nuestra\r
                                sólida rentabilidad. Aspiramos a ser el socio estratégico\r
                                preferido en los sectores público y privado, impulsando\r
                                la modernización del mercado de la construcción.\r
                            </p>\r
                        </div>\r
                        <div class="card-section fade-in">\r
                            <div class="info-card" id="valores">\r
                                <div class="card-icon"><i class="fa-solid fa-handshake"></i></div>\r
                                <h3>Valores Fundamentales</h3>\r
                                <ul>\r
                                    <li><strong>Excelencia en Ingeniería:</strong> No solo construimos,\r
                                        aplicamos rigor técnico y carácter ingenieril en\r
                                        cada detalle para garantizar la durabilidad y\r
                                        funcionalidad de nuestras obras.</li>\r
                                    <li><strong>Integridad y Responsabilidad:</strong> Actuamos con\r
                                        seriedad y transparencia, asumiendo cada proyecto\r
                                        como un compromiso inquebrantable con el país y\r
                                        el cliente.</li>\r
                                    <li><strong>Sinergia y Trabajo en Equipo:</strong> Funcionamos como\r
                                        una unidad coordinada donde el talento de cada\r
                                        integrante se potencia para alcanzar objetivos\r
                                        comunes.</li>\r
                                    <li><strong>Vocación de Servicio (Enfoque al Cliente):</strong> Somos\r
                                        aliados estratégicos; asesoramos a nuestros clientes\r
                                        para que tomen las mejores decisiones técnicas y\r
                                        financieras.</li>\r
                                    <li><strong>Desarrollo Humano:</strong> Valoramos a nuestra gente\r
                                        como una familia, fomentando su crecimiento\r
                                        profesional y bienestar como motor de nuestra\r
                                        empresa.\r
                                    </li>\r
                                </ul>\r
                            </div>\r
        </section>\r
    </div>\r
</section>`,S=`<section id="services" class="services">\r
  <div class="container">\r
    <h2><strong>Servicios</strong></h2>\r
    <div class="services-grid">\r
      <div class="card">\r
        <div class="card-img"><img src="./images/gerencia.jpeg" alt="Gerencia de Proyectos">\r
        </div>\r
        <div class="card-body">\r
          <h3><strong>Gerencia de Proyectos</strong></h3>\r
          <p>Administración, planificación y control de proyectos de construcción, garantizando el cumplimiento de\r
            plazos, costos y estándares técnicos establecidos.</p>\r
        </div>\r
      </div>\r
      <div class="card">\r
        <div class="card-img"><img src="./images/obras_civiles.jpeg" alt="Equpos de Construccion">\r
            alt="Construcción"></div>\r
        <div class="card-body">\r
          <h3><strong><strong>Equipo de Construcción</strong></strong></h3>\r
          <p>Ejecución de obras civiles mediante un equipo de trabajo capacitado, comprometido con la calidad, la seguridad y el desarrollo eficiente de cada proyecto.</p>\r
        </div>\r
      </div>\r
      <div class="card">\r
        <div class="card-img"><img src="./images/consultoria.jpeg" alt="Consultoría Técnica">\r
        </div>\r
        <div class="card-body">\r
          <h3><strong><strong>Consultoría Técnica en Ingeniería</strong></strong></h3>\r
          <p>Asesoría técnica especializada para proyectos de infraestructura, enfocada en soluciones eficientes, seguras y sostenibles.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>`,N=`<section id="portfolio" class="portfolio">\r
  <div class="container">\r
    <h2><strong>Portafolio</strong></h2>\r
\r
    <div class="portfolio-grid">\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos23/fusami/fusami1.jpg" class="active" alt="FUSAMI1">\r
          <img src="./images/proyectos23/fusami/fusami2.jpg" class="active" alt="FUSAMI2">\r
          <img src="./images/proyectos23/fusami/fusami3.jpg" class="active" alt="FUSAMI3">\r
          <img src="./images/proyectos23/fusami/fusami4.jpg" class="active" alt="FUSAMI4">\r
          <img src="./images/proyectos23/fusami/fusami5.jpg" class="active" alt="FUSAMI5">\r
          <img src="./images/proyectos23/fusami/fusami6.jpg" class="active" alt="FUSAMI6">\r
          <img src="./images/proyectos23/fusami/fusami7.jpg" class="active" alt="FUSAMI7">\r
          <img src="./images/proyectos23/fusami/fusami8.jpg" class="active" alt="FUSAMI8">\r
          <img src="./images/proyectos23/fusami/fusami9.jpg" class="active" alt="FUSAMI9">\r
          <img src="./images/proyectos23/fusami/fusami10.jpg" class="active" alt="FUSAMI10">\r
          <img src="./images/proyectos23/fusami/fusami11.jpg" class="active" alt="FUSAMI11">\r
          <img src="./images/proyectos23/fusami/fusami12.jpg" class="active" alt="FUSAMI12">\r
          <img src="./images/proyectos23/fusami/fusami13.jpg" class="active" alt="FUSAMI13">\r
          <img src="./images/proyectos23/fusami/fusami14.jpg" class="active" alt="FUSAMI14">\r
          <img src="./images/proyectos23/fusami/fusami15.jpg" class="active" alt="FUSAMI15">\r
          <img src="./images/proyectos23/fusami/fusami16.jpg" class="active" alt="FUSAMI16">\r
          <img src="./images/proyectos23/fusami/fusami17.jpg" class="active" alt="FUSAMI17">\r
          <img src="./images/proyectos23/fusami/fusami18.jpg" class="active" alt="FUSAMI18">\r
          <img src="./images/proyectos23/fusami/fusami19.jpg" class="active" alt="FUSAMI19">\r
          <img src="./images/proyectos23/fusami/fusami20.jpg" class="active" alt="FUSAMI20">\r
          <img src="./images/proyectos23/fusami/fusami21.jpg" class="active" alt="FUSAMI21">\r
          <img src="./images/proyectos23/fusami/fusami22.jpg" class="active" alt="FUSAMI22">\r
          <img src="./images/proyectos23/fusami/fusami23.jpg" class="active" alt="FUSAMI23">\r
          <img src="./images/proyectos23/fusami/fusami24.jpg" class="active" alt="FUSAMI24">\r
          <img src="./images/proyectos23/fusami/fusami25.jpg" class="active" alt="FUSAMI25">\r
          <img src="./images/proyectos23/fusami/fusami26.jpg" class="active" alt="FUSAMI26">\r
          <img src="./images/proyectos23/fusami/fusami27.jpg" class="active" alt="FUSAMI27">\r
          <img src="./images/proyectos23/fusami/fusami28.jpg" class="active" alt="FUSAMI28">\r
          <img src="./images/proyectos23/fusami/fusami29.jpg" class="active" alt="FUSAMI29">\r
          <img src="./images/proyectos23/fusami/fusami30.jpg" class="active" alt="FUSAMI30">\r
          <img src="./images/proyectos23/fusami/fusami31.jpg" class="active" alt="FUSAMI31">\r
          <img src="./images/proyectos23/fusami/fusami32.jpg" class="active" alt="FUSAMI32">\r
          <img src="./images/proyectos23/fusami/fusami33.jpg" class="active" alt="FUSAMI33">\r
          <img src="./images/proyectos23/fusami/fusami34.jpg" class="active" alt="FUSAMI34">\r
          <img src="./images/proyectos23/fusami/fusami35.jpg" class="active" alt="FUSAMI35">\r
          <img src="./images/proyectos23/fusami/fusami36.jpg" class="active" alt="FUSAMI36">\r
          <img src="./images/proyectos23/fusami/fusami37.jpg" class="active" alt="FUSAMI37">\r
          <img src="./images/proyectos23/fusami/fusami38.jpg" class="active" alt="FUSAMI38">\r
          <img src="./images/proyectos23/fusami/fusami39.jpg" class="active" alt="FUSAMI39">\r
          <img src="./images/proyectos23/fusami/fusami40.jpg" class="active" alt="FUSAMI40">\r
          <img src="./images/proyectos23/fusami/fusami41.jpg" class="active" alt="FUSAMI41">\r
          <img src="./images/proyectos23/fusami/fusami42.jpg" class="active" alt="FUSAMI42">\r
          <img src="./images/proyectos23/fusami/fusami43.jpg" class="active" alt="FUSAMI43">\r
          <img src="./images/proyectos23/fusami/fusami44.jpg" class="active" alt="FUSAMI44">\r
          <img src="./images/proyectos23/fusami/fusami45.jpg" class="active" alt="FUSAMI45">\r
          <img src="./images/proyectos23/fusami/fusami46.jpg" class="active" alt="FUSAMI46">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>FUSAMI</strong></h3>\r
      </div>\r
\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos24/subestacion/estacion1.jpeg" class="active" alt="ESTACION1">\r
          <img src="./images/proyectos24/subestacion/estacion2.jpeg" class="active" alt="ESTACION2">\r
          <img src="./images/proyectos24/subestacion/estacion3.jpeg" class="active" alt="ESTACION3">\r
          <img src="./images/proyectos24/subestacion/estacion4.jpeg" class="active" alt="ESTACION4">\r
          <img src="./images/proyectos24/subestacion/estacion5.jpeg" class="active" alt="ESTACION5">\r
          <img src="./images/proyectos24/subestacion/estacion6.jpeg" class="active" alt="ESTACION6">\r
          <img src="./images/proyectos24/subestacion/estacion7.jpeg" class="active" alt="ESTACION7">\r
          <img src="./images/proyectos24/subestacion/estacion8.jpeg" class="active" alt="ESTACION8">\r
          <img src="./images/proyectos24/subestacion/estacion9.jpeg" class="active" alt="ESTACION9">\r
          <img src="./images/proyectos24/subestacion/estacion10.jpeg" class="active" alt="ESTACION10">\r
          <img src="./images/proyectos24/subestacion/estacion11.jpeg" class="active" alt="ESTACION11">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Sub Estación Eléctrica Santa Marta</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos24/negritoyoro/agua1.jpeg" class="active" alt="SistemaAgua1">\r
          <img src="./images/proyectos24/negritoyoro/agua2.jpeg" class="active" alt="SistemaAgua2">\r
          <img src="./images/proyectos24/negritoyoro/agua3.jpeg" class="active" alt="SistemaAgua3">\r
          <img src="./images/proyectos24/negritoyoro/agua4.jpeg" class="active" alt="SistemaAgua4">\r
          <img src="./images/proyectos24/negritoyoro/agua5.jpeg" class="active" alt="SistemaAgua5">\r
          <img src="./images/proyectos24/negritoyoro/agua6.jpeg" class="active" alt="SistemaAgua6">\r
          <img src="./images/proyectos24/negritoyoro/agua7.jpeg" class="active" alt="SistemaAgua7">\r
          <img src="./images/proyectos24/negritoyoro/agua8.jpeg" class="active" alt="SistemaAgua8">\r
          <img src="./images/proyectos24/negritoyoro/agua9.jpeg" class="active" alt="SistemaAgua9">\r
          <img src="./images/proyectos24/negritoyoro/agua10.jpeg" class="active" alt="SistemaAgua10">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Reposición del Sistema de Agua Potable</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos24/hondumex/hondumex1.jpeg" class="active" alt="HONDUMEX1">\r
          <img src="./images/proyectos24/hondumex/hondumex2.jpeg" class="active" alt="HONDUMEX2">\r
          <img src="./images/proyectos24/hondumex/hondumex3.jpeg" class="active" alt="HONDUMEX3">\r
          <img src="./images/proyectos24/hondumex/hondumex4.jpeg" class="active" alt="HONDUMEX4">\r
          <img src="./images/proyectos24/hondumex/hondumex5.jpeg" class="active" alt="HONDUMEX5">\r
          <img src="./images/proyectos24/hondumex/hondumex6.jpeg" class="active" alt="HONDUMEX6">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>HONDUMEX</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli1.jpeg" class="active" alt="PAVDANLI1">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli2.jpeg" class="active" alt="PAVDANLI2">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli3.jpeg" class="active" alt="PAVDANLI3">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli4.jpeg" class="active" alt="PAVDANLI4">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli5.jpeg" class="active" alt="PAVDANLI5">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli6.jpeg" class="active" alt="PAVDANLI6">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli7.jpeg" class="active" alt="PAVDANLI7">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli8.jpeg" class="active" alt="PAVDANLI8">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli9.jpeg" class="active" alt="PAVDANLI9">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli10.jpeg" class="active" alt="PAVDANLI10">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli11.jpeg" class="active" alt="PAVDANLI11">\r
          <img src="./images/proyectos25/pavimento-danli/pavdanli12.jpeg" class="active" alt="PAVDANLI12">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Pavimento Danlí</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/bomberos/bomberos1.jpeg" class="active" alt="BOMBEROS1">\r
          <img src="./images/proyectos25/bomberos/bomberos2.jpeg" class="active" alt="BOMBEROS2">\r
          <img src="./images/proyectos25/bomberos/bomberos3.jpeg" class="active" alt="BOMBEROS3">\r
          <img src="./images/proyectos25/bomberos/bomberos4.jpeg" class="active" alt="BOMBEROS4">\r
          <img src="./images/proyectos25/bomberos/bomberos5.jpeg" class="active" alt="BOMBEROS5">\r
          <img src="./images/proyectos25/bomberos/bomberos6.jpeg" class="active" alt="BOMBEROS6">\r
          <img src="./images/proyectos25/bomberos/bomberos7.jpeg" class="active" alt="BOMBEROS7">\r
          <img src="./images/proyectos25/bomberos/bomberos8.jpeg" class="active" alt="BOMBEROS8">\r
          <img src="./images/proyectos25/bomberos/bomberos9.jpeg" class="active" alt="BOMBEROS9">\r
          <img src="./images/proyectos25/bomberos/bomberos10.jpeg" class="active" alt="BOMBEROS10">\r
          <img src="./images/proyectos25/bomberos/bomberos11.jpeg" class="active" alt="BOMBEROS11">\r
          <img src="./images/proyectos25/bomberos/bomberos12.jpeg" class="active" alt="BOMBEROS12">\r
          <img src="./images/proyectos25/bomberos/bomberos13.jpeg" class="active" alt="BOMBEROS13">\r
          <img src="./images/proyectos25/bomberos/bomberos14.jpeg" class="active" alt="BOMBEROS14">\r
          <img src="./images/proyectos25/bomberos/bomberos15.jpeg" class="active" alt="BOMBEROS15">\r
          <img src="./images/proyectos25/bomberos/bomberos16.jpeg" class="active" alt="BOMBEROS16">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Subestación de Bomberos N.8</strong></h3>\r
      </div>\r
\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/las-palmas/policlinico1.jpeg" class="active" alt="POLOCLINICO1">\r
          <img src="./images/proyectos25/las-palmas/policlinico2.jpeg" class="active" alt="POLOCLINICO2">\r
          <img src="./images/proyectos25/las-palmas/policlinico3.jpeg" class="active" alt="POLOCLINICO3">\r
          <img src="./images/proyectos25/las-palmas/policlinico4.jpeg" class="active" alt="POLOCLINICO4">\r
          <img src="./images/proyectos25/las-palmas/policlinico5.jpeg" class="active" alt="POLOCLINICO5">\r
          <img src="./images/proyectos25/las-palmas/policlinico6.jpeg" class="active" alt="POLOCLINICO6">\r
          <img src="./images/proyectos25/las-palmas/policlinico7.jpeg" class="active" alt="POLOCLINICO7">\r
          <img src="./images/proyectos25/las-palmas/policlinico8.jpeg" class="active" alt="POLOCLINICO8">\r
          <img src="./images/proyectos25/las-palmas/policlinico9.jpeg" class="active" alt="POLOCLINICO9">\r
          <img src="./images/proyectos25/las-palmas/policlinico10.jpeg" class="active" alt="POLOCLINICO10">\r
          <img src="./images/proyectos25/las-palmas/policlinico11.jpeg" class="active" alt="POLOCLINICO11">\r
          <img src="./images/proyectos25/las-palmas/policlinico12.jpeg" class="active" alt="POLOCLINICO12">\r
          <img src="./images/proyectos25/las-palmas/policlinico13.jpeg" class="active" alt="POLOCLINICO13">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Policlínico Las Palmas</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon1.jpeg" class="active" alt="PAPALON1">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon2.jpeg" class="active" alt="PAPALON2">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon3.jpeg" class="active" alt="PAPALON3">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon4.jpeg" class="active" alt="PAPALON4">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon5.jpeg" class="active" alt="PAPALON5">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon6.jpeg" class="active" alt="PAPALON6">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon7.jpeg" class="active" alt="PAPALON7">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon8.jpeg" class="active" alt="PAPALON8">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon9.jpeg" class="active" alt="PAPALON9">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon10.jpeg" class="active" alt="PAPALON10">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon11.jpeg" class="active" alt="PAPALON11">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon12.jpeg" class="active" alt="PAPALON12">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon13.jpeg" class="active" alt="PAPALON13">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon14.jpeg" class="active" alt="PAPALON14">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon15.jpeg" class="active" alt="PAPALON15">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon16.jpeg" class="active" alt="PAPALON16">\r
          <img src="./images/proyectos25/tramo-el-papalon/papalon17.jpeg" class="active" alt="PAPALON17">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani1.jpeg" class="active" alt="ERAMANI1">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani2.jpeg" class="active" alt="ERAMANI2">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani3.jpeg" class="active" alt="ERAMANI3">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani4.jpeg" class="active" alt="ERAMANI4">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani5.jpeg" class="active" alt="ERAMANI5">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani6.jpeg" class="active" alt="ERAMANI6">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani7.jpeg" class="active" alt="ERAMANI7">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani8.jpeg" class="active" alt="ERAMANI8">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani9.jpeg" class="active" alt="ERAMANI9">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani10.jpeg" class="active" alt="ERAMANI10">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani11.jpeg" class="active" alt="ERAMANI11">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani12.jpeg" class="active" alt="ERAMANI12">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani13.jpeg" class="active" alt="ERAMANI13">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani14.jpeg" class="active" alt="ERAMANI14">\r
          <img src="./images/proyectos25/mantenimiento-eramani/eramani15.jpeg" class="active" alt="ERAMANI15">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Mantenimiento ERAMANI</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/vivero-municipal/vivero1.jpeg" class="active" alt="VIVERO1">\r
          <img src="./images/proyectos25/vivero-municipal/vivero2.jpeg" class="active" alt="VIVERO2">\r
          <img src="./images/proyectos25/vivero-municipal/vivero3.jpeg" class="active" alt="VIVERO3">\r
          <img src="./images/proyectos25/vivero-municipal/vivero4.jpeg" class="active" alt="VIVERO4">\r
          <img src="./images/proyectos25/vivero-municipal/vivero5.jpeg" class="active" alt="VIVERO5">\r
          <img src="./images/proyectos25/vivero-municipal/vivero6.jpeg" class="active" alt="VIVERO6">\r
          <img src="./images/proyectos25/vivero-municipal/vivero7.jpeg" class="active" alt="VIVERO7">\r
          <img src="./images/proyectos25/vivero-municipal/vivero8.jpeg" class="active" alt="VIVERO8">\r
          <img src="./images/proyectos25/vivero-municipal/vivero9.jpeg" class="active" alt="VIVERO9">\r
          <img src="./images/proyectos25/vivero-municipal/vivero10.jpeg" class="active" alt="VIVERO10">\r
          <img src="./images/proyectos25/vivero-municipal/vivero11.jpeg" class="active" alt="VIVERO11">\r
          <img src="./images/proyectos25/vivero-municipal/vivero12.jpeg" class="active" alt="VIVERO12">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Vivero Municipal</strong></h3>\r
      </div>\r
\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable1.jpeg" class="active"\r
            alt="REPOSICION1">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable2.jpeg" class="active"\r
            alt="REPOSICION2">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable3.jpeg" class="active"\r
            alt="REPOSICION3">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable4.jpeg" class="active"\r
            alt="REPOSICION4">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable5.jpeg" class="active"\r
            alt="REPOSICION5">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable6.jpeg" class="active"\r
            alt="REPOSICION6">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable7.jpeg" class="active"\r
            alt="REPOSICION7">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable8.jpeg" class="active"\r
            alt="REPOSICION8">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable9.jpeg" class="active"\r
            alt="REPOSICION9">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable10.jpeg" class="active"\r
            alt="REPOSICION10">\r
          <img src="./images/proyectos25/reposicion-agua-potable/reposicion-agua-potable11.jpeg" class="active"\r
            alt="REPOSICION11">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Proyecto Reposición Sistema de Agua Potable Ciudad Guaymas y Centro Poblado El Negrito Yoro</strong>\r
        </h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua1.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA1">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua2.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA2">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua3.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA3">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua4.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA4">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua5.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA5">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua6.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA6">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua7.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA7">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua8.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA8">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua9.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA9">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua10.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA10">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua11.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA11">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua12.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA12">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua13.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA13">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua14.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA14">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua15.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA15">\r
          <img src="./images/proyectos25/puente-ojosdeagua/puente_ojosdeagua16.jpeg" class="active"\r
            alt="PUENTEOJOSDEAGUA16">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Puente Ojos de Agua</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion1.jpeg" class="active" alt="RESIDENCIA1">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion2.jpeg" class="active" alt="RESIDENCIA2">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion3.jpeg" class="active" alt="RESIDENCIA3">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion4.jpeg" class="active" alt="RESIDENCIA4">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion5.jpeg" class="active" alt="RESIDENCIA5">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion6.jpeg" class="active" alt="RESIDENCIA6">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion7.jpeg" class="active" alt="RESIDENCIA7">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion8.jpeg" class="active" alt="RESIDENCIA8">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion9.jpeg" class="active" alt="RESIDENCIA9">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion10.jpeg" class="active" alt="RESIDENCIA10">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion11.jpeg" class="active" alt="RESIDENCIA11">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion12.jpeg" class="active" alt="RESIDENCIA12">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion13.jpeg" class="active" alt="RESIDENCIA13">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion14.jpeg" class="active" alt="RESIDENCIA14">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion15.jpeg" class="active" alt="RESIDENCIA15">\r
          <img src="./images/proyectos25/remodelacion-residencia/remodelacion16.jpeg" class="active" alt="RESIDENCIA16">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Remodelación De Residencia</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion1.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA1">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion2.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA2">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion3.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA3">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion4.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA4">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion5.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA5">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion6.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA6">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion7.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA7">\r
          <img src="./images/proyectos25/reposicion-agua-guaimaca/reposicion8.jpeg" class="active"\r
            alt="REPOSICIONGUAIMACA8">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Reposición Sistema Agua Potable en Varias Aldeas del Municipio de Guaimaca</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir1.jpeg" class="active" alt="PAVELPORVENIR1">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir2.jpeg" class="active" alt="PAVELPORVENIR2">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir3.jpeg" class="active" alt="PAVELPORVENIR3">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir4.jpeg" class="active" alt="PAVELPORVENIR4">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir5.jpeg" class="active" alt="PAVELPORVENIR5">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir6.jpeg" class="active" alt="PAVELPORVENIR6">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir7.jpeg" class="active" alt="PAVELPORVENIR7">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir8.jpeg" class="active" alt="PAVELPORVENIR8">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir9.jpeg" class="active" alt="PAVELPORVENIR9">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir10.jpeg" class="active" alt="PAVELPORVENIR10">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir11.jpeg" class="active" alt="PAVELPORVENIR11">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir12.jpeg" class="active" alt="PAVELPORVENIR12">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir13.jpeg" class="active" alt="PAVELPORVENIR13">\r
          <img src="./images/proyectos25/pavimentacion-elporvenir/pavelporvenir14.jpeg" class="active" alt="PAVELPORVENIR14">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Pavimento El Porvenir</strong></h3>\r
      </div>\r
\r
      <div class="portfolio-card">\r
        <div class="card-images">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca1.jpeg" class="active" alt="PAVGUAIMACA1">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca2.jpeg" class="active" alt="PAVGUAIMACA2">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca3.jpeg" class="active" alt="PAVGUAIMACA3">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca4.jpeg" class="active" alt="PAVGUAIMACA4">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca5.jpeg" class="active" alt="PAVGUAIMACA5">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca6.jpeg" class="active" alt="PAVGUAIMACA6">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca7.jpeg" class="active" alt="PAVGUAIMACA7">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca8.jpeg" class="active" alt="PAVGUAIMACA8">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca9.jpeg" class="active" alt="PAVGUAIMACA9">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca10.jpeg" class="active" alt="PAVGUAIMACA10">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca11.jpeg" class="active" alt="PAVGUAIMACA11">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca12.jpeg" class="active" alt="PAVGUAIMACA12">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca13.jpeg" class="active" alt="PAVGUAIMACA13">\r
          <img src="./images/proyectos25/pavimentacion-guaimaca/pavguaimaca14.jpeg" class="active" alt="PAVGUAIMACA14">\r
          <div class="card-buttons">\r
            <button class="prev">&#10094;</button>\r
            <button class="next">&#10095;</button>\r
          </div>\r
        </div>\r
        <h3><strong>Pavimento Guaimaca</strong></h3>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- MODAL -->\r
<div id="imgModal" class="img-modal">\r
  <button class="close-modal">&times;</button>\r
  <button id="prevModal" class="modal-btn prev">&#10094;</button>\r
  <img src="" alt="">\r
  <button id="nextModal" class="modal-btn next">&#10095;</button>\r
</div>`,P=`<footer id="contact">\r
  <div class="container footer-container">\r
    <div class="footer-logo"><img src="./images/enocsa4.jpeg" alt="Equipo ENOCSA"></div>\r
    <p><strong>ENOCSA: Empresa en Obras de Construcción S.A.</strong></p>\r
    <ul class="footer-links">\r
      <li><a href="#about"><strong>Nosotros</strong></a></li>\r
      <li><a href="#services"><strong>Servicios</strong></a></li>\r
      <li><a href="#portfolio"><strong>Portafolio</strong></a></li>\r
    </ul>\r
    <p><strong>Contacto:</strong> enocsateg@gmail.com | Tel: +504 2213-4481</br>+504 9998-8909</p></br>\r
    <p><strong>Dirección:</strong> Res. Las Hadas, Villa San Rafael, Bloque “B”, Casa#6, Comayagüela, M.D.C., Honduras C.A.</p>\r
  </div></br>\r
    <p><strong>&copy; ENOCSA | Todos los derechos reservados.</strong></p>\r
</footer>\r
`,C=document.querySelector("#app");C.innerHTML=`
  ${E}
  ${O}
  ${f}
  ${S}
  ${N}
  ${P}
`;const v=document.querySelector(".hamburger"),u=document.querySelector(".nav-links");v.addEventListener("click",()=>{u.classList.toggle("active"),v.classList.toggle("active")});document.querySelectorAll(".nav-links a, .footer-links a").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const c=document.querySelector(a.getAttribute("href"));c&&c.scrollIntoView({behavior:"smooth"}),u.classList.contains("active")&&(u.classList.remove("active"),v.classList.remove("active"))})});const n=document.getElementById("imgModal"),t=n.querySelector("img"),M=n.querySelector(".close-modal"),h=n.querySelector("#prevModal"),R=n.querySelector("#nextModal");let g=[],l=0;function A(a,s){g=Array.from(s).map(c=>c.src),l=a,t.src=g[l],n.style.display="flex",document.body.style.overflow="hidden"}function j(){n.style.display="none",document.body.style.overflow=""}function b(a){l=(a+g.length)%g.length,t.src=g[l]}M.addEventListener("click",j);n.addEventListener("click",a=>{a.target===n&&j()});h.addEventListener("click",a=>{a.stopPropagation(),b(l-1)});R.addEventListener("click",a=>{a.stopPropagation(),b(l+1)});document.querySelectorAll(".portfolio-card").forEach(a=>{const s=a.querySelectorAll(".card-images img"),c=a.querySelector(".prev"),m=a.querySelector(".next");let e=0;function r(i){s.forEach((p,d)=>p.classList.toggle("active",d===i))}c.addEventListener("click",i=>{i.stopPropagation(),e=(e-1+s.length)%s.length,r(e)}),m.addEventListener("click",i=>{i.stopPropagation(),e=(e+1)%s.length,r(e)}),s.forEach((i,p)=>{i.addEventListener("click",d=>{d.stopPropagation(),A(p,s)})}),r(e)});let o=1,y=0;function U(){o=1,t.style.transform="scale(1)"}const L=A;A=function(a,s){L(a,s),U()};t.addEventListener("wheel",a=>{a.preventDefault(),o+=a.deltaY*-.001,o=Math.min(Math.max(1,o),3),t.style.transform=`scale(${o})`},{passive:!1});t.addEventListener("touchstart",a=>{a.touches.length===2&&(y=I(a.touches[0],a.touches[1]))});t.addEventListener("touchmove",a=>{if(a.touches.length===2){a.preventDefault();const s=I(a.touches[0],a.touches[1]);o*=s/y,o=Math.min(Math.max(1,o),3),t.style.transform=`scale(${o})`,y=s}},{passive:!1});function I(a,s){return Math.hypot(s.clientX-a.clientX,s.clientY-a.clientY)}
