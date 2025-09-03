"use client"

import { useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

export const metadata = {
  title: "ASVON - Association Solidarité pour Veuves, Veufs, Orphelins et Nécessiteux",
  description:
    "ASVON œuvre pour le soutien des veuves, veufs, orphelins et personnes dans le besoin au Cameroun. Rejoignez notre mission humanitaire.",
  keywords: [
    "ASVON",
    "association humanitaire",
    "veuves",
    "veufs",
    "orphelins",
    "aide sociale",
    "Cameroun",
    "solidarité",
  ],
  alternates: { canonical: "/" },
}

export default function Page() {
  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle")
    const navMenu = document.getElementById("navMenu")

    const toggleHandler = () => {
      navMenu?.classList.toggle("active")
      if (menuToggle) {
        const isBars = menuToggle.innerHTML.includes("bars")
        menuToggle.innerHTML = isBars ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'
      }
    }

    menuToggle?.addEventListener("click", toggleHandler)

    // Smooth scrolling for in-page anchors
    const anchorHandler = (e: Event) => {
      e.preventDefault()
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (!target) return
      const el = document.querySelector(target)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        navMenu?.classList.remove("active")
        if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      }
    }

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    anchors.forEach((a) => a.addEventListener("click", anchorHandler))

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"))
    }, observerOptions)

    const animated = Array.from(document.querySelectorAll<HTMLElement>(".animate-on-scroll"))
    animated.forEach((el) => io.observe(el))

    // Scroll effect on nav (kept identical for visual consistency)
    const onScroll = () => {
      const nav = document.querySelector("nav") as HTMLElement | null
      if (!nav) return
      if (window.scrollY > 100) {
        nav.style.background = "rgba(255, 255, 255, 0.98)"
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
      } else {
        nav.style.background = "rgba(255, 255, 255, 0.98)"
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
      }
    }
    window.addEventListener("scroll", onScroll)

    // Simple form handler
    const form = document.getElementById("contactForm") as HTMLFormElement | null
    const onSubmit = (e: Event) => {
      e.preventDefault()
      alert("Merci pour votre message. Nous vous répondrons dans les plus brefs délais.")
      form?.reset()
    }
    form?.addEventListener("submit", onSubmit)

    return () => {
      menuToggle?.removeEventListener("click", toggleHandler)
      anchors.forEach((a) => a.removeEventListener("click", anchorHandler))
      window.removeEventListener("scroll", onScroll)
      form?.removeEventListener("submit", onSubmit)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-container">
            <a href="#" className="logo" aria-label="ASVON - Accueil">
              <Image
                src="/logo.png"
                alt="ASVON Logo"
                width={50}
                height={50}
                style={{ borderRadius: "50%", border: "2px solid var(--secondary)" }}
                priority
              />
              <span>ASVON</span>
            </a>
            <ul className="nav-menu" id="navMenu">
              <li>
                <a href="#home" className="nav-link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#impact" className="nav-link">
                  Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <button className="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu">
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home" aria-label="Section Héros">
        <div className="container">
          <div className="hero-content">
            <h1>Ensemble pour Reconstruire des Vies</h1>
            <p className="hero-subtitle">
              ASVON - Association de Solidarité pour les Veuves, Veufs, Orphelins et Nécessiteux
            </p>
            <div className="cta-buttons">
              <a href="#donate" className="btn btn-primary" aria-label="Faire un Don">
                Faire un Don
              </a>
              <a href="#volunteer" className="btn btn-outline" aria-label="Devenir Bénévole">
                Devenir Bénévole
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about" aria-label="À propos">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Notre Mission</h2>
          <p className="section-subtitle animate-on-scroll">
            Apporter soutien, espoir et dignité aux plus vulnérables de notre société
          </p>
          <div className="about-grid">
            <div className="about-card animate-on-scroll">
              <div className="about-icon">
                <i className="fas fa-heart" />
              </div>
              <h3>Compassion</h3>
              <p>Nous accompagnons avec empathie et bienveillance les personnes en situation de vulnérabilité.</p>
            </div>
            <div className="about-card animate-on-scroll">
              <div className="about-icon">
                <i className="fas fa-hands-helping" />
              </div>
              <h3>Solidarité</h3>
              <p>Nous créons des liens de solidarité durables pour reconstruire des vies brisées.</p>
            </div>
            <div className="about-card animate-on-scroll">
              <div className="about-icon">
                <i className="fas fa-graduation-cap" />
              </div>
              <h3>Éducation</h3>
              <p>Nous investissons dans l&apos;éducation des orphelins pour leur offrir un avenir meilleur.</p>
            </div>
            <div className="about-card animate-on-scroll">
              <div className="about-icon">
                <i className="fas fa-home" />
              </div>
              <h3>Autonomie</h3>
              <p>Nous aidons les familles à retrouver leur autonomie et leur dignité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services" aria-label="Nos Actions">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Nos Actions</h2>
          <p className="section-subtitle animate-on-scroll">Des programmes concrets pour transformer des vies</p>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-child" />
              </div>
              <h3>Soutien aux Orphelins</h3>
              <p>
                Prise en charge scolaire, vestimentaire et alimentaire des orphelins. Nous assurons leur éducation et
                leur bien-être quotidien.
              </p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-user-friends" />
              </div>
              <h3>Aide aux Veuves et Veufs</h3>
              <p>
                Accompagnement psychosocial et économique pour les veuves et veufs. Formation professionnelle et
                microcrédits.
              </p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-hand-holding-heart" />
              </div>
              <h3>Assistance d&apos;Urgence</h3>
              <p>Distribution de vivres, vêtements et soins médicaux aux personnes dans le besoin urgent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact" id="impact" aria-label="Notre Impact">
        <div className="container">
          <h2 className="section-title" style={{ color: "white" }}>
            Notre Impact
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.9)" }}>
            Des chiffres qui témoignent de notre engagement
          </p>
          <div className="stats-grid">
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">500+</div>
              <p>Orphelins soutenus</p>
            </div>
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">300+</div>
              <p>Familles aidées</p>
            </div>
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">150+</div>
              <p>Bénévoles actifs</p>
            </div>
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">10+</div>
              <p>Années d&apos;action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact" aria-label="Contactez-nous">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Contactez-nous</h2>
          <p className="section-subtitle animate-on-scroll">Ensemble, nous pouvons faire la différence</p>
          <div className="contact-grid">
            <div className="contact-form animate-on-scroll">
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Envoyer le message
                </button>
              </form>
            </div>
            <div className="contact-info animate-on-scroll">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <h4>Adresse</h4>
                  <p>Yaoundé, Cameroun</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <h4>Téléphone</h4>
                  <p>+237 XXX XXX XXX</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@asvon.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ASVON</h3>
              <p>Association de Solidarité pour les Veuves, Veufs, Orphelins et Nécessiteux</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" aria-label="Twitter / X">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Liens Rapides</h3>
              <p>
                <a href="#about" style={{ color: "white", textDecoration: "none" }}>
                  À propos
                </a>
              </p>
              <p>
                <a href="#services" style={{ color: "white", textDecoration: "none" }}>
                  Nos Services
                </a>
              </p>
              <p>
                <a href="#impact" style={{ color: "white", textDecoration: "none" }}>
                  Notre Impact
                </a>
              </p>
              <p>
                <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </a>
              </p>
            </div>
            <div className="footer-section">
              <h3>Comment Aider</h3>
              <p>Faire un don</p>
              <p>Devenir bénévole</p>
              <p>Parrainer un orphelin</p>
              <p>Partager notre mission</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ASVON. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Styles (global) */}
      <style jsx global>{`
        :root {
          --primary: #2e8b57;
          --primary-dark: #236b43;
          --secondary: #ffd700;
          --secondary-dark: #ffa500;
          --text-dark: #202020;
          --text-light: #666666;
          --bg-light: #f8f9fa;
          --white: #ffffff;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
            Arial, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          overflow-x: hidden;
          background: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow);
          z-index: 1000;
          transition: var(--transition);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: var(--primary);
          font-weight: bold;
          font-size: 1.5rem;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary);
          transition: var(--transition);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--primary);
          cursor: pointer;
        }

        /* Hero */
        .hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 150px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .btn {
          padding: 12px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
          display: inline-block;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: var(--secondary);
          color: var(--text-dark);
        }

        .btn-primary:hover {
          background: var(--secondary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        }

        .btn-outline {
          background: transparent;
          color: white;
          border-color: white;
        }

        .btn-outline:hover {
          background: white;
          color: var(--primary);
        }

        /* Sections */
        section {
          padding: 80px 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-light);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* About */
        .about {
          background: var(--bg-light);
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .about-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          text-align: center;
        }

        .about-card:hover {
          transform: translateY(-5px);
        }

        .about-icon {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--secondary), var(--secondary-dark));
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        /* Impact */
        .impact {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        /* Contact */
        .contact {
          background: var(--bg-light);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
        }

        .contact-info {
          padding: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        /* Footer */
        footer {
          background: var(--text-dark);
          color: white;
          padding: 40px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .social-links a:hover {
          background: var(--secondary);
          transform: translateY(-3px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: var(--shadow);
            padding: 2rem 0;
          }

          .nav-menu.active {
            left: 0;
          }

          .hero {
            padding: 120px 0 80px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </>
  )
}