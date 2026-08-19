import "./App.css";

function App() {
  return (
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">

            <a href="#" className="brand">
              <div className="brand-icon">🌿</div>

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
                    <div className="mini-logo">🌿</div>

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


        {/* PRODUCTO */}
        <section id="producto" className="product-section section">

          <div className="section-container product-layout">

            <div className="product-showcase">

              <div className="product-circle"></div>

              <div className="bombilla large">

                <div className="bombilla-head">

                  <div className="mini-logo">🌿</div>

                  <div className="mini-screen">
                    <strong>74°</strong>
                    <small>C</small>
                    <span></span>
                  </div>

                </div>

                <div className="bombilla-body"></div>

              </div>


              <div className="floating-card card-temp">
                <small>TEMPERATURA</small>
                <strong>74°C</strong>
                <span>Óptima</span>
              </div>


              <div className="floating-card card-infusion">
                <small>INFUSIÓN</small>
                <strong>78%</strong>

                <div className="progress">
                  <span></span>
                </div>
              </div>

            </div>


            <div className="product-copy">

            <span className="section-tag">
              MATE INTELIGENTE
            </span>

              <h2>
                Una bombilla.
                <span> Mucha más información.</span>
              </h2>

              <p>
                Integramos sensores, electrónica y una pequeña pantalla
                directamente en la bombilla para obtener información útil
                sin cambiar la forma tradicional de tomar mate.
              </p>


              <div className="product-features">

                <MiniFeature
                    icon="🌡"
                    title="Sensor térmico"
                    text="Control de temperatura en tiempo real."
                />

                <MiniFeature
                    icon="◉"
                    title="Pantalla integrada"
                    text="Información visible sin utilizar el celular."
                />

                <MiniFeature
                    icon="▥"
                    title="Análisis de infusión"
                    text="Estimación del estado actual de la yerba."
                />

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
              🌿
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


function MiniFeature({ icon, title, text }: CardProps) {
  return (
      <div className="mini-feature">

        <div>{icon}</div>

        <span>
        <strong>{title}</strong>
        <p>{text}</p>
      </span>

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
