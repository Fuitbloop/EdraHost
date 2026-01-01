import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up, .fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Data yang dipertahankan (TIDAK DIUBAH)
  const values = [
    { 
      title: 'Solusi Berbasis Hasil', 
      desc: 'Fokus pada hasil yang menggerakkan bisnis, bukan hanya kode.',
      icon: '🎯'
    },
    { 
      title: 'Komunikasi Transparan', 
      desc: 'Update berkala dan diskusi terbuka selama proyek.',
      icon: '📢'
    },
    { 
      title: 'Teknologi Terkini', 
      desc: 'Menggunakan tools dan framework terbaru untuk performa optimal.',
      icon: '⚡'
    },
    { 
      title: 'Dukungan Jangka Panjang', 
      desc: 'Layanan purna jual untuk keberlanjutan solusi Anda.',
      icon: '🛡️'
    },
  ];

  const process = [
    { step: '01', title: 'Discovery & Planning', desc: 'Analisis kebutuhan dan perencanaan proyek' },
    { step: '02', title: 'Design & Prototype', desc: 'Pembuatan wireframe dan mockup' },
    { step: '03', title: 'Development', desc: 'Implementasi dengan teknologi terbaik' },
    { step: '04', title: 'Testing & Launch', desc: 'Quality assurance dan peluncuran' },
    { step: '05', title: 'Support & Growth', desc: 'Maintenance dan optimasi berkelanjutan' },
  ];

  // Background image untuk hero section
  const heroBackgroundImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  const styles = {
    // Container
    container: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 2,
    },

    // Hero Section - HAPUS TOMBOL, KONSISTEN DENGAN PORTFOLIO
    hero: {
      padding: '160px 0 80px',
      background: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${heroBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 3,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '20px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    },
    heroHighlight: {
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.7',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
    },

    // Story Section
    storySection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Diubah dari 500px ke 350px
      gap: '60px',
      alignItems: 'center',
    },
    storyContent: {
      paddingRight: '40px',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '24px',
      letterSpacing: '-0.02em',
    },
    storyText: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.7)',
      lineHeight: '1.8',
      marginBottom: '24px',
    },
    quote: {
      background: 'rgba(37, 99, 235, 0.05)',
      padding: '30px',
      borderRadius: '16px',
      borderLeft: '4px solid #2563eb',
      marginTop: '30px',
    },
    quoteMark: {
      fontSize: '3rem',
      color: '#2563eb',
      lineHeight: '1',
      marginBottom: '-10px',
      display: 'block',
    },
    quoteText: {
      fontSize: '1.2rem',
      color: 'rgba(0, 0, 0, 0.8)',
      fontStyle: 'italic',
      lineHeight: '1.6',
      margin: 0,
    },
    storyVisual: {
      display: 'flex',
      justifyContent: 'center',
    },
    visualCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(10px)',
      maxWidth: '400px',
      width: '100%',
    },
    visualIcon: {
      fontSize: '3rem',
      marginBottom: '24px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    visualTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '24px',
      textAlign: 'center',
    },
    visualList: {
      listStyle: 'none',
      padding: 0,
    },
    visualListItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: 'rgba(0, 0, 0, 0.8)',
      marginBottom: '12px',
      fontSize: '1.1rem',
    },
    checkIcon: {
      color: '#10b981',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      width: '24px',
      height: '24px',
      background: 'rgba(16, 185, 129, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },

    // Process Section
    processSection: {
      padding: '120px 0',
      background: '#ffffff',
    },
    processHeader: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    sectionTitleCenter: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '24px',
      letterSpacing: '-0.02em',
      textAlign: 'center',
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(0, 0, 0, 0.6)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    processSteps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      position: 'relative',
    },
    processStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    },
    stepNumber: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      fontWeight: '800',
      marginBottom: '24px',
      position: 'relative',
      zIndex: 2,
      boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '12px',
    },
    stepDesc: {
      color: 'rgba(0, 0, 0, 0.7)',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    stepConnector: {
      position: 'absolute',
      top: '40px',
      right: '-20px',
      width: '40px',
      height: '2px',
      background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
      zIndex: 1,
    },

    // Values Section
    valuesSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    },
    valuesHeader: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
    },
    valueCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
    },
    valueIcon: {
      fontSize: '3rem',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '16px',
    },
    valueDesc: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.7)',
      lineHeight: '1.6',
      margin: 0,
    },

    // CTA Section
    ctaSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    },
    ctaTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
    },
    ctaText: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.6',
      marginBottom: '48px',
    },
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    ctaPrimaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: '#ffffff',
      color: '#2563eb',
      padding: '18px 48px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 25px rgba(255, 255, 255, 0.3)',
    },
    ctaSecondaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'transparent',
      color: '#ffffff',
      padding: '18px 48px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.1rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    buttonArrow: {
      fontSize: '1.2rem',
      transition: 'transform 0.3s ease',
    },

    // Hero Decoration
    heroDecoration: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    floatingCircle1: {
      position: 'absolute',
      top: '10%',
      right: '5%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      animationDelay: '0s',
    },
    floatingCircle2: {
      position: 'absolute',
      bottom: '10%',
      left: '5%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      animationDelay: '2s',
    },
  };

  return (
    <>
      {/* Hero Section - TANPA TOMBOL */}
      <section style={styles.hero} className="hero-section">
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">
              Tentang <span style={styles.heroHighlight}>EdraHost</span>
            </h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              Partner digital terpercaya dalam transformasi online bisnis Anda.
              Dengan pendekatan berbasis solusi, kami menghadirkan website yang 
              tidak hanya indah, tetapi juga menghasilkan.
            </p>
            {/* TOMBOL DIHAPUS untuk konsistensi dengan Portfolio.jsx */}
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div style={styles.heroDecoration}>
          <div style={styles.floatingCircle1} className="floating" />
          <div style={styles.floatingCircle2} className="floating" />
        </div>
      </section>

      {/* Story Section */}
      <section style={styles.storySection} className="story-section">
        <div style={styles.container}>
          <div style={styles.storyGrid} className="story-grid">
            <div style={styles.storyContent} className="fade-in story-content">
              <h2 style={styles.sectionTitle} className="section-title">Cerita Singkat Creator</h2>
              <p style={styles.storyText}>
                Berdiri sejak 2025, EdraHost lahir dari semangat untuk membantu 
                bisnis UKM dan startup di Indonesia memiliki kehadiran digital 
                yang profesional dan efektif.
              </p>
              <p style={styles.storyText}>
                Kami percaya bahwa website bukan hanya tentang tampilan, tetapi 
                tentang bagaimana solusi digital dapat menggerakkan bisnis. 
                Setiap proyek adalah kesempatan untuk menciptakan dampak.
              </p>
              <div style={styles.quote}>
                <span style={styles.quoteMark}>"</span>
                <p style={styles.quoteText}>
                  Kualitas terbaik datang dari pemahaman mendalam tentang 
                  kebutuhan bisnis Anda.
                </p>
              </div>
            </div>
            <div style={styles.storyVisual}>
              <div style={styles.visualCard} className="fade-up visual-card">
                <div style={styles.visualIcon}>🎯</div>
                <h3 style={styles.visualTitle}>Fokus Kami</h3>
                <ul style={styles.visualList}>
                  <li style={styles.visualListItem}>
                    <span style={styles.checkIcon}>✓</span>
                    Website yang menghasilkan konversi
                  </li>
                  <li style={styles.visualListItem}>
                    <span style={styles.checkIcon}>✓</span>
                    User experience yang memukau
                  </li>
                  <li style={styles.visualListItem}>
                    <span style={styles.checkIcon}>✓</span>
                    Performansi optimal di semua device
                  </li>
                  <li style={styles.visualListItem}>
                    <span style={styles.checkIcon}>✓</span>
                    Keamanan dan skalabilitas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.processSection} className="process-section">
        <div style={styles.container}>
          <div style={styles.processHeader} className="fade-in">
            <h2 style={styles.sectionTitleCenter} className="section-title-center">Proses Kerja Kami</h2>
            <p style={styles.sectionSubtitle} className="section-subtitle">
              Langkah sistematis untuk hasil terbaik
            </p>
          </div>
          
          <div style={styles.processSteps} className="process-steps">
            {process.map((step, index) => (
              <div 
                key={index}
                className="fade-up process-step"
                style={styles.processStep}
                data-index={index}
              >
                <div style={styles.stepNumber}>{step.step}</div>
                <div style={styles.stepContent}>
                  <h4 style={styles.stepTitle}>{step.title}</h4>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div style={styles.stepConnector} className="step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.valuesSection} className="values-section">
        <div style={styles.container}>
          <div style={styles.valuesHeader} className="fade-in">
            <h2 style={styles.sectionTitleCenter} className="section-title-center">Nilai-Nilai Creator</h2>
            <p style={styles.sectionSubtitle} className="section-subtitle">
              Prinsip yang memandu setiap proyek
            </p>
          </div>
          
          <div style={styles.valuesGrid} className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-up value-card"
                style={styles.valueCard}
                onMouseEnter={() => setHoveredCard(`value-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                data-index={index}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection} className="cta-section">
        <div style={styles.container}>
          <div style={styles.ctaContent} className="fade-in">
            <h2 style={styles.ctaTitle} className="cta-title">Siap Berkolaborasi?</h2>
            <p style={styles.ctaText}>
              Mari bicara tentang bagaimana kami dapat membantu mewujudkan 
              visi digital bisnis Anda.
            </p>
            <div style={styles.ctaButtons}>
              <Link 
                to="/kontak" 
                style={styles.ctaPrimaryButton}
                className="cta-button"
              >
                Mulai Proyek Anda
                <span style={styles.buttonArrow} className="button-arrow">→</span>
              </Link>
              <Link 
                to="/layanan" 
                style={styles.ctaSecondaryButton}
                className="cta-secondary-button"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }
        
        .fade-in.visible {
          opacity: 1;
        }
        
        .floating {
          animation: float 8s ease-in-out infinite;
        }
        
        /* Hover Effects */
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }
        
        .cta-button:hover .button-arrow {
          transform: translateX(6px);
        }
        
        .cta-secondary-button:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        .value-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border-color: rgba(37, 99, 235, 0.2);
        }
        
        .process-step:hover .step-number {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }
        
        /* Responsive Breakpoints - DIPERBAIKI SEPERTI PORTFOLIO.JSX */
        @media (max-width: 768px) {
          .hero-section {
            padding: 140px 0 60px !important;
            background-attachment: scroll !important;
          }
          
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 30px !important;
          }
          
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .story-content {
            padding-right: 0 !important;
          }
          
          .values-grid,
          .process-steps {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .section-title, .section-title-center, .cta-title {
            font-size: 2.2rem !important;
          }
          
          .story-section, .process-section, .values-section, .cta-section {
            padding: 80px 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .cta-button, .cta-secondary-button {
            width: 100% !important;
            justify-content: center !important;
            padding: 18px 32px !important;
          }
          
          .step-connector {
            display: none !important;
          }
          
          .process-step {
            flex-direction: row !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          
          .step-number {
            margin-right: 20px !important;
            margin-bottom: 0 !important;
            width: 70px !important;
            height: 70px !important;
            font-size: 1.5rem !important;
          }
          
          .visual-card {
            max-width: 100% !important;
            padding: 32px 24px !important;
          }
          
          .section-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .value-card, .process-step {
            padding: 32px 24px !important;
          }
          
          .value-icon {
            font-size: 2.5rem !important;
            margin-bottom: 20px !important;
          }
          
          .step-title {
            font-size: 1.2rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          .hero-title {
            font-size: 3.2rem !important;
          }
          
          .process-steps {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .step-connector:nth-child(2n) {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding: 120px 0 40px !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 16px !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 30px !important;
          }
          
          .story-section, .process-section, .values-section, .cta-section {
            padding: 60px 0 !important;
          }
          
          .value-icon {
            font-size: 2.5rem !important;
            margin-bottom: 20px !important;
          }
          
          .section-title, .section-title-center, .cta-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }
          
          .section-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .step-number {
            width: 70px !important;
            height: 70px !important;
            font-size: 1.5rem !important;
          }
          
          .step-title {
            font-size: 1.2rem !important;
          }
          
          .story-grid {
            gap: 30px !important;
          }
          
          .visual-card {
            padding: 24px 20px !important;
          }
          
          .quote {
            padding: 20px !important;
          }
          
          .quote-mark {
            font-size: 2rem !important;
          }
          
          .quote-text {
            font-size: 1rem !important;
          }
        }
        
        /* FIX UNTUK MENCEGAH HORIZONTAL SCROLL */
        * {
          box-sizing: border-box;
          max-width: 100vw;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }
        
        .container {
          width: 100% !important;
          max-width: 100% !important;
          padding: 0 16px !important;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 16px !important;
          }
          
          .story-text, .quote-text, .step-desc, .value-desc, .cta-text {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          
          .visual-list-item, .feature-item {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;