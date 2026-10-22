(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const C=`<nav class="navbar" aria-label="Navegación principal">
  <div class="container navbar-container">
    <a class="logo" href="#inicio" aria-label="Ir al inicio">
      <img src="./images/logo.png" alt="ENOCSA">
    </a>

    <button
      class="hamburger"
      type="button"
      aria-label="Abrir menú"
      aria-controls="nav-links"
      aria-expanded="false"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" id="nav-links">
      <li><a href="#about">Nosotros</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#portfolio">Portafolio</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </div>
</nav>
`,h=`<section id="inicio" class="hero" aria-labelledby="hero-title">
  <div class="overlay">
    <div class="container hero-content">
      <p class="hero-eyebrow">Ingeniería y construcción civil</p>
      <h1 id="hero-title">Construyendo el Futuro con Responsabilidad y Unión</h1>
      <p class="hero-subtitle">Soluciones integrales en ingeniería y construcción civil.</p>
      <a href="#portfolio" class="btn-primary">Conoce Nuestros Proyectos</a>
    </div>
  </div>
</section>
`,P=`<section id="about" class="about">
  <div class="container">
    <div class="section-heading">
      <span>ENOCSA</span>
      <h2>Sobre Nosotros</h2>
      <p>Experiencia, capacidad técnica y compromiso con el desarrollo de Honduras.</p>
    </div>

    <div class="about-container">
      <div class="about-img">
        <img src="./images/enocsa4.png" alt="Equipo de trabajo de ENOCSA" loading="lazy" decoding="async">
      </div>

      <div class="about-text">
        <h3>Una trayectoria construida con experiencia</h3>
        <p>En 2008 se funda CONSTRUCCIONES ENOC GARCIA C.E.G. en Tegucigalpa M.D.C., por el ING. EDDUIN ENOC GARCIA
          MATUTE, en el grado de Contratista Individual.</p>
        <p>Para ese entonces se realizaron proyectos como ser; Construcción de Puentes Vehiculares y Peatonales y
          Construcción de muro de contención anclado en Tegucigalpa, Construcción de Línea de conducción y obras
          complementarias en el municipio de Candeleros Juticalpa y La Ampliación de alcantarillado sanitario en el
          Municipio de San Ignacio, entre otros.</p>
        <p>En el año 2010 realiza una alianza ENOC-COINPRO-COLOLO-INPROCO-IGC, empresas que en conjunto realizaron
          consultorías, formulación y ejecución de proyectos de infraestructura como ser Pavimentación de Carreteras,
          obras Hidráulicas, entre otras.</p>
        <p>En 2013 se forma una red de Socios, Ingenieros Contratistas Individuales, creando <strong>EMPRESA EN OBRAS DE
            CONSTRUCCION S.A. DE C.V.- ENOC S.A. DE C.V.</strong> la cual es dirigida por el <strong>ING. EDDUIN ENOC
            GARCIA MATUTE</strong> como Gerente General y Representante de la nueva empresa.</p>

        <details class="about-history">
          <summary>Conoce más de nuestra historia</summary>
          <div class="about-history-content">
            <p>ENOC S.A. nace con la ideología principal de crecer como empresa, abarcando así proyectos de mayor
              envergadura que no se podrían realizar como Contratista Individual.</p>
            <p>Esta seguirá siendo una empresa dedicada a la formulación y ejecución de obras civiles en Honduras,
              desarrollándose a largo plazo como empresa, adquiriendo nuevas experiencias y estudiando estas con el
              objetivo de mejorar continuamente.</p>
            <p>La empresa constructora cuenta con el mejor equipo humano de alta capacidad y experiencia, así como la
              mejor Calidad de mano de obra enelmercadode la Construcción; Actualmente desarrolla proyectos de
              Estructura e Infraestructura en las ramas de Ingeniería Civil.</p>
            <p>En cuanto a nuestros clientes estos pueden ser en el ámbito público como privado con el objetivo de
              adquirir mayor conocimiento y crecer en ambos argumentos.</p>
            <p>ENOC S.A. Más que un gran equipo de trabajo, es una Gran Familia que se preocupa por el desarrollo y
              crecimiento de su personal, la empresa y por supuesto de Honduras.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="identity-section">
      <div class="section-heading compact">
        <span>Lo que nos Define</span>
        <h2>Nuestra Identidad</h2>
      </div>

      <div class="card-section">
        <article class="info-card" id="mision">
          <div class="card-icon"><i class="fa-solid fa-bullseye" aria-hidden="true"></i></div>
          <h3>Misión</h3>
          <p>Somos una empresa líder en la formulación y ejecución de obras civiles, dedicada a transformar
            infraestructuras con precisión técnica y tecnología de vanguardia. Nuestro compromiso es superar las
            expectativas de nuestros clientes mediante la excelencia operativa, el desarrollo integral de nuestra gran
            familia de colaboradores y la generación de un impacto positivo en el desarrollo sostenible de Honduras.</p>
        </article>

        <article class="info-card" id="politica">
          <div class="card-icon"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></div>
          <h3>Política de Calidad</h3>
          <p>En ENOC S.A. de C.V., la calidad es nuestra firma. Nos comprometemos a entregar soluciones de ingeniería
            modernas y eficientes, fundamentadas en la experiencia técnica, la innovación y la mejora continua de
            nuestros procesos. Garantizamos la excelencia operativa a través de un equipo humano altamente calificado,
            el estricto cumplimiento de los estándares normativos y la priorización de la seguridad ocupacional,
            asegurando así la satisfacción total de nuestros clientes y la durabilidad de nuestras obras.</p>
        </article>

        <article class="info-card" id="vision">
          <div class="card-icon"><i class="fa-solid fa-eye" aria-hidden="true"></i></div>
          <h3>Visión</h3>
          <p>Para el año 2030, consolidarnos como el referente de ingeniería y construcción más confiable a nivel
            regional, reconocidos por nuestra capacidad técnica para ejecutar proyectos de alta complejidad y por
            nuestra solidez financiera. Aspiramos a ser el socio estratégico preferido de los sectores público y
            privado, impulsando la modernización de la infraestructura en la región.</p>
        </article>

        <article class="info-card" id="valores">
          <div class="card-icon"><i class="fa-solid fa-handshake" aria-hidden="true"></i></div>
          <h3>Valores Fundamentales</h3>
          <ul>
            <li><strong>Excelencia en Ingeniería:</strong> No solo construimos, aplicamos rigor técnico y carácter
              ingenieril en cada detalle para garantizar la durabilidad y funcionalidad de nuestras obras.</li>
            <li><strong>Integridad y Responsabilidad:</strong> Actuamos con seriedad y transparencia, asumiendo cada
              proyecto como un compromiso inquebrantable con el país y el cliente.</li>
            <li><strong>Sinergia y Trabajo en Equipo:</strong> Funcionamos como una unidad coordinada donde el talento
              de cada integrante se potencia para alcanzar objetivos comunes.</li>
            <li><strong>Vocación de Servicio (Enfoque al Cliente):</strong> Somos aliados estratégicos; asesoramos a
              nuestros clientes para que tomen las mejores decisiones técnicas y financieras.</li>
            <li><strong>Desarrollo Humano:</strong> Valoramos a nuestra gente como una familia, fomentando su
              crecimiento profesional y bienestar como motor de nuestra empresa.</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</section>`,E=`<section id="services" class="services">
  <div class="container">
    <div class="section-heading">
      <span>Lo que hacemos</span>
      <h2>Servicios</h2>
      <p>Soluciones técnicas para acompañar cada etapa de un proyecto de construcción.</p>
    </div>

    <div class="services-grid">
      <article class="card">
        <div class="card-img">
          <img src="./images/gerencia.jpeg" alt="Gerencia de proyectos" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <div class="service-icon"><i class="fa-solid fa-list-check" aria-hidden="true"></i></div>
          <h3>Gerencia de Proyectos</h3>
          <p>Administración, planificación y control de proyectos de construcción, garantizando el cumplimiento de plazos, costos y estándares técnicos establecidos.</p>
        </div>
      </article>

      <article class="card">
        <div class="card-img">
          <img src="./images/obras_civiles.jpeg" alt="Equipo de construcción" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <div class="service-icon"><i class="fa-solid fa-helmet-safety" aria-hidden="true"></i></div>
          <h3>Equipo de Construcción</h3>
          <p>Ejecución de obras civiles mediante un equipo de trabajo capacitado, comprometido con la calidad, la seguridad y el desarrollo eficiente de cada proyecto.</p>
        </div>
      </article>
    </div>
  </div>
</section>
`,A=`<section id="proyectos" class="featured-projects">
  <div class="container">
    <div class="section-heading">
      <span>Proyectos</span>
      <h2>Proyectos Destacados</h2>
      <p>Descubre algunos de nuestros proyectos</p>
    </div>
    <p class="featured-projects-instruction">Selecciona un proyecto para conocer más.</p>
    <div class="featured-projects-grid">
<div class="featured-project-card" data-project-card="featured">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Vivero Municipal">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/26. VIVERO MUNICIPAL/vivero1.jpeg" alt="Proyecto Vivero Municipal">
              <span class="featured-project-card-caption">
                <strong>Mejoramineto de Vivero Municipal</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Mejoramineto de Vivero Municipal</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/vivero-municipal.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="featured">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Subestación de Bomberos N.8">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/19. Subestación de Bomberos N.8/bomberos1.jpeg" alt="Proyecto Subestación de Bomberos N.8">
              <span class="featured-project-card-caption">
                <strong>Subestación de Bomberos N.8</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Subestación de Bomberos N.8</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/subestacion-bomberos-n8.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="featured">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Macro Distrito de Salud Las Palmas SPS">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/P 21. MACRO LAS PALMAS SPS/macro_las_palmas1.jpeg" alt="Proyecto Macro Distrito de Salud Las Palmas SPS">
              <span class="featured-project-card-caption">
                <strong>Macro Distrito de Salud Las Palmas SPS</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Macro Distrito de Salud Las Palmas SPS</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/policlinico-las-palmas.html">Ver proyecto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="portfolio" class="portfolio">
  <div class="container">
    <div class="section-heading">
      <span>Portafolio</span>
      <h2>Proyectos</h2>
      <p>Conoce algunos de los proyectos que reflejan nuestra experiencia en ingeniería y construcción.</p>
      <p>Explora nuestro portafolio para conocer las obras desarrolladas por ENOCSA.</p>
    </div>
    <div class="portfolio-projects-grid">
      <div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de HONDUMEX">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/7. HONDUMEX/hondumex1.jpeg" alt="Proyecto HONDUMEX">
              <span class="featured-project-card-caption">
                <strong>Ampliación Subestación Toncontín, Enchape de Talud y Cimentaciones de Postes</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Ampliación Subestación Toncontín, Enchape de Talud y Cimentaciones de Postes</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="proyectos/hondumex.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Sub Estación Eléctrica Santa Marta">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/2. Ampliación de Sub estación Eléctrica Santa Marta/subestacion1.jpeg" alt="Proyecto Sub Estación Eléctrica Santa Marta">
              <span class="featured-project-card-caption">
                <strong>Sub Estación Eléctrica Santa Marta</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Sub Estación Eléctrica Santa Marta</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="proyectos/santa-marta.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Mantenimiento ERAMANI">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/7. ERAMANI 2026/eramani1.jpeg" alt="Proyecto Mantenimiento ERAMANI">
              <span class="featured-project-card-caption">
                <strong>Servicio de Operación y Mantenimiento con Maquinaria de Cierre Técnico Bi-Municipal</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Servicio de Operación y Mantenimiento con Maquinaria de Cierre Técnico Bi-Municipal</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/mantenimiento-eramani.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/22. MANTENIMIENTO DE LA RED VIAL NO PAVIMENTADA, TRAMO EL PAPALÓN - LAS CONCHAS - V221, 0 EL PEDRERITO - EL PAPAL/mantenimiento_red_vial1.jpeg" alt="Proyecto Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón">
              <span class="featured-project-card-caption">
                <strong>Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/mantenimiento-tramo-papalon.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de PCH El Porvenir, FM">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/16. PCH EL PORVENIR, FM/pch_el_porvenir1.jpeg" alt="Proyecto PCH El Porvenir, FM">
              <span class="featured-project-card-caption">
                <strong>PCH El Porvenir, FM</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>PCH El Porvenir, FM</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pavimento-el-porvenir.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de PCH Barrio El Centro, Guaimaca, FM">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/15. PCH BARRIO EL CENTRO, GUAIMACA, FM/pch_barrio_el_centro_guaimaca1.jpeg" alt="Proyecto PCH Barrio El Centro, Guaimaca, FM">
              <span class="featured-project-card-caption">
                <strong>PCH Barrio El Centro, Guaimaca</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>PCH Barrio El Centro, Guaimaca</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pavimento-guaimaca.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Puente Ojos de Agua">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/24. Puente Ojos de Agua/puente_ojos_de_agua1.jpeg" alt="Proyecto Puente Ojos de Agua">
              <span class="featured-project-card-caption">
                <strong>Puente Ojos de Agua</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Puente Ojos de Agua</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/puente-ojos-de-agua.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Remodelación de Residencia">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/8. REMODELACION DE RESIDENCIA GALO/remodelacion_residencia1.jpeg" alt="Proyecto Remodelación de Residencia">
              <span class="featured-project-card-caption">
                <strong>Remodelación de Residencia</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Remodelación de Residencia</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/remodelacion-residencia.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Proyecto Reposición Sistema de Agua Potable Ciudad Guaymas y Centro Poblado El Negrito Yoro">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/9. PROYECTO REPOSICION SISTEMA DE AGUA POTABLE CIUDAD GUAYMAS Y CENTRO POBLADO EL NEGRITO YORO/negrito_yoro1.jpeg" alt="Proyecto Proyecto Reposición Sistema de Agua Potable Ciudad Guaymas y Centro Poblado El Negrito Yoro">
              <span class="featured-project-card-caption">
                <strong>Reposición del Sistema de Agua Potable en el Casco Urbano</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Reposición del Sistema de Agua Potable en el Casco Urbano</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/reposicion-agua-guaymas-negrito-yoro.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Ampliación de Parque La Concordia Fase II">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/1. AMPLIACION DE PARQUE LA CONCORDIA FASE II/parque_concordia1.jpeg" alt="Proyecto Ampliación de Parque La Concordia Fase II">
              <span class="featured-project-card-caption">
                <strong>Ampliación de Parque La Concordia Fase II</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Ampliación de Parque La Concordia Fase II</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/ampliacion-parque-la-concordia.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Cancha Alemán">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/4. Cancha Aleman/cancha_aleman1.jpeg" alt="Proyecto Cancha Alemán">
              <span class="featured-project-card-caption">
                <strong>Campo Deportivo Alemán</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Campo Deportivo Alemán</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/cancha-aleman.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de PCH Barrio Brisas del Sur, Choluteca">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/4. PCH BARRIO BRISAS DEL SUR, CHOLUTECA (C111288)/pch_brisas_del_sur1.jpeg" alt="Proyecto PCH Barrio Brisas del Sur, Choluteca">
              <span class="featured-project-card-caption">
                <strong>PCH Barrio Brisas del Sur, Choluteca</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>PCH Barrio Brisas del Sur, Choluteca</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pch-barrio-brisas-del-sur.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Cancha Pedregal">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/5. Cancha Pedregal/cancha_pedregal1.jpeg" alt="Proyecto Cancha Pedregal">
              <span class="featured-project-card-caption">
                <strong>Campo Deportivo Pedregal</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Campo Deportivo Pedregal</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/cancha-pedregal.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de PCH Barrio La Libertad, Choluteca">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/5. PCH BARRIO LA LIBERTAD CHOLUTECA (C110893)/pch_la_libertad1.jpeg" alt="Proyecto PCH Barrio La Libertad, Choluteca">
              <span class="featured-project-card-caption">
                <strong>PCH Barrio La Libertad, Choluteca</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>PCH Barrio La Libertad, Choluteca</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pch-barrio-la-libertad.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Edificio de Meteorología Palmerola">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/6. EDF. METEOROLOGIA PALMEROLA/edf_meteorologia_palmerola1.jpeg" alt="Proyecto Edificio de Meteorología Palmerola">
              <span class="featured-project-card-caption">
                <strong>Edificio de Meteorología/Torre de Control Provisional del Aeropuerto Internacional de Palmerola</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Edificio de Meteorología/Torre de Control Provisional del Aeropuerto Internacional de Palmerola</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/edificio-meteorologia-palmerola.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Hospital Juan Manuel Gálvez">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/8. HOSPITAL JUAN MANUEL GALVEZ/hospital_juan_manuel1.jpeg" alt="Proyecto Hospital Juan Manuel Gálvez">
              <span class="featured-project-card-caption">
                <strong>Hospital Juan Manuel Gálvez</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Hospital Juan Manuel Gálvez</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/hospital-juan-manuel-galvez.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Dragado Maralito">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/9. DRAGADO MARALITO/dragado_maralito1.jpeg" alt="Proyecto Dragado Maralito">
              <span class="featured-project-card-caption">
                <strong>Proyecto de intervención mediante trabajos de dragado en el sector Maralito</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Proyecto de intervención mediante trabajos de dragado en el sector Maralito</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/dragado-maralito.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Puente Altos de Centroamérica">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/11. Puente Altos de Centroamerica/puente_centroamerica1.png" alt="Proyecto Puente Altos de Centroamérica">
              <span class="featured-project-card-caption">
                <strong>Puente Peatonal en Col. Altos de Centroamérica</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Puente Peatonal en Col. Altos de Centroamérica</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/puente-altos-de-centroamerica.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Puente La Era">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/12. Puente La Era/puente_laera1.png" alt="Proyecto Puente La Era">
              <span class="featured-project-card-caption">
                <strong>Puente Peatonal La Era</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Puente Peatonal La Era</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/puente-la-era.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Puente Prados Universitarios">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/13. Puente Prados Universitarios/puente_prados_universitarios1.png" alt="Proyecto Puente Prados Universitarios">
              <span class="featured-project-card-caption">
                <strong>Puente Prados Universitarios</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Puente Prados Universitarios</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/puente-prados-universitarios.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de PCH Campus El Tabor, Valle de Ángeles">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/14. PCH CAMPUS EL TABOR, VALLE DE ANGELES/pch_campus_el_tabor_valle_de_angeles1.jpeg" alt="Proyecto PCH Campus El Tabor, Valle de Ángeles">
              <span class="featured-project-card-caption">
                <strong>PCH Campus El Tabor, Valle de Ángeles</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>PCH Campus El Tabor, Valle de Ángeles</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pch-campus-el-tabor.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Reparación CEB República de Panamá">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/15.REPARACION CEB REPUBLICA DE PANAMA/reparacion_ceb_republica_panama1.jpeg" alt="Proyecto Reparación CEB República de Panamá">
              <span class="featured-project-card-caption">
                <strong>Reparación CEB República de Panamá</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Reparación CEB República de Panamá</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/reparacion-ceb-republica-panama.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Tascalapa">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/16. Tascalapa/tascalapa1.jpeg" alt="Proyecto Tascalapa">
              <span class="featured-project-card-caption">
                <strong class="project-title-long">Construcción de Redes de Tubería de Conducción, Distribución y Terciaria, Sulaco, Yoro – Sector Tascalapa / Construcción de Presa Derivadora, Sulaco, Yoro – Sector Siguapa</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Construcción de Redes de Tubería de Conducción, Distribución y Terciaria, Sulaco, Yoro – Sector Tascalapa / Construcción de Presa Derivadora, Sulaco, Yoro – Sector Siguapa</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/tascalapa.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Puente Maralito">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/23. Puente Maralito/puente_maralito1.jpeg" alt="Proyecto Puente Maralito">
              <span class="featured-project-card-caption">
                <strong>Dagrado Sobre Río Maralito</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Dagrado Sobre Río Maralito</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/puente-maralito.html">Ver proyecto</a>
          </div>
        </div>
      </div>
<div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Guatilla">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/27. Guatilla/guatilla1.jpeg" alt="Proyecto Guatilla">
              <span class="featured-project-card-caption">
                <strong>Reposición Sistema de Agua Potable en Pacura y Toro Muerto en Gualaco</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Reposición Sistema de Agua Potable en Pacura y Toro Muerto en Gualaco</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/guatilla.html">Ver proyecto</a>
          </div>
        </div>
      </div>
      <div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de IPM Funeraria Comayagua">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/28. IPM_Funeraria Comayagua/funeraria_comayagua1.jpeg" alt="Proyecto IPM Funeraria Comayagua">
              <span class="featured-project-card-caption">
                <strong>IPM Funeraria Comayagua</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>IPM Funeraria Comayagua</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/ipm-funeraria-comayagua.html">Ver proyecto</a>
          </div>
        </div>
      </div>
      <div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de IPM Cementerio Comayagua">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/29. IMP_Cementerio Comayagua/cementerio_comayagua1.jpeg" alt="Proyecto IPM Cementerio Comayagua">
              <span class="featured-project-card-caption">
                <strong>IPM Cementerio Comayagua</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>IPM Cementerio Comayagua</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/ipm-cementerio-comayagua.html">Ver proyecto</a>
          </div>
        </div>
      </div>
      <div class="featured-project-card" data-project-card="portfolio">
        <div class="featured-project-card-inner">
          <div class="featured-project-card-face featured-project-card-front">
            <button class="featured-project-flip-button" type="button" aria-label="Mostrar información de Pavimentación El Níspero, Santa Bárbara">
              <img loading="lazy" decoding="async" src="./images/proyectos_enocsa_2025_web/30. Pavimentacion El Nispero, Santa Barbara/el_nispero1.jpeg" alt="Proyecto Pavimentación El Níspero, Santa Bárbara">
              <span class="featured-project-card-caption">
                <strong>Pavimentación El Níspero, Santa Bárbara</strong>
                <small>Ver información</small>
              </span>
            </button>
          </div>
          <div class="featured-project-card-face featured-project-card-back">
            <strong>Pavimentación El Níspero, Santa Bárbara</strong>
            <span>Consulta la información completa de este proyecto.</span>
            <a class="featured-project-link" href="./proyectos/pavimentacion-el-nispero-santa-barbara.html">Ver proyecto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,M=`<footer id="contact">
  <div class="container footer-container">
    <div class="footer-brand">
      <img src="./images/logo_footer.png" alt="ENOCSA" loading="lazy" decoding="async">
    </div>

    <div class="footer-navigation">
      <h3>Navegación</h3>
      <ul class="footer-links">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h3>Contacto</h3>
      <p><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:enocsateg@gmail.com">enocsateg@gmail.com</a></p>
      <p><i class="fa-solid fa-phone" aria-hidden="true"></i> <a href="tel:+50422134481">+504 2213-4481</a></p>
      <p><i class="fa-solid fa-mobile-screen" aria-hidden="true"></i> <a href="tel:+50499988909">+504 9998-8909</a></p>
      <address><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Res. Las Hadas, Villa San Rafael, Bloque “B”, Casa #6, Comayagüela, M.D.C., Honduras C.A.</address>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>&copy; ENOCSA | Todos los derechos reservados.</p>
  </div>
</footer>
`,_=document.querySelector("#app");_.innerHTML=`
  ${C}
  ${h}
  ${P}
  ${E}
  ${A}
  ${M}
`;const s=document.querySelector(".hamburger"),g=document.querySelector(".nav-links");function v(){g.classList.remove("active"),s.classList.remove("active"),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Abrir menú"),document.body.classList.remove("menu-open")}s.addEventListener("click",()=>{const a=g.classList.toggle("active");s.classList.toggle("active",a),s.setAttribute("aria-expanded",String(a)),s.setAttribute("aria-label",a?"Cerrar menú":"Abrir menú"),document.body.classList.toggle("menu-open",a)});document.addEventListener("keydown",a=>{a.key==="Escape"&&g.classList.contains("active")&&v()});window.addEventListener("resize",()=>{window.innerWidth>900&&v()});document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",n=>{const i=document.querySelector(a.getAttribute("href"));i&&(n.preventDefault(),i.scrollIntoView({behavior:"smooth"}),v())})});document.querySelectorAll("[data-project-card]").forEach(a=>{const n=a.querySelector(".featured-project-card-front"),i=a.querySelector(".featured-project-card-back");n.addEventListener("click",()=>a.classList.add("is-flipped")),i.addEventListener("click",l=>{l.target.closest("a")||a.classList.remove("is-flipped")})});const t=document.getElementById("imgModal"),c=t.querySelector("img"),S=t.querySelector(".close-modal"),L=t.querySelector("#prevModal"),V=t.querySelector("#nextModal");let f=[],d=0,o=1,m=0;function j(){o=1,c.style.transform="scale(1)"}function y(){t.style.display="none",c.src="",document.body.style.overflow="",j()}function p(a){d=(a+f.length)%f.length,c.src=f[d],j()}S.addEventListener("click",y);t.addEventListener("click",a=>{a.target===t&&y()});L.addEventListener("click",a=>{a.stopPropagation(),p(d-1)});V.addEventListener("click",a=>{a.stopPropagation(),p(d+1)});document.addEventListener("keydown",a=>{t.style.display==="flex"&&(a.key==="Escape"&&y(),a.key==="ArrowLeft"&&p(d-1),a.key==="ArrowRight"&&p(d+1))});c.addEventListener("wheel",a=>{a.preventDefault(),o+=a.deltaY*-.001,o=Math.min(Math.max(1,o),3),c.style.transform=`scale(${o})`},{passive:!1});c.addEventListener("touchstart",a=>{a.touches.length===2&&(m=b(a.touches[0],a.touches[1]))});c.addEventListener("touchmove",a=>{if(a.touches.length!==2)return;a.preventDefault();const n=b(a.touches[0],a.touches[1]);o*=n/m,o=Math.min(Math.max(1,o),3),c.style.transform=`scale(${o})`,m=n},{passive:!1});function b(a,n){return Math.hypot(n.clientX-a.clientX,n.clientY-a.clientY)}
