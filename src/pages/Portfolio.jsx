import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleRedirect = () => {
    setIsLoading(true);
    // Buka portfolio di tab baru
    window.open('https://edrahost-psi-silk.vercel.app/', '_blank');
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Website Digital Course Platform',
      description: 'Website dalam bentuk Platform penjualan kursus digital berbasis online.',
      features: ['Responsif di semua device', 'Optimasi SEO', 'Fast Loading', 'Sistem keranjang belanja'],
      link: 'https://example.com/ecommerce',
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Company Profile',
      description: 'Website perusahaan profesional dengan portfolio dan testimoni.',
      features: ['Desain modern', 'CMS mudah dikelola', 'Gallery portfolio', 'Blog integrated'],
      link: 'https://example.com/company',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Website pribadi untuk menampilkan karya dan keahlian.',
      features: ['Animasi interaktif', 'Dark/Light mode', 'Contact form', 'Social media integration'],
      link: 'https://edracreatordigital.vercel.app/',
      icon: '🎨'
    },
  ];

  // Background image untuk hero section - diganti yang cocok untuk portofolio
  const heroBackgroundImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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

    // Hero Section
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

    // Portfolio Grid Section
    portfolioSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
    portfolioHeader: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '20px',
      letterSpacing: '-0.02em',
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(0, 0, 0, 0.6)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    portfolioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
    },
    portfolioCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '24px',
      marginBottom: '24px',
    },
    iconContainer: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    icon: {
      fontSize: '2.5rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    cardTitleContainer: {
      flex: 1,
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '8px',
      lineHeight: '1.3',
    },
    cardDescription: {
      color: 'rgba(0, 0, 0, 0.7)',
      lineHeight: '1.6',
      marginBottom: '28px',
      flex: 1,
      fontSize: '1.1rem',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '32px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: 'rgba(0, 0, 0, 0.8)',
      marginBottom: '12px',
      fontSize: '1rem',
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
    cardLink: {
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
      textDecoration: 'none',
      display: 'block',
    },
    viewButton: {
      background: 'transparent',
      color: '#2563eb',
      padding: '14px 32px',
      borderRadius: '12px',
      border: '2px solid #2563eb',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textAlign: 'center',
      marginTop: 'auto',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },

    // Redirect Card Section (Mempertahankan fungsi utama)
    redirectSection: {
      padding: '120px 0',
      background: '#ffffff',
    },
    redirectCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '50px 40px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      maxWidth: '800px',
      margin: '0 auto',
    },
    redirectIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 30px',
    },
    redirectTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '20px',
      lineHeight: '1.3',
    },
    redirectDescription: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.7)',
      lineHeight: '1.6',
      marginBottom: '30px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    websiteInfo: {
      backgroundColor: 'rgba(37, 99, 235, 0.05)',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '30px',
      border: '1px solid rgba(37, 99, 235, 0.1)',
    },
    urlContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px',
    },
    urlLabel: {
      fontWeight: '600',
      color: '#1a1a1a',
      fontSize: '1rem',
    },
    urlLink: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      wordBreak: 'break-all',
      transition: 'all 0.3s ease',
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '30px',
    },
    primaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#1a1a1a',
      padding: '16px 32px',
      borderRadius: '12px',
      border: '2px solid rgba(0, 0, 0, 0.2)',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    buttonArrow: {
      fontSize: '1.2rem',
      transition: 'transform 0.3s ease',
    },
    spinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: '#ffffff',
      marginRight: '8px',
    },

    // Disclaimer Section
    disclaimerSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    },
    disclaimerContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
      padding: '48px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    disclaimerIcon: {
      fontSize: '3rem',
      marginBottom: '24px',
      display: 'inline-block',
    },
    disclaimerTitle: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '20px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
    },
    disclaimerMessage: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.7',
      margin: 0,
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
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Portofolio <span style={styles.heroHighlight}>Kami</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Kumpulan proyek terbaik yang telah kami kerjakan dengan teknologi terkini 
              dan desain yang memukau untuk berbagai kebutuhan bisnis.
            </p>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div style={styles.heroDecoration}>
          <div style={styles.floatingCircle1} className="floating" />
          <div style={styles.floatingCircle2} className="floating" />
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section style={styles.portfolioSection}>
        <div style={styles.container}>
          <div style={styles.portfolioHeader} className="fade-in">
            <h2 style={styles.sectionTitle}>Proyek Unggulan</h2>
            <p style={styles.sectionSubtitle}>
              Beberapa contoh website yang telah kami kembangkan
            </p>
          </div>
          
          <div style={styles.portfolioGrid}>
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="fade-up portfolio-card"
                style={{
                  ...styles.portfolioCard,
                  transform: hoveredCard === item.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                data-index={index}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.iconContainer} className="portfolio-icon-container">
                    <span style={styles.icon}>{item.icon}</span>
                  </div>
                  <div style={styles.cardTitleContainer}>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                  </div>
                </div>
                <p style={styles.cardDescription}>{item.description}</p>
                <ul style={styles.featuresList}>
                  {item.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.viewButton}
                  className="view-button"
                >
                  Lihat Demo
                  <span style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redirect Card Section (Mempertahankan fungsi utama) */}
      <section style={styles.redirectSection}>
        <div style={styles.container}>
          <div style={styles.redirectCard} className="fade-in">
            <div style={styles.redirectIcon}>
              <span style={{ fontSize: '2.5rem' }}>🚀</span>
            </div>
            
            <h2 style={styles.redirectTitle}>
              Portofolio Lengkap Tersedia di Website Creator
            </h2>
            
            <p style={styles.redirectDescription}>
              Untuk melihat kumpulan lengkap proyek, studi kasus, dan hasil kerja, 
              silakan kunjungi website portofolio utama dengan menekan tombol di bawah.
            </p>

            {/* Website Info */}
            <div style={styles.websiteInfo}>
              <div style={styles.urlContainer}>
                <span style={styles.urlLabel}>Website:</span>
                <a 
                  href="https://edrahost-psi-silk.vercel.app/" 
                  style={styles.urlLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="url-link"
                >
                  https://edrahost-psi-silk.vercel.app/
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonGroup}>
              <button 
                style={styles.primaryButton}
                onClick={handleRedirect}
                disabled={isLoading}
                className="primary-button"
              >
                {isLoading ? (
                  <>
                    <span style={styles.spinner}></span>
                    Membuka...
                  </>
                ) : (
                  <>
                    Buka Portofolio Sekarang
                    <span style={styles.buttonArrow} className="button-arrow">↗</span>
                  </>
                )}
              </button>
              
              <button 
                style={styles.secondaryButton}
                onClick={handleBack}
                className="secondary-button"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section style={styles.disclaimerSection}>
        <div style={styles.container}>
          <div style={styles.disclaimerContent} className="fade-in">
            <div style={styles.disclaimerIcon}>⚠️</div>
            <h3 style={styles.disclaimerTitle}>Penting untuk Diketahui</h3>
            <p style={styles.disclaimerMessage}>
              Portofolio yang ditampilkan adalah contoh proyek yang diluar menu layanan. 
              Namun setiap website dikembangkan dengan teknologi terkini dan disesuaikan dengan kebutuhan klien. 
              Hubungi kami untuk konsultasi gratis mengenai proyek Anda.
            </p>
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
        .portfolio-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(37, 99, 235, 0.3) !important;
        }
        
        .portfolio-card:hover .portfolio-icon-container {
          transform: scale(1.1) rotate(5deg) !important;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%) !important;
        }
        
        .view-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%) !important;
          color: #ffffff !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3) !important;
          border-color: transparent !important;
        }
        
        .view-button:hover span {
          transform: translate(3px, -3px) !important;
        }
        
        .primary-button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4) !important;
        }
        
        .primary-button:hover .button-arrow {
          transform: translate(3px, -3px) !important;
        }
        
        .secondary-button:hover {
          background-color: rgba(0, 0, 0, 0.05) !important;
          border-color: #2563eb !important;
          color: #2563eb !important;
          transform: translateY(-3px) !important;
        }
        
        .url-link:hover {
          text-decoration: underline !important;
          opacity: 0.9;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .hero {
            padding: 140px 0 60px !important;
            background-attachment: scroll !important;
          }
          
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .portfolio-card, .redirect-card {
            padding: 32px 24px !important;
          }
          
          .section-title, .disclaimer-title, .redirect-title {
            font-size: 2.2rem !important;
          }
          
          .portfolio-section, .redirect-section {
            padding: 80px 0 !important;
          }
          
          .disclaimer-section {
            padding: 80px 0 !important;
          }
          
          .disclaimer-content {
            padding: 32px 24px !important;
          }
          
          .card-header {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 20px !important;
          }
          
          .card-title {
            text-align: center !important;
          }
          
          .card-description {
            text-align: center !important;
          }
          
          .button-group {
            flex-direction: column !important;
            gap: 12px !important;
          }
          
          .primary-button, .secondary-button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          
          .hero-title {
            font-size: 3.2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
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
          
          .portfolio-section, .redirect-section {
            padding: 60px 0 !important;
          }
          
          .icon-container, .redirect-icon {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 20px !important;
          }
          
          .icon {
            font-size: 2rem !important;
          }
          
          .card-title, .redirect-title {
            font-size: 1.4rem !important;
            margin-bottom: 12px !important;
          }
          
          .card-description, .redirect-description {
            font-size: 1rem !important;
          }
          
          .section-title, .disclaimer-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }
          
          .section-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .disclaimer-message {
            font-size: 1.1rem !important;
          }
          
          .url-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;