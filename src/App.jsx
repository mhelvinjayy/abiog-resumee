import { useEffect, useState } from 'react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, SiAndroidstudio, SiArduino, SiCisco, SiTryhackme, SiHackthebox, SiAutocad } from 'react-icons/si';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import resumeImage from './assets/resume.jpeg';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#seminars', label: 'Seminars' },
  { href: '#references', label: 'References' },
  { href: '#contact', label: 'Contact' },
];

const projects = [
  {
    title: 'Crypto Pulse',
    href: 'https://mhelvinn-git-main-mhelvinjayys-projects.vercel.app/',
  },
  {
    title: 'Student Portal',
    href: 'https://mhelvinjayy.github.io/studentportal/',
  },
  {
    title: 'Interactive Login Dashboard',
    href: 'https://mhelvinjayy.github.io/interactive-login-dashboardd/',
  },
  {
    title: 'Front End Project',
    href: 'https://mhelvinjayy.github.io/FRONTEND-LAB/',
  },
];

const references = [
  {
    name: 'Astrid Missy Bito-on',
    title: 'Presales Engineer',
    contact: '+63 9263151769',
  },
  {
    name: 'Roel Magdurulan IV',
    title: 'Civil Engineer',
    contact: '+63 9392651561',
  },
];

const skills = [
  { label: 'HTML5', icon: SiHtml5 },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'React', icon: SiReact },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Python', icon: SiPython },
  { label: 'Git', icon: SiGit },
  { label: 'Android Studio', icon: SiAndroidstudio },
  { label: 'Arduino Uno', icon: SiArduino },
  { label: 'Adobe Photoshop', icon: DiPhotoshop },
  { label: 'AutoCAD', icon: SiAutocad },
  { label: 'Cisco Networking', icon: SiCisco },
  { label: 'TryHackMe', icon: SiTryhackme },
];

const experiences = [
  {
    title: 'Contractual Encoder (Part-time)',
    date: 'March – May 2022',
    description: 'Responsible for accurate data entry, verification, and organization of document records in a deadline-driven environment.',
  },
  {
    title: 'Contractual Encoder (Part-time)',
    date: 'Sept – Nov 2025',
    description: 'Maintained data integrity across multiple systems while collaborating with teams to streamline processes and improve accuracy.',
  },
];

const seminars = [
  {
    title: 'Building Powerful APIs with Node.js, Prisma and MySQL',
    date: 'Dec 2024',
    description: 'Explored API design and best practices leveraging modern JavaScript stacks and relational databases.',
  },
  {
    title: 'Our Future: With Great Data Comes Great Responsibility – Training AI for a Better World',
    date: 'Mar 2025',
    description: 'Focused on ethical AI, data responsibility, and designing systems that prioritize fairness and security.',
  },
];

