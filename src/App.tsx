
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./styles/global.css";

type Language = "pt" | "en";

const content = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Contato"],
    availability: "DISPONÍVEL PARA OPORTUNIDADES",
    eyebrow: "DESENVOLVIMENTO DE SOFTWARE · PORTFÓLIO 2026",
    line1: "CÓDIGO COM",
    line2: "PROPÓSITO.",
    role: "Desenvolvedora de Software",
    specialties: "Frontend & Full Stack",
    description:
      "Transformo ideias em experiências digitais funcionais, interfaces intuitivas e soluções que conectam design e tecnologia.",
    projects: "Explorar projetos",
    contact: "Entre em contato",
    scroll: "ROLE PARA EXPLORAR",
    index: "ÍNDICE",
    aboutLabel: "01 / QUEM SOU",
    aboutTitle: "TECNOLOGIA COM INTENÇÃO.",
    aboutText:
      "Desenvolvedora com foco em interfaces bem construídas, experiências acessíveis e aplicações que resolvem problemas reais. Gosto de unir criatividade, lógica e atenção aos detalhes em cada projeto.",
    stackLabel: "02 / FERRAMENTAS",
    stackTitle: "TECNOLOGIAS QUE UTILIZO",
    stackDescription:
      "Ferramentas que utilizo para transformar ideias em aplicações.",
    projectsLabel: "03 / PORTFÓLIO",
    projectsTitle: "TRABALHOS EM DESTAQUE",
    projectsDescription:
      "Projetos pessoais, aplicações e experimentos em desenvolvimento.",
    projectEmpty: "NOVOS PROJETOS EM BREVE",
    projectEmptyText:
      "Estou organizando meus projetos para compartilhar aqui. Enquanto isso, você pode conhecer meu código no GitHub.",
    viewGithub: "Ver GitHub",
    contactLabel: "04 / VAMOS CONVERSAR",
    contactTitle: "TEM UMA IDEIA?",
    contactTitle2: "VAMOS CONSTRUIR.",
    contactText:
      "Estou aberta a oportunidades, colaborações e projetos que desafiem minha criatividade.",
    sendEmail: "Vamos conversar",
    footer: "DESENVOLVIDO COM INTENÇÃO",
    backTop: "VOLTAR AO TOPO",
  },
  en: {
    nav: ["Home", "About", "Projects", "Contact"],
    availability: "OPEN TO OPPORTUNITIES",
    eyebrow: "SOFTWARE DEVELOPMENT · PORTFOLIO 2026",
    line1: "CODE WITH",
    line2: "PURPOSE.",
    role: "Software Developer",
    specialties: "Frontend & Full Stack",
    description:
      "I turn ideas into functional digital experiences, intuitive interfaces, and solutions that connect design and technology.",
    projects: "Explore projects",
    contact: "Get in touch",
    scroll: "SCROLL TO EXPLORE",
    index: "INDEX",
    aboutLabel: "01 / ABOUT ME",
    aboutTitle: "TECHNOLOGY WITH INTENTION.",
    aboutText:
      "A developer focused on well-crafted interfaces, accessible experiences, and applications that solve real problems. I enjoy combining creativity, logic, and attention to detail in every project.",
    stackLabel: "02 / TOOLKIT",
    stackTitle: "TECHNOLOGIES I USE",
    stackDescription:
      "Tools I use to turn ideas into applications.",
    projectsLabel: "03 / PORTFOLIO",
    projectsTitle: "SELECTED WORK",
    projectsDescription:
      "Personal projects, applications, and experiments in progress.",
    projectEmpty: "NEW PROJECTS COMING SOON",
    projectEmptyText:
      "I'm organizing my projects to share here. In the meantime, explore my code on GitHub.",
    viewGithub: "View GitHub",
    contactLabel: "04 / LET'S TALK",
    contactTitle: "HAVE AN IDEA?",
    contactTitle2: "LET'S BUILD IT.",
    contactText:
      "I'm open to opportunities, collaborations, and projects that challenge my creativity.",
    sendEmail: "Let's talk",
    footer: "BUILT WITH INTENTION",
    backTop: "BACK TO TOP",
  },
};

const technologies = [
  { name: "React", category: "FRONTEND" },
  { name: "TypeScript", category: "LANGUAGE" },
  { name: "JavaScript", category: "LANGUAGE" },
  { name: "HTML5 / CSS3", category: "WEB" },
  { name: "Java", category: "BACKEND" },
  { name: "PHP", category: "BACKEND" },
  { name: "SQL", category: "DATABASE" },
  { name: "Git / GitHub", category: "TOOLS" },
];

const projects = [
  {
    number: "01",
    title: "SEU PRÓXIMO PROJETO",
    type: "WEB APPLICATION",
    description:
      "Um espaço reservado para apresentar uma aplicação que você desenvolveu.",
    status: "EM BREVE",
  },
  {
    number: "02",
    title: "SEU PRÓXIMO EXPERIMENTO",
    type: "INTERFACE DESIGN",
    description:
      "Uma oportunidade para mostrar seu processo criativo e suas habilidades técnicas.",
    status: "EM BREVE",
  },
];

