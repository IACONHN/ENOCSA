(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const E=`<nav class="navbar">
    <div class="container">
        <div class="logo">
            <a href="index.html">
                <img src="../images/logo.png" alt="Logo Enocsa">
            </a>
        </div>


        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul class="nav-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </div>
</nav>`,O=`<section class="hero">
  <div class="overlay">
    <div class="container hero-content">
      <h1>Construyendo el Futuro con Responsabilidad y Unión</h1>
      <p>Soluciones integrales en ingeniería y construcción civil.</p>
      <a href="#portfolio" class="btn-primary">Conoce Nuestros Proyectos</a>
    </div>
  </div>
</section>

`,f=`<section id="about" class="about">
    <div class="container about-container">
        <div class="about-img">
            <img src="../images/enocsa4.jpeg" alt="Equipo ENOCSA">
        </div>
        <div class="about-text">
            <h2><strong>Sobre Nosotros</strong></h2>
            <p>En 2008 se funda CONSTRUCCIONES ENOC GARCIA C.E.G. en Tegucigalpa M.D.C., por el ING. EDDUIN ENOC GARCIA
                MATUTE, en el grado de Contratista Individual.</p>
            <p>Para ese entonces se realizaron proyectos como ser; Construcción de Puentes Vehiculares y Peatonales y
                Construcción de
                muro de contención anclado en Tegucigalpa, Construcción de Línea de conducción y obras complementarias
                en el
                municipio de Candeleros Juticalpa y La Ampliación de alcantarillado sanitario en el Municipio de San
                Ignacio, entre otros.</p>
            <p>En el año 2010 realiza una alianza ENOC-COINPRO-COLOLO-INPROCO-IGC, empresas que en conjunto realizaron
                consultorías, formulación y ejecución de proyectos de infraestructura como ser Pavimentación de
                Carreteras, obras
                Hidráulicas, entre otras.</p>
            <p>En 2013 se forma una red de Socios, Ingenieros Contratistas Individuales, creando <strong>EMPRESA EN
                    OBRAS DE CONSTRUCCION S.A. DE C.V.- ENOC S.A. DE C.V.</strong> la cual es dirigida por el
                <strong>ING. EDDUIN ENOC GARCIA
                    MATUTE</strong> como Gerente
                General y Representante de la nueva empresa.
            </p>
        </div>
        <div>
            <p>ENOC S.A. nace con la ideología principal de crecer como empresa, abarcando así proyectos de mayor
                envergadura que no se podrían realizar como Contratista Individual.</p></br>
            <p>Esta seguirá siendo una empresa dedicada a la formulación y ejecución de obras civiles en Honduras,
                desarrollándose a largo plazo como empresa, adquiriendo nuevas experiencias y estudiando estas con el
                objetivo de mejorar
                continuamente.</p></br>
            <p>La empresa constructora cuenta con el mejor equipo humano de alta capacidad y experiencia, así como la
                mejor Calidad de mano de obra enelmercadode la Construcción; Actualmente desarrolla proyectos de
                Estructura e
                Infraestructura en las ramas de Ingeniería Civil.</p></br>
            <p>En cuanto a nuestros clientes estos pueden ser en el ámbito público como privado con el objetivo de
                adquirir mayor conocimiento y crecer en ambos argumentos.</p></br>
            <p>ENOC S.A. Más que un gran equipo de trabajo, es una Gran Familia que se preocupa por el desarrollo y
                crecimiento de su personal, la empresa y por supuesto de Honduras.</p>
        </div>
        <section>
            <h2 class="centered"><strong>Datos Generales</strong></h2></br>
            <div class="card-section fade-in">
                <div class="info-card" id="mision">
                    <div class="card-icon"><i class="fa-solid fa-bullseye"></i></div>
                    <h3>Misión</h3>
                    <p>Somos una empresa líder en la formulación y ejecución
                        de obras civiles, dedicada a transformar
                        infraestructuras con precisión técnica y tecnología de
                        vanguardia. Nuestro compromiso es superar las
                        expectativas de nuestros clientes mediante la
                        excelencia operativa, el desarrollo de nuestra Gran
                        Familia de colaboradores y un impacto positivo en el
                        crecimiento de Honduras.
                    </p>
                </div>
                <div class="card-section fade-in">
                    <div class="info-card" id="politica">
                        <div class="card-icon"><i class="fa-solid fa-check-circle"></i></div>
                        <h3>Política de Calidad</h3>
                        <p>En ENOC S.A. de C.V., la calidad es nuestra firma. Nos
                            comprometemos a entregar soluciones de ingeniería
                            moderna fundamentadas en la creatividad, la
                            experiencia y la mejora continua de nuestros procesos.
                            Garantizamos la excelencia a través de mano de obra
                            altamente calificada y el cumplimiento estricto de los
                            estándares técnicos, asegurando siempre la plena
                            satisfacción de nuestros clientes y la seguridad de
                            nuestras obras.
                        </p>
                    </div>
                    <div class="card-section fade-in">
                        <div class="info-card" id="vision">
                            <div class="card-icon"><i class="fa-solid fa-eye"></i></div>
                            <h3>Visión</h3>
                            <p>Para el año 2030, seremos el referente de ingeniería y
                                construcción más confiable a nivel regional,
                                reconocidos por nuestra capacidad técnica para
                                ejecutar proyectos de alta complejidad y por nuestra
                                sólida rentabilidad. Aspiramos a ser el socio estratégico
                                preferido en los sectores público y privado, impulsando
                                la modernización del mercado de la construcción.
                            </p>
                        </div>
                        <div class="card-section fade-in">
                            <div class="info-card" id="valores">
                                <div class="card-icon"><i class="fa-solid fa-handshake"></i></div>
                                <h3>Valores Fundamentales</h3>
                                <ul>
                                    <li><strong>Excelencia en Ingeniería:</strong> No solo construimos,
                                        aplicamos rigor técnico y carácter ingenieril en
                                        cada detalle para garantizar la durabilidad y
                                        funcionalidad de nuestras obras.</li>
                                    <li><strong>Integridad y Responsabilidad:</strong> Actuamos con
                                        seriedad y transparencia, asumiendo cada proyecto
                                        como un compromiso inquebrantable con el país y
                                        el cliente.</li>
                                    <li><strong>Sinergia y Trabajo en Equipo:</strong> Funcionamos como
                                        una unidad coordinada donde el talento de cada
                                        integrante se potencia para alcanzar objetivos
                                        comunes.</li>
                                    <li><strong>Vocación de Servicio (Enfoque al Cliente):</strong> Somos
                                        aliados estratégicos; asesoramos a nuestros clientes
                                        para que tomen las mejores decisiones técnicas y
                                        financieras.</li>
                                    <li><strong>Desarrollo Humano:</strong> Valoramos a nuestra gente
                                        como una familia, fomentando su crecimiento
                                        profesional y bienestar como motor de nuestra
                                        empresa.
                                    </li>
                                </ul>
                            </div>
        </section>
    </div>
</section>`,S=`<section id="services" class="services">
  <div class="container">
    <h2><strong>Servicios</strong></h2>
    <div class="services-grid">
      <div class="card">
        <div class="card-img"><img src="/images/gerencia.jpeg" alt="Gerencia de Proyectos">
        </div>
        <div class="card-body">
          <h3><strong>Gerencia de Proyectos</strong></h3>
          <p>Administración, planificación y control de proyectos de construcción, garantizando el cumplimiento de
            plazos, costos y estándares técnicos establecidos.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="src/assets/images/obras_civiles.jpeg" alt="Equpos de Construccion">
            alt="Construcción"></div>
        <div class="card-body">
          <h3><strong><strong>Equipo de Construcción</strong></strong></h3>
          <p>Ejecución de obras civiles mediante un equipo de trabajo capacitado, comprometido con la calidad, la seguridad y el desarrollo eficiente de cada proyecto.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="src/assets/images/consultoria.jpeg" alt="Consultoría Técnica">
        </div>
        <div class="card-body">
          <h3><strong><strong>Consultoría Técnica en Ingeniería</strong></strong></h3>
          <p>Asesoría técnica especializada para proyectos de infraestructura, enfocada en soluciones eficientes, seguras y sostenibles.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,N=`<section id="portfolio" class="portfolio">
  <div class="container">
    <h2><strong>Portafolio</strong></h2>

    <div class="portfolio-grid">

      <div class="portfolio-card">
        <div class="card-images">
          <img src="../images/proyectos23/fusami/fusami1.jpg" class="active" alt="FUSAMI1">
          <img src="../images/proyectos23/fusami/fusami2.jpg" class="active" alt="FUSAMI2">
          <img src="../images/proyectos23/fusami/fusami3.jpg" class="active" alt="FUSAMI3">
          <img src="../images/proyectos23/fusami/fusami4.jpg" class="active" alt="FUSAMI4">
          <img src="../images/proyectos23/fusami/fusami5.jpg" class="active" alt="FUSAMI5">
          <img src="../images/proyectos23/fusami/fusami6.jpg" class="active" alt="FUSAMI6">
          <img src="../images/proyectos23/fusami/fusami7.jpg" class="active" alt="FUSAMI7">
          <img src="../images/proyectos23/fusami/fusami8.jpg" class="active" alt="FUSAMI8">
          <img src="../images/proyectos23/fusami/fusami9.jpg" class="active" alt="FUSAMI9">
          <img src="../images/proyectos23/fusami/fusami10.jpg" class="active" alt="FUSAMI10">
          <img src="../images/proyectos23/fusami/fusami11.jpg" class="active" alt="FUSAMI11">
          <img src="../images/proyectos23/fusami/fusami12.jpg" class="active" alt="FUSAMI12">
          <img src="../images/proyectos23/fusami/fusami13.jpg" class="active" alt="FUSAMI13">
          <img src="../images/proyectos23/fusami/fusami14.jpg" class="active" alt="FUSAMI14">
          <img src="../images/proyectos23/fusami/fusami15.jpg" class="active" alt="FUSAMI15">
          <img src="../images/proyectos23/fusami/fusami16.jpg" class="active" alt="FUSAMI16">
          <img src="../images/proyectos23/fusami/fusami17.jpg" class="active" alt="FUSAMI17">
          <img src="../images/proyectos23/fusami/fusami18.jpg" class="active" alt="FUSAMI18">
          <img src="../images/proyectos23/fusami/fusami19.jpg" class="active" alt="FUSAMI19">
          <img src="../images/proyectos23/fusami/fusami20.jpg" class="active" alt="FUSAMI20">
          <img src="../images/proyectos23/fusami/fusami21.jpg" class="active" alt="FUSAMI21">
          <img src="../images/proyectos23/fusami/fusami22.jpg" class="active" alt="FUSAMI22">
          <img src="../images/proyectos23/fusami/fusami23.jpg" class="active" alt="FUSAMI23">
          <img src="../images/proyectos23/fusami/fusami24.jpg" class="active" alt="FUSAMI24">
          <img src="../images/proyectos23/fusami/fusami25.jpg" class="active" alt="FUSAMI25">
          <img src="../images/proyectos23/fusami/fusami26.jpg" class="active" alt="FUSAMI26">
          <img src="../images/proyectos23/fusami/fusami27.jpg" class="active" alt="FUSAMI27">
          <img src="../images/proyectos23/fusami/fusami28.jpg" class="active" alt="FUSAMI28">
          <img src="../images/proyectos23/fusami/fusami29.jpg" class="active" alt="FUSAMI29">
          <img src="../images/proyectos23/fusami/fusami30.jpg" class="active" alt="FUSAMI30">
          <img src="../images/proyectos23/fusami/fusami31.jpg" class="active" alt="FUSAMI31">
          <img src="../images/proyectos23/fusami/fusami32.jpg" class="active" alt="FUSAMI32">
          <img src="../images/proyectos23/fusami/fusami33.jpg" class="active" alt="FUSAMI33">
          <img src="../images/proyectos23/fusami/fusami34.jpg" class="active" alt="FUSAMI34">
          <img src="../images/proyectos23/fusami/fusami35.jpg" class="active" alt="FUSAMI35">
          <img src="../images/proyectos23/fusami/fusami36.jpg" class="active" alt="FUSAMI36">
          <img src="../images/proyectos23/fusami/fusami37.jpg" class="active" alt="FUSAMI37">
          <img src="../images/proyectos23/fusami/fusami38.jpg" class="active" alt="FUSAMI38">
          <img src="../images/proyectos23/fusami/fusami39.jpg" class="active" alt="FUSAMI39">
          <img src="../images/proyectos23/fusami/fusami40.jpg" class="active" alt="FUSAMI40">
          <img src="../images/proyectos23/fusami/fusami41.jpg" class="active" alt="FUSAMI41">
          <img src="../images/proyectos23/fusami/fusami42.jpg" class="active" alt="FUSAMI42">
          <img src="../images/proyectos23/fusami/fusami43.jpg" class="active" alt="FUSAMI43">
          <img src="../images/proyectos23/fusami/fusami44.jpg" class="active" alt="FUSAMI44">
          <img src="../images/proyectos23/fusami/fusami45.jpg" class="active" alt="FUSAMI45">
          <img src="../images/proyectos23/fusami/fusami46.jpg" class="active" alt="FUSAMI46">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>FUSAMI</strong></h3>
      </div>


      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos24/subestacion/estacion1.jpeg" class="active" alt="ESTACION1">
          <img src="/images/proyectos24/subestacion/estacion2.jpeg" class="active" alt="ESTACION2">
          <img src="/images/proyectos24/subestacion/estacion3.jpeg" class="active" alt="ESTACION3">
          <img src="/images/proyectos24/subestacion/estacion4.jpeg" class="active" alt="ESTACION4">
          <img src="/images/proyectos24/subestacion/estacion5.jpeg" class="active" alt="ESTACION5">
          <img src="/images/proyectos24/subestacion/estacion6.jpeg" class="active" alt="ESTACION6">
          <img src="/images/proyectos24/subestacion/estacion7.jpeg" class="active" alt="ESTACION7">
          <img src="/images/proyectos24/subestacion/estacion8.jpeg" class="active" alt="ESTACION8">
          <img src="/images/proyectos24/subestacion/estacion9.jpeg" class="active" alt="ESTACION9">
          <img src="/images/proyectos24/subestacion/estacion10.jpeg" class="active" alt="ESTACION10">
          <img src="/images/proyectos24/subestacion/estacion11.jpeg" class="active" alt="ESTACION11">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Sub Estación Eléctrica Santa Marta</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos24/negritoyoro/agua1.jpeg" class="active" alt="SistemaAgua1">
          <img src="/images/proyectos24/negritoyoro/agua2.jpeg" class="active" alt="SistemaAgua2">
          <img src="/images/proyectos24/negritoyoro/agua3.jpeg" class="active" alt="SistemaAgua3">
          <img src="/images/proyectos24/negritoyoro/agua4.jpeg" class="active" alt="SistemaAgua4">
          <img src="/images/proyectos24/negritoyoro/agua5.jpeg" class="active" alt="SistemaAgua5">
          <img src="/images/proyectos24/negritoyoro/agua6.jpeg" class="active" alt="SistemaAgua6">
          <img src="/images/proyectos24/negritoyoro/agua7.jpeg" class="active" alt="SistemaAgua7">
          <img src="/images/proyectos24/negritoyoro/agua8.jpeg" class="active" alt="SistemaAgua8">
          <img src="/images/proyectos24/negritoyoro/agua9.jpeg" class="active" alt="SistemaAgua9">
          <img src="/images/proyectos24/negritoyoro/agua10.jpeg" class="active" alt="SistemaAgua10">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Reposición del Sistema de Agua Potable</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos24/hondumex/hondumex1.jpeg" class="active" alt="HONDUMEX1">
          <img src="/images/proyectos24/hondumex/hondumex2.jpeg" class="active" alt="HONDUMEX2">
          <img src="/images/proyectos24/hondumex/hondumex3.jpeg" class="active" alt="HONDUMEX3">
          <img src="/images/proyectos24/hondumex/hondumex4.jpeg" class="active" alt="HONDUMEX4">
          <img src="/images/proyectos24/hondumex/hondumex5.jpeg" class="active" alt="HONDUMEX5">
          <img src="/images/proyectos24/hondumex/hondumex6.jpeg" class="active" alt="HONDUMEX6">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>HONDUMEX</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/pavimento-danli/pavdanli1.jpeg" class="active" alt="PAVDANLI1">
          <img src="/images/proyectos25/pavimento-danli/pavdanli2.jpeg" class="active" alt="PAVDANLI2">
          <img src="/images/proyectos25/pavimento-danli/pavdanli3.jpeg" class="active" alt="PAVDANLI3">
          <img src="/images/proyectos25/pavimento-danli/pavdanli4.jpeg" class="active" alt="PAVDANLI4">
          <img src="/images/proyectos25/pavimento-danli/pavdanli5.jpeg" class="active" alt="PAVDANLI5">
          <img src="/images/proyectos25/pavimento-danli/pavdanli6.jpeg" class="active" alt="PAVDANLI6">
          <img src="/images/proyectos25/pavimento-danli/pavdanli7.jpeg" class="active" alt="PAVDANLI7">
          <img src="/images/proyectos25/pavimento-danli/pavdanli8.jpeg" class="active" alt="PAVDANLI8">
          <img src="/images/proyectos25/pavimento-danli/pavdanli9.jpeg" class="active" alt="PAVDANLI9">
          <img src="/images/proyectos25/pavimento-danli/pavdanli10.jpeg" class="active" alt="PAVDANLI10">
          <img src="/images/proyectos25/pavimento-danli/pavdanli11.jpeg" class="active" alt="PAVDANLI11">
          <img src="/images/proyectos25/pavimento-danli/pavdanli12.jpeg" class="active" alt="PAVDANLI12">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Pavimento Danlí</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/bomberos/bomberos1.jpeg" class="active" alt="BOMBEROS1">
          <img src="/images/proyectos25/bomberos/bomberos2.jpeg" class="active" alt="BOMBEROS2">
          <img src="/images/proyectos25/bomberos/bomberos3.jpeg" class="active" alt="BOMBEROS3">
          <img src="/images/proyectos25/bomberos/bomberos4.jpeg" class="active" alt="BOMBEROS4">
          <img src="/images/proyectos25/bomberos/bomberos5.jpeg" class="active" alt="BOMBEROS5">
          <img src="/images/proyectos25/bomberos/bomberos6.jpeg" class="active" alt="BOMBEROS6">
          <img src="/images/proyectos25/bomberos/bomberos7.jpeg" class="active" alt="BOMBEROS7">
          <img src="/images/proyectos25/bomberos/bomberos8.jpeg" class="active" alt="BOMBEROS8">
          <img src="/images/proyectos25/bomberos/bomberos9.jpeg" class="active" alt="BOMBEROS9">
          <img src="/images/proyectos25/bomberos/bomberos10.jpeg" class="active" alt="BOMBEROS10">
          <img src="/images/proyectos25/bomberos/bomberos11.jpeg" class="active" alt="BOMBEROS11">
          <img src="/images/proyectos25/bomberos/bomberos12.jpeg" class="active" alt="BOMBEROS12">
          <img src="/images/proyectos25/bomberos/bomberos13.jpeg" class="active" alt="BOMBEROS13">
          <img src="/images/proyectos25/bomberos/bomberos14.jpeg" class="active" alt="BOMBEROS14">
          <img src="/images/proyectos25/bomberos/bomberos15.jpeg" class="active" alt="BOMBEROS15">
          <img src="/images/proyectos25/bomberos/bomberos16.jpeg" class="active" alt="BOMBEROS16">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Subestación de Bomberos N.8</strong></h3>
      </div>


      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/las-palmas/policlinico1.jpeg" class="active" alt="POLOCLINICO1">
          <img src="/images/proyectos25/las-palmas/policlinico2.jpeg" class="active" alt="POLOCLINICO2">
          <img src="/images/proyectos25/las-palmas/policlinico3.jpeg" class="active" alt="POLOCLINICO3">
          <img src="/images/proyectos25/las-palmas/policlinico4.jpeg" class="active" alt="POLOCLINICO4">
          <img src="/images/proyectos25/las-palmas/policlinico5.jpeg" class="active" alt="POLOCLINICO5">
          <img src="/images/proyectos25/las-palmas/policlinico6.jpeg" class="active" alt="POLOCLINICO6">
          <img src="/images/proyectos25/las-palmas/policlinico7.jpeg" class="active" alt="POLOCLINICO7">
          <img src="/images/proyectos25/las-palmas/policlinico8.jpeg" class="active" alt="POLOCLINICO8">
          <img src="/images/proyectos25/las-palmas/policlinico9.jpeg" class="active" alt="POLOCLINICO9">
          <img src="/images/proyectos25/las-palmas/policlinico10.jpeg" class="active" alt="POLOCLINICO10">
          <img src="/images/proyectos25/las-palmas/policlinico11.jpeg" class="active" alt="POLOCLINICO11">
          <img src="/images/proyectos25/las-palmas/policlinico12.jpeg" class="active" alt="POLOCLINICO12">
          <img src="/images/proyectos25/las-palmas/policlinico13.jpeg" class="active" alt="POLOCLINICO13">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Policlínico Las Palmas</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/tramo-el-papalon/papalon1.jpeg" class="active" alt="PAPALON1">
          <img src="/images/proyectos25/tramo-el-papalon/papalon2.jpeg" class="active" alt="PAPALON2">
          <img src="/images/proyectos25/tramo-el-papalon/papalon3.jpeg" class="active" alt="PAPALON3">
          <img src="/images/proyectos25/tramo-el-papalon/papalon4.jpeg" class="active" alt="PAPALON4">
          <img src="/images/proyectos25/tramo-el-papalon/papalon5.jpeg" class="active" alt="PAPALON5">
          <img src="/images/proyectos25/tramo-el-papalon/papalon6.jpeg" class="active" alt="PAPALON6">
          <img src="/images/proyectos25/tramo-el-papalon/papalon7.jpeg" class="active" alt="PAPALON7">
          <img src="/images/proyectos25/tramo-el-papalon/papalon8.jpeg" class="active" alt="PAPALON8">
          <img src="/images/proyectos25/tramo-el-papalon/papalon9.jpeg" class="active" alt="PAPALON9">
          <img src="/images/proyectos25/tramo-el-papalon/papalon10.jpeg" class="active" alt="PAPALON10">
          <img src="/images/proyectos25/tramo-el-papalon/papalon11.jpeg" class="active" alt="PAPALON11">
          <img src="/images/proyectos25/tramo-el-papalon/papalon12.jpeg" class="active" alt="PAPALON12">
          <img src="/images/proyectos25/tramo-el-papalon/papalon13.jpeg" class="active" alt="PAPALON13">
          <img src="/images/proyectos25/tramo-el-papalon/papalon14.jpeg" class="active" alt="PAPALON14">
          <img src="/images/proyectos25/tramo-el-papalon/papalon15.jpeg" class="active" alt="PAPALON15">
          <img src="/images/proyectos25/tramo-el-papalon/papalon16.jpeg" class="active" alt="PAPALON16">
          <img src="/images/proyectos25/tramo-el-papalon/papalon17.jpeg" class="active" alt="PAPALON17">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Mantenimiento de La Red Vial No Pavimentada, Tramo El Papalón</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani1.jpeg" class="active" alt="ERAMANI1">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani2.jpeg" class="active" alt="ERAMANI2">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani3.jpeg" class="active" alt="ERAMANI3">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani4.jpeg" class="active" alt="ERAMANI4">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani5.jpeg" class="active" alt="ERAMANI5">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani6.jpeg" class="active" alt="ERAMANI6">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani7.jpeg" class="active" alt="ERAMANI7">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani8.jpeg" class="active" alt="ERAMANI8">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani9.jpeg" class="active" alt="ERAMANI9">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani10.jpeg" class="active" alt="ERAMANI10">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani11.jpeg" class="active" alt="ERAMANI11">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani12.jpeg" class="active" alt="ERAMANI12">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani13.jpeg" class="active" alt="ERAMANI13">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani14.jpeg" class="active" alt="ERAMANI14">
          <img src="/images/proyectos25/mantenimiento-eramani/eramani15.jpeg" class="active" alt="ERAMANI15">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Mantenimiento ERAMANI</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/vivero-municipal/vivero1.jpeg" class="active" alt="VIVERO1">
          <img src="/images/proyectos25/vivero-municipal/vivero2.jpeg" class="active" alt="VIVERO2">
          <img src="/images/proyectos25/vivero-municipal/vivero3.jpeg" class="active" alt="VIVERO3">
          <img src="/images/proyectos25/vivero-municipal/vivero4.jpeg" class="active" alt="VIVERO4">
          <img src="/images/proyectos25/vivero-municipal/vivero5.jpeg" class="active" alt="VIVERO5">
          <img src="/images/proyectos25/vivero-municipal/vivero6.jpeg" class="active" alt="VIVERO6">
          <img src="/images/proyectos25/vivero-municipal/vivero7.jpeg" class="active" alt="VIVERO7">
          <img src="/images/proyectos25/vivero-municipal/vivero8.jpeg" class="active" alt="VIVERO8">
          <img src="/images/proyectos25/vivero-municipal/vivero9.jpeg" class="active" alt="VIVERO9">
          <img src="/images/proyectos25/vivero-municipal/vivero10.jpeg" class="active" alt="VIVERO10">
          <img src="/images/proyectos25/vivero-municipal/vivero11.jpeg" class="active" alt="VIVERO11">
          <img src="/images/proyectos25/vivero-municipal/vivero12.jpeg" class="active" alt="VIVERO12">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Vivero Municipal</strong></h3>
      </div>


      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable1.jpeg" class="active"
            alt="REPOSICION1">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable2.jpeg" class="active"
            alt="REPOSICION2">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable3.jpeg" class="active"
            alt="REPOSICION3">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable4.jpeg" class="active"
            alt="REPOSICION4">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable5.jpeg" class="active"
            alt="REPOSICION5">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable6.jpeg" class="active"
            alt="REPOSICION6">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable7.jpeg" class="active"
            alt="REPOSICION7">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable8.jpeg" class="active"
            alt="REPOSICION8">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable9.jpeg" class="active"
            alt="REPOSICION9">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable10.jpeg" class="active"
            alt="REPOSICION10">
          <img src="/images/proyectos25/reposicion_agua_potable/reposicion_agua_potable11.jpeg" class="active"
            alt="REPOSICION11">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Proyecto Reposición Sistema de Agua Potable Ciudad Guaymas y Centro Poblado El Negrito Yoro</strong>
        </h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua1.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA1">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua2.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA2">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua3.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA3">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua4.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA4">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua5.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA5">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua6.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA6">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua7.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA7">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua8.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA8">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua9.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA9">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua10.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA10">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua11.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA11">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua12.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA12">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua13.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA13">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua14.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA14">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua15.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA15">
          <img src="/images/proyectos25/puente_ojosdeagua/puente_ojosdeagua16.jpeg" class="active"
            alt="PUENTEOJOSDEAGUA16">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Puente Ojos de Agua</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion1.jpeg" class="active" alt="RESIDENCIA1">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion2.jpeg" class="active" alt="RESIDENCIA2">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion3.jpeg" class="active" alt="RESIDENCIA3">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion4.jpeg" class="active" alt="RESIDENCIA4">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion5.jpeg" class="active" alt="RESIDENCIA5">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion6.jpeg" class="active" alt="RESIDENCIA6">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion7.jpeg" class="active" alt="RESIDENCIA7">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion8.jpeg" class="active" alt="RESIDENCIA8">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion9.jpeg" class="active" alt="RESIDENCIA9">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion10.jpeg" class="active" alt="RESIDENCIA10">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion11.jpeg" class="active" alt="RESIDENCIA11">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion12.jpeg" class="active" alt="RESIDENCIA12">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion13.jpeg" class="active" alt="RESIDENCIA13">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion14.jpeg" class="active" alt="RESIDENCIA14">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion15.jpeg" class="active" alt="RESIDENCIA15">
          <img src="/images/proyectos25/remodelacion_residencia/remodelacion16.jpeg" class="active" alt="RESIDENCIA16">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Remodelación De Residencia</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion1.jpeg" class="active"
            alt="REPOSICIONGUAIMACA1">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion2.jpeg" class="active"
            alt="REPOSICIONGUAIMACA2">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion3.jpeg" class="active"
            alt="REPOSICIONGUAIMACA3">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion4.jpeg" class="active"
            alt="REPOSICIONGUAIMACA4">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion5.jpeg" class="active"
            alt="REPOSICIONGUAIMACA5">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion6.jpeg" class="active"
            alt="REPOSICIONGUAIMACA6">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion7.jpeg" class="active"
            alt="REPOSICIONGUAIMACA7">
          <img src="/images/proyectos25/reposicion_agua_guaimaca/reposicion8.jpeg" class="active"
            alt="REPOSICIONGUAIMACA8">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Reposición Sistema Agua Potable en Varias Aldeas del Municipio de Guaimaca</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir1.jpeg" class="active" alt="PAVELPORVENIR1">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir2.jpeg" class="active" alt="PAVELPORVENIR2">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir3.jpeg" class="active" alt="PAVELPORVENIR3">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir4.jpeg" class="active" alt="PAVELPORVENIR4">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir5.jpeg" class="active" alt="PAVELPORVENIR5">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir6.jpeg" class="active" alt="PAVELPORVENIR6">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir7.jpeg" class="active" alt="PAVELPORVENIR7">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir8.jpeg" class="active" alt="PAVELPORVENIR8">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir9.jpeg" class="active" alt="PAVELPORVENIR9">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir10.jpeg" class="active" alt="PAVELPORVENIR10">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir11.jpeg" class="active" alt="PAVELPORVENIR11">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir12.jpeg" class="active" alt="PAVELPORVENIR12">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir13.jpeg" class="active" alt="PAVELPORVENIR13">
          <img src="/images/proyectos25/pavimento_elporvenir/pavelporvenir14.jpeg" class="active" alt="PAVELPORVENIR14">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Pavimento El Porvenir</strong></h3>
      </div>

      <div class="portfolio-card">
        <div class="card-images">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca1.jpeg" class="active" alt="PAVGUAIMACA1">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca2.jpeg" class="active" alt="PAVGUAIMACA2">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca3.jpeg" class="active" alt="PAVGUAIMACA3">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca4.jpeg" class="active" alt="PAVGUAIMACA4">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca5.jpeg" class="active" alt="PAVGUAIMACA5">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca6.jpeg" class="active" alt="PAVGUAIMACA6">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca7.jpeg" class="active" alt="PAVGUAIMACA7">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca8.jpeg" class="active" alt="PAVGUAIMACA8">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca9.jpeg" class="active" alt="PAVGUAIMACA9">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca10.jpeg" class="active" alt="PAVGUAIMACA10">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca11.jpeg" class="active" alt="PAVGUAIMACA11">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca12.jpeg" class="active" alt="PAVGUAIMACA12">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca13.jpeg" class="active" alt="PAVGUAIMACA13">
          <img src="/images/proyectos25/pavimentacion_guaimaca/pavguaimaca14.jpeg" class="active" alt="PAVGUAIMACA14">
          <div class="card-buttons">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
          </div>
        </div>
        <h3><strong>Pavimento Guaimaca</strong></h3>
      </div>
    </div>
  </div>
</section>

<!-- MODAL -->
<div id="imgModal" class="img-modal">
  <button class="close-modal">&times;</button>
  <button id="prevModal" class="modal-btn prev">&#10094;</button>
  <img src="" alt="">
  <button id="nextModal" class="modal-btn next">&#10095;</button>
</div>`,P=`<footer id="contact">
  <div class="container footer-container">
    <div class="footer-logo"><img src="../images/enocsa4.jpeg" alt="Equipo ENOCSA"></div>
    <p><strong>ENOCSA: Empresa en Obras de Construcción S.A.</strong></p>
    <ul class="footer-links">
      <li><a href="#about"><strong>Nosotros</strong></a></li>
      <li><a href="#services"><strong>Servicios</strong></a></li>
      <li><a href="#portfolio"><strong>Portafolio</strong></a></li>
    </ul>
    <p><strong>Contacto:</strong> enocsateg@gmail.com | Tel: +504 2213-4481</br>+504 9998-8909</p></br>
    <p><strong>Dirección:</strong> Res. Las Hadas, Villa San Rafael, Bloque “B”, Casa#6, Comayagüela, M.D.C., Honduras C.A.</p>
  </div></br>
    <p><strong>&copy; ENOCSA | Todos los derechos reservados.</strong></p>
</footer>
`,C=document.querySelector("#app");C.innerHTML=`
  ${E}
  ${O}
  ${f}
  ${S}
  ${N}
  ${P}
`;const v=document.querySelector(".hamburger"),u=document.querySelector(".nav-links");v.addEventListener("click",()=>{u.classList.toggle("active"),v.classList.toggle("active")});document.querySelectorAll(".nav-links a, .footer-links a").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const n=document.querySelector(a.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth"}),u.classList.contains("active")&&(u.classList.remove("active"),v.classList.remove("active"))})});const t=document.getElementById("imgModal"),r=t.querySelector("img"),M=t.querySelector(".close-modal"),_=t.querySelector("#prevModal"),h=t.querySelector("#nextModal");let g=[],l=0;function A(a,s){g=Array.from(s).map(n=>n.src),l=a,r.src=g[l],t.style.display="flex",document.body.style.overflow="hidden"}function j(){t.style.display="none",document.body.style.overflow=""}function b(a){l=(a+g.length)%g.length,r.src=g[l]}M.addEventListener("click",j);t.addEventListener("click",a=>{a.target===t&&j()});_.addEventListener("click",a=>{a.stopPropagation(),b(l-1)});h.addEventListener("click",a=>{a.stopPropagation(),b(l+1)});document.querySelectorAll(".portfolio-card").forEach(a=>{const s=a.querySelectorAll(".card-images img"),n=a.querySelector(".prev"),m=a.querySelector(".next");let e=0;function i(o){s.forEach((p,d)=>p.classList.toggle("active",d===o))}n.addEventListener("click",o=>{o.stopPropagation(),e=(e-1+s.length)%s.length,i(e)}),m.addEventListener("click",o=>{o.stopPropagation(),e=(e+1)%s.length,i(e)}),s.forEach((o,p)=>{o.addEventListener("click",d=>{d.stopPropagation(),A(p,s)})}),i(e)});let c=1,y=0;function R(){c=1,r.style.transform="scale(1)"}const U=A;A=function(a,s){U(a,s),R()};r.addEventListener("wheel",a=>{a.preventDefault(),c+=a.deltaY*-.001,c=Math.min(Math.max(1,c),3),r.style.transform=`scale(${c})`},{passive:!1});r.addEventListener("touchstart",a=>{a.touches.length===2&&(y=I(a.touches[0],a.touches[1]))});r.addEventListener("touchmove",a=>{if(a.touches.length===2){a.preventDefault();const s=I(a.touches[0],a.touches[1]);c*=s/y,c=Math.min(Math.max(1,c),3),r.style.transform=`scale(${c})`,y=s}},{passive:!1});function I(a,s){return Math.hypot(s.clientX-a.clientX,s.clientY-a.clientY)}
