import { useState } from "react";
import favicon from "./assets/MateIntNeg.svg";
import logoVerde from "./assets/MateInt.svg"
import "./App.css";

type ProductPartKey =
    | "display"
    | "thermal"
    | "infusion"
    | "filter";

type ScreenMode =
    | "temperature"
    | "infusion"
    | "cebadas";

const productParts = {
  display: {
    number: "01",
    tag: "INTERFAZ",
    title: "Pantalla inteligente",
    text: "Una pequeña pantalla integrada permite consultar la información principal sin necesidad de utilizar el celular.",
    value: "74°C",
    status: "Temperatura ideal",
  },

  thermal: {
    number: "02",
    tag: "SENSOR",
    title: "Sensor térmico",
    text: "Mide continuamente la temperatura del agua y permite identificar cuándo el mate está demasiado caliente, frío o en su punto ideal.",
    value: "74°C",
    status: "Lectura en tiempo real",
  },

  infusion: {
    number: "03",
    tag: "ANÁLISIS",
    title: "Sensor de infusión",
    text: "Analiza diferentes parámetros del líquido para estimar el rendimiento restante de la yerba y detectar cuándo el mate comienza a lavarse.",
    value: "78%",
    status: "Infusión óptima",
  },

  filter: {
    number: "04",
    tag: "DISEÑO",
    title: "Filtro inteligente",
    text: "Mantiene el funcionamiento tradicional de una bombilla mientras integra los sensores necesarios para obtener información del mate.",
    value: "ACTIVO",
    status: "Monitoreo constante",
  },
};

const productPartKeys = Object.keys(productParts) as ProductPartKey[];