function App() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a
          href="#inicio"
          className="brand"
          aria-label="Pamela Dev — início"
          onClick={closeMenu}
        >
          <span className="brand-mark">P.</span>
          <span>
            PAMELA<span className="accent">.</span>DEV
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {t.nav.map((item, index) => {
            const hrefs = ["#inicio", "#sobre", "#projetos", "#contato"];

            return (
              <a
                key={item}
                href={hrefs[index]}
                onClick={closeMenu}
              >
                <span className="nav-number">0{index + 1}</span>
                {item}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Idioma">
            <button
              className={language === "pt" ? "active" : ""}
              onClick={() => setLanguage("pt")}
              aria-pressed={language === "pt"}
            >
              PT
            </button>
            <span>/</span>
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="status-dot" />
              {t.availability}
            </span>
            <span className="hero-index">[ 001 — 004 ]</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="section-kicker">{t.eyebrow}</p>

              <h1 className="hero-title">
                {t.line1}
                <br />
                <span>{t.line2}</span>
              </h1>

              <div className="hero-role">
                <span className="role-line" />
                <div>
                  <p>{t.role}</p>
                  <span>{t.specialties}</span>
                </div>
              </div>

              <p className="hero-description">{t.description}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  {t.projects}
                  <ArrowUpRight size={18} />
                </a>
                <a className="button button-outline" href="#contato">
                  {t.contact}
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </div>

            <div className="hero-art" aria-label="Arte geométrica abstrata">
              <div className="art-coordinate">MT / BR — 2026</div>
              <div className="art-frame">
                <div className="art-cross cross-one" />
                <div className="art-cross cross-two" />
                <div className="art-circle" />
                <div className="art-square" />
                <div className="art-diagonal" />
                <span className="art-label art-label-top">CREATIVE</span>
                <span className="art-label art-label-bottom">DEVELOPER_</span>
                <span className="art-vertical">DESIGN × CODE × PURPOSE</span>
              </div>
              <div className="art-caption">
                <Code2 size={15} />
                <span>BUILDING DIGITAL EXPERIENCES</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#sobre" className="scroll-indicator">
              <ArrowDown size={15} />
              {t.scroll}
            </a>
            <span className="hero-bottom-index">01 / 04</span>
          </div>
        </section>

        <section className="about-section section-shell" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">{t.aboutLabel}</span>
            <span className="heading-rule" />
          </div>

          <div className="about-grid">
            <h2 className="section-title">
              {t.aboutTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span>
                {t.aboutTitle.split(" ").slice(-1)}
              </span>
            </h2>

            <div className="about-copy">
              <p>{t.aboutText}</p>
              <a className="text-link" href="#contato">
                {t.contact}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="stack-section section-shell" id="tecnologias">
          <div className="section-heading">
            <span className="section-kicker">{t.stackLabel}</span>
            <span className="heading-rule" />
          </div>

          <div className="stack-intro">
            <h2 className="section-title">{t.stackTitle}</h2>
            <p>{t.stackDescription}</p>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div className="tech-item" key={tech.name}>
                <span className="tech-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{tech.name}</h3>
                  <span>{tech.category}</span>
                </div>
                <ArrowUpRight className="tech-arrow" size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section section-shell" id="projetos">
          <div className="section-heading">
            <span className="section-kicker">{t.projectsLabel}</span>
            <span className="heading-rule" />
          </div>

          <div className="projects-intro">
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p>{t.projectsDescription}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number} / PROJECT</span>
                  <ArrowUpRight size={20} />
                </div>
                <div className="project-visual">
                  <span className="project-visual-mark">P.</span>
                  <span className="project-visual-code">
                    {"<"} BUILD SOMETHING {" />"}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-note">
            <span className="status-dot" />
            {t.projectEmpty}
            <span className="projects-note-detail">{t.projectEmptyText}</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {t.viewGithub}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="contact-section section-shell" id="contato">
          <div className="section-heading">
            <span className="section-kicker">{t.contactLabel}</span>
            <span className="heading-rule" />
          </div>

          <div className="contact-content">
            <h2 className="contact-title">
              {t.contactTitle}
              <br />
              <span>{t.contactTitle2}</span>
            </h2>
            <div className="contact-side">
              <p>{t.contactText}</p>
              <a
                className="button button-primary"
                href="mailto:SEU_EMAIL_AQUI"
              >
                <Mail size={18} />
                {t.sendEmail}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>GH</span>
              GITHUB
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>
              LINKEDIN
              <ArrowUpRight size={14} />
            </a>
            <a href="mailto:SEU_EMAIL_AQUI">
              <Mail size={18} />
              E-MAIL
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#inicio" className="brand footer-brand">
          <span className="brand-mark">P.</span>
          <span>
            PAMELA<span className="accent">.</span>DEV
          </span>
        </a>
        <span>© {new Date().getFullYear()} · {t.footer}</span>
        <a href="#inicio" className="back-top">
          {t.backTop}
          <ArrowDown className="back-top-icon" size={14} />
        </a>
      </footer>
    </>
  );
}

export default App;