const contacts = [
  { title: 'Email', content: 'mhelvinjayy@gmail.com', href: 'mailto:mhelvinjayy@gmail.com' },
  { title: 'Phone', content: '+63 9936986438', href: 'tel:+639936986438' },
  { title: 'Location', content: 'Pasay City, Philippines' },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-inner');
    const progressObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          const value = Number(bar.getAttribute('data-progress'));
          if (value) {
            bar.style.width = `${value}%`;
          }
          observer.unobserve(bar);
        });
      },
      { threshold: 0.3 }
    );

    progressBars.forEach((bar) => progressObserver.observe(bar));
    return () => progressObserver.disconnect();
  }, []);

  useEffect(() => {
    document.title = 'Mhelvin Jay Abiog | Portfolio';
  }, []);

  const handleNavClick = (href) => {
    setNavOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
            Abiog | Portfolio
          </a>
          <nav className={`nav ${navOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setNavOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <p className="overline">Hi, I’m</p>
              <h1 className="title">Mhelvin Jay Abiog</h1>
              <p className="subtitle">BS Computer Engineering</p>
              <p className="description">
               UI/UX Designer | Front End Developer
              </p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => handleNavClick('#experience')}>
                  View Projects
                </button>
                <button className="btn secondary" onClick={() => handleNavClick('#contact')}>
                  Contact Me
                </button>
                <a className="btn linkedin-icon" href="https://www.linkedin.com/in/mhelvin-jay-abiog-b2a9a6403" target="_blank" rel="noreferrer" aria-label="Mhelvin Jay Abiog LinkedIn profile">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="photo">
                <img src={resumeImage} alt="Mhelvin Jay Abiog" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-header reveal">
              <h2>About Me</h2>
              <p>
                Mhelvin Jay Abiog is a graduating Bachelor of Science in Computer Engineering student with a strong foundation in both hardware and software systems. He completed his primary and secondary education at Baclaran National High School and pursued his Senior High School at Philippine Christian University, where he further developed his interest in technology and engineering.
              </p>
              <p>
                Throughout his academic journey, he has gained hands-on experience in microcontroller programming and basic system design. He is particularly interested in cybersecurity, with a focus on understanding how to protect networks, systems, and data from potential threats. He continuously seeks opportunities to expand his technical knowledge and stay updated with emerging technologies in the field.
              </p>
              <p>
                In addition to his academic background, he has experience in data encoding, which helped him develop attention to detail, accuracy, and organizational skills. He is also familiar with working in team-based environments, contributing ideas, and adapting to different project requirements.
              </p>
              <p>
                Currently, he is working on a research proposal titled <strong>“Classroom Energy Monitoring System Using Microcontroller”</strong>, which aims to develop a cost-effective and efficient system for monitoring and managing energy consumption in classroom environments. This project reflects his interest in applying engineering solutions to real-world problems, particularly in sustainability and energy efficiency.
              </p>
              <p>
                Mhelvin is committed to continuous learning and aims to build a career in cybersecurity, where he can contribute to innovative and secure technological solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-header reveal">
              <h2>My Skills</h2>
              <p>Technologies and tools I work with on a daily basis.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.label} className="skill-card reveal">
                    <div className="skill-icon-box">
                      <Icon className="skill-icon" />
                    </div>
                    <p>{skill.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-header reveal">
              <h2>Experience</h2>
              <p>Hands-on experience in fast-paced environments delivering quality data work.</p>
            </div>
            <div className="cards-grid">
              {experiences.map((item) => (
                <article key={item.title + item.date} className="card reveal">
                  <h3>{item.title}</h3>
                  <p className="card-meta">{item.date}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-header reveal">
              <h2>Projects</h2>
              <p>Selected web projects and applications I have developed.</p>
            </div>
            <div className="cards-grid">
              {projects.map((project) => (
                <article key={project.title} className="card reveal">
                  <div className="project-card-head">
                    <h3>{project.title}</h3>
                    <a className="project-icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                      <BsGithub />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="seminars">
          <div className="container">
            <div className="section-header reveal">
              <h2>Seminars</h2>
              <p>Selected training sessions and conferences attended.</p>
            </div>
            <div className="cards-grid">
              {seminars.map((item) => (
                <article key={item.title} className="card reveal">
                  <h3>{item.title}</h3>
                  <p className="card-meta">{item.date}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="references">
          <div className="container">
            <div className="section-header reveal">
              <h2>References</h2>
              <p>People who can speak to my work and experience.</p>
            </div>
            <div className="cards-grid">
              {references.map((ref) => (
                <article key={ref.name} className="card reveal">
                  <h3>{ref.name}</h3>
                  <p className="card-subtitle">{ref.title}</p>
                  <p className="card-meta">{ref.contact}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section-header reveal">
              <h2>Contact</h2>
              <p>Let's connect and build something meaningful together.</p>
            </div>
            <div className="contact-grid">
              {contacts.map((item) => (
                <div key={item.title} className="contact-card reveal">
                  <h3>{item.title}</h3>
                  {item.href ? (
                    <a href={item.href}>{item.content}</a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Mhelvin Jay Abiog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