function App() {

  const [activePart, setActivePart] = useState<ProductPartKey>("display");

  const [screenMode, setScreenMode] = useState<ScreenMode>("temperature");

  const activeProduct = productParts[activePart];

  const screenData = {
    temperature: {
      label: "TEMP",
      value: "74",
      unit: "°C"
    },

    infusion: {
      label: "INFUSIÓN",
      value: "78",
      unit: "%"
    },

    cebadas: {
      label: "CEBADAS",
      value: "12",
      unit: ""
    }
  };

  const activeScreen = screenData[screenMode];

  return (
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">

            <a href="#" className="brand">
              <div className="brand-icon">
                <img className="logo" src={favicon} alt="brand" />
              </div>

              <div className="brand-name">
                <strong>MATE</strong>
                <span></span>
                <p>INTELIGENTE</p>
              </div>
            </a>

            <div className="nav-links">
              <a href="#producto">Producto</a>
              <a href="#funciones">Funciones</a>
              <a href="#tecnologia">Tecnología</a>
              <a href="#beneficios">Beneficios</a>
            </div>

            <a href="#contacto" className="nav-button">
              Conocer más
            </a>

          </div>
        </nav>


        {/* HERO */}
        <header className="hero">

          <div className="hero-decoration decoration-1"></div>
          <div className="hero-decoration decoration-2"></div>

          <div className="hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                <span></span>
                Tecnología para una tradición de siempre
              </div>

              <h1>
                El mate de siempre.
                <span> Ahora más inteligente.</span>
              </h1>

              <p className="hero-description">
                Una bombilla inteligente capaz de medir la temperatura,
                analizar el estado de la infusión y ayudarte a disfrutar
                cada mate en su punto ideal.
              </p>

              <div className="hero-actions">

                <a href="#producto" className="button-primary">
                  Descubrir producto
                  <span>→</span>
                </a>

                <a href="#funciones" className="button-secondary">
                  Ver funciones
                </a>

              </div>


              <div className="hero-stats">

                <div>
                  <strong>74°C</strong>
                  <span>Temperatura ideal</span>
                </div>

                <div className="stat-divider"></div>

                <div>
                  <strong>Tiempo real</strong>
                  <span>Monitoreo constante</span>
                </div>

                <div className="stat-divider"></div>

                <div>
                  <strong>Smart</strong>
                  <span>Análisis de infusión</span>
                </div>

              </div>

            </div>


            <div className="hero-product">

              <div className="product-glow"></div>

              <div className="product-card">

                <div className="temperature">
                <span className="temperature-label">
                  TEMPERATURA
                </span>

                  <strong>
                    74<span>°C</span>
                  </strong>

                  <div className="temperature-status">
                    <span></span>
                    Temperatura ideal
                  </div>
                </div>


                <div className="bombilla">

                  <div className="bombilla-head">
                    <div className="mini-logo">
                      <img className="logo-bombilla" src={logoVerde}/>
                    </div>

                    <div className="mini-screen">
                      <strong>74°</strong>
                      <small>C</small>
                      <span></span>
                    </div>
                  </div>

                  <div className="bombilla-body"></div>

                  <div className="bombilla-filter">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </header>


        {/* PROBLEMA */}
        <section className="problem section">

          <div className="section-container">

            <div className="section-heading centered">

            <span className="section-tag">
              EL PROBLEMA
            </span>

              <h2>
                Tomar mate sigue dependiendo
                <span> demasiado de la intuición.</span>
              </h2>

              <p>
                Todos sabemos cuándo un mate está bueno.
                El problema es saber exactamente por qué.
              </p>

            </div>


            <div className="problem-grid">

              <ProblemCard
                  number="01"
                  icon="🌡"
                  title="Temperatura incierta"
                  text="El agua demasiado caliente puede arruinar la yerba, mientras que una temperatura baja afecta la experiencia."
              />

              <ProblemCard
                  number="02"
                  icon="▥"
                  title="¿Cuándo se lavó?"
                  text="No existe una referencia objetiva que indique cuánto rendimiento todavía puede ofrecer la yerba."
              />

              <ProblemCard
                  number="03"
                  icon="?"
                  title="Todo depende del usuario"
                  text="Temperatura, duración y estado de la infusión se determinan principalmente por experiencia."
              />

            </div>

          </div>

        </section>


        {/* PRODUCTO INTERACTIVO */}

        <section
            id="producto"
            className="interactive-product section"
        >

          <div className="section-container">

            <div className="interactive-header">

              <div>

                <span className="section-tag">
                    EXPLORÁ EL PRODUCTO
                </span>

                <h2>
                  Tecnología integrada.
                  <span> Tocá para descubrirla.</span>
                </h2>

              </div>

              <p>
                Seleccioná los distintos componentes de
                la bombilla para conocer cómo funciona
                cada parte del sistema.
              </p>

            </div>


            <div className="product-explorer">

              {/* VISUALIZACIÓN */}

              <div className="product-stage">

                <div className="stage-grid"></div>

                <div className="stage-glow"></div>


                {/* HUD */}

                <div className="hud-top">

                    <span>
                        SMART MATE SYSTEM
                    </span>

                  <span className="live-status">
                        <i></i>
                        SISTEMA ACTIVO
                    </span>

                </div>


                {/* BOMBILLA */}

                <div className="smart-bombilla">


                  {/* CABEZA */}

                  <div className="smart-head">

                    <div className="smart-logo">
                      <img src={logoVerde} className="logo-bombilla" />
                    </div>


                    {/* PANTALLA */}

                    <div className="smart-display">

                      <small>
                        {activeScreen.label}
                      </small>

                      <strong>
                        {activeScreen.value}

                        <em>
                          {activeScreen.unit}
                        </em>
                      </strong>


                      <div className="display-progress">
                        <span></span>
                      </div>

                    </div>

                  </div>


                  {/* CUERPO */}

                  <div className="smart-body">

                    <div className="sensor-ring"></div>

                    <div className="infusion-ring"></div>

                  </div>


                  {/* FILTRO */}

                  <div className="smart-filter">

                    {Array.from({ length: 15 }).map(
                        (_, index) => (
                            <span key={index}></span>
                        )
                    )}

                  </div>

                </div>


                {/* HOTSPOTS */}

                <button
                    className={
                      activePart === "display"
                          ? "hotspot hotspot-display active"
                          : "hotspot hotspot-display"
                    }
                    onClick={() =>
                        setActivePart("display")
                    }
                >
                  <span>01</span>
                </button>


                <button
                    className={
                      activePart === "thermal"
                          ? "hotspot hotspot-thermal active"
                          : "hotspot hotspot-thermal"
                    }
                    onClick={() =>
                        setActivePart("thermal")
                    }
                >
                  <span>02</span>
                </button>


                <button
                    className={
                      activePart === "infusion"
                          ? "hotspot hotspot-infusion active"
                          : "hotspot hotspot-infusion"
                    }
                    onClick={() =>
                        setActivePart("infusion")
                    }
                >
                  <span>03</span>
                </button>


                <button
                    className={
                      activePart === "filter"
                          ? "hotspot hotspot-filter active"
                          : "hotspot hotspot-filter"
                    }
                    onClick={() =>
                        setActivePart("filter")
                    }
                >
                  <span>04</span>
                </button>


                {/* INDICADORES */}

                <div className="sensor-data data-temperature">

                  <small>TEMPERATURA</small>

                  <strong>74.2°C</strong>

                  <span>
                        +0.2°C
                    </span>

                </div>


                <div className="sensor-data data-infusion">

                  <small>INFUSIÓN</small>

                  <strong>78%</strong>

                  <div className="mini-progress">
                    <span></span>
                  </div>

                </div>


                <div className="sensor-data data-bluetooth">

                    <span className="bluetooth-icon">
                        ᛒ
                    </span>

                  <div>
                    <small>
                      BLUETOOTH
                    </small>

                    <strong>
                      CONECTADO
                    </strong>
                  </div>

                </div>

              </div>


              {/* PANEL DERECHO */}

              <div className="interactive-panel">

                <div className="panel-number">
                  {activeProduct.number}
                </div>


                <span className="panel-tag">
                    {activeProduct.tag}
                </span>


                <h3>
                  {activeProduct.title}
                </h3>


                <p>
                  {activeProduct.text}
                </p>


                <div className="panel-reading">

                  <div>

                    <small>
                      LECTURA ACTUAL
                    </small>

                    <strong>
                      {activeProduct.value}
                    </strong>

                  </div>

                  <span>
                        <i></i>
                    {activeProduct.status}
                    </span>

                </div>


                {/* MODO DE PANTALLA */}

                <div className="screen-controller">

                  <small>
                    SIMULAR PANTALLA
                  </small>


                  <div className="screen-buttons">

                    <button
                        className={
                          screenMode === "temperature"
                              ? "active"
                              : ""
                        }
                        onClick={() =>
                            setScreenMode(
                                "temperature"
                            )
                        }
                    >
                      Temperatura
                    </button>


                    <button
                        className={
                          screenMode === "infusion"
                              ? "active"
                              : ""
                        }
                        onClick={() =>
                            setScreenMode(
                                "infusion"
                            )
                        }
                    >
                      Infusión
                    </button>


                    <button
                        className={
                          screenMode === "cebadas"
                              ? "active"
                              : ""
                        }
                        onClick={() =>
                            setScreenMode(
                                "cebadas"
                            )
                        }
                    >
                      Cebadas
                    </button>

                  </div>

                </div>


                {/* LISTA DE COMPONENTES */}

                <div className="component-selector">

                  {productPartKeys.map((key) => {
                    const part = productParts[key];

                    return (
                        <button
                            key={key}
                            className={
                              activePart === key
                                  ? "active"
                                  : ""
                            }
                            onClick={() =>
                                setActivePart(key)
                            }
                        >
                          <span>
                            {part.number}
                          </span>

                          {part.title}

                          <strong>
                            →
                          </strong>
                        </button>
                    );
                  })}

              </div>

            </div>

          </div>

      </div>

</section>


        {/* FUNCIONES */}
        <section id="funciones" className="features section">

          <div className="section-container">

            <div className="section-heading">

            <span className="section-tag">
              FUNCIONES
            </span>

              <h2>
                Tecnología pensada para
                <span> mejorar cada cebada.</span>
              </h2>

            </div>


            <div className="features-grid">

              <FeatureCard
                  icon="🌡"
                  title="Temperatura"
                  text="Consulta instantáneamente la temperatura del mate desde la propia bombilla."
                  value="74°C"
              />

              <FeatureCard
                  icon="◔"
                  title="Estado de infusión"
                  text="Analiza parámetros de la infusión para estimar el rendimiento restante de la yerba."
                  value="78%"
              />

              <FeatureCard
                  icon="◎"
                  title="Alertas visuales"
                  text="Indicadores rápidos permiten saber si el mate está frío, ideal o demasiado caliente."
                  value="IDEAL"
              />

              <FeatureCard
                  icon="↻"
                  title="Cebadas"
                  text="El sistema puede registrar diferentes ciclos y construir estadísticas de consumo."
                  value="12"
              />

            </div>

          </div>

        </section>


        {/* TECNOLOGIA */}
        <section id="tecnologia" className="technology section">

          <div className="section-container">

            <div className="technology-content">

            <span className="section-tag">
              TECNOLOGÍA
            </span>

              <h2>
                Pequeña por fuera.
                <span> Inteligente por dentro.</span>
              </h2>

              <p>
                El prototipo utiliza un microcontrolador de bajo consumo
                junto con distintos sensores integrados dentro del módulo
                superior de la bombilla.
              </p>


              <div className="tech-list">

                <TechItem
                    number="01"
                    title="ESP32"
                    text="Procesamiento y conectividad Bluetooth."
                />

                <TechItem
                    number="02"
                    title="Sensor térmico"
                    text="Medición de temperatura del agua."
                />

                <TechItem
                    number="03"
                    title="Sensor de infusión"
                    text="Datos para estimar el estado de la yerba."
                />

                <TechItem
                    number="04"
                    title="Pantalla compacta"
                    text="Visualización inmediata de la información."
                />

              </div>

            </div>


            <div className="technology-visual">

              <div className="chip">
                <span>MI</span>
                <strong>ESP32</strong>
                <small>Smart Mate System</small>
              </div>

              <div className="tech-orbit orbit-1"></div>
              <div className="tech-orbit orbit-2"></div>

            </div>

          </div>

        </section>


        {/* BENEFICIOS */}
        <section id="beneficios" className="benefits section">

          <div className="section-container">

            <div className="section-heading centered">

            <span className="section-tag">
              ¿POR QUÉ?
            </span>

              <h2>
                La tradición no cambia.
                <span> La experiencia sí.</span>
              </h2>

            </div>


            <div className="benefits-grid">

              <div>
                <strong>01</strong>
                <h3>Mayor control</h3>
                <p>
                  Sabé exactamente a qué temperatura estás tomando.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>Menos desperdicio</h3>
                <p>
                  Aprovechá mejor la yerba identificando su estado.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Más información</h3>
                <p>
                  Convertí hábitos cotidianos en datos útiles.
                </p>
              </div>

              <div>
                <strong>04</strong>
                <h3>Misma tradición</h3>
                <p>
                  Todo sin cambiar la forma en la que tomamos mate.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section id="contacto" className="cta">

          <div className="cta-content">

          <span className="section-tag">
            MATE INTELIGENTE
          </span>

            <h2>
              El futuro también
              <span> toma mate.</span>
            </h2>

            <p>
              Una idea que combina tecnología, diseño y una de nuestras
              tradiciones más importantes.
            </p>

            <a href="#producto" className="button-light">
              Conocer el proyecto →
            </a>

          </div>

        </section>


        {/* FOOTER */}
        <footer>

          <div className="footer-container">

            <div className="footer-brand">
              <img className="logo" src={favicon}/>
              <strong>MATE</strong>
              <span>INTELIGENTE</span>
            </div>

            <p>
              Concepto de producto · 2026
            </p>

          </div>

        </footer>

      </div>
  );
}


/* COMPONENTES */

type CardProps = {
  icon: string;
  title: string;
  text: string;
};

function ProblemCard({
                       number,
                       icon,
                       title,
                       text,
                     }: CardProps & { number: string }) {
  return (
      <div className="problem-card">

      <span className="problem-number">
        {number}
      </span>

        <div className="problem-icon">
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{text}</p>

      </div>
  );
}


function FeatureCard({
                       icon,
                       title,
                       text,
                       value,
                     }: CardProps & { value: string }) {
  return (
      <div className="feature-card">

        <div className="feature-top">

          <span>{icon}</span>

          <strong>{value}</strong>

        </div>

        <h3>{title}</h3>

        <p>{text}</p>

        <div className="feature-line"></div>

      </div>
  );
}


function TechItem({
                    number,
                    title,
                    text,
                  }: {
  number: string;
  title: string;
  text: string;
}) {
  return (
      <div className="tech-item">

        <span>{number}</span>

        <div>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>

      </div>
  );
}

export default App;
