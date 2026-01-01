import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
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
      window.removeEventListener('resize', checkScreenSize);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Website Cepat',
      desc: 'Optimasi performa maksimal untuk kecepatan loading terbaik dan meningkatkan SEO.'
    },
    {
      icon: '📱',
      title: 'Responsif',
      desc: 'Tampilan optimal di semua perangkat dan ukuran layar dengan desain mobile-first.'
    },
    {
      icon: '🎨',
      title: 'Desain Modern',
      desc: 'UI/UX terkini dengan estetika yang memukau dan mengikuti tren terbaru.'
    },
    {
      icon: '🔒',
      title: 'Keamanan',
      desc: 'Proteksi lengkap untuk keamanan data Anda dengan sertifikat SSL premium.'
    },
    {
      icon: '🚀',
      title: 'SEO Ready',
      desc: 'Website dioptimalkan untuk mesin pencari dengan struktur yang tepat.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance',
      desc: 'Dukungan teknis 24/7 dan update berkala untuk kelancaran operasional.'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '3+', label: 'Klien Puas' },
    { value: '98%', label: 'Kepuasan' }
  ];

  // Background image untuk hero section (pilih yang cocok dengan tema teknologi/digital)
  const heroBackgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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

    // Hero Section dengan Background Image
    hero: {
      padding: '160px 0 120px',
      background: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${heroBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    heroContent: {
      maxWidth: '850px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 3,
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '24px',
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
      marginBottom: '48px',
      maxWidth: '700px',
      margin: '0 auto 48px',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
    },
    heroButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    primaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      padding: '16px 40px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
    },
    secondaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'transparent',
      color: '#ffffff',
      padding: '16px 40px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    buttonArrow: {
      fontSize: '1.2rem',
      transition: 'transform 0.3s ease',
    },

    // Stats Section
    statsSection: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    statCard: {
      textAlign: 'center',
      padding: '32px 24px',
      background: 'rgba(37, 99, 235, 0.05)',
      borderRadius: '16px',
      border: '1px solid rgba(37, 99, 235, 0.1)',
      transition: 'all 0.3s ease',
    },
    statValue: {
      fontSize: '3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
    },
    statLabel: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '500',
    },

    // Features Section
    featuresSection: {
      padding: '120px 0',
      background: '#ffffff',
    },
    sectionHeader: {
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
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px',
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '40px 32px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
    },
    featureIconContainer: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 32px',
      transition: 'all 0.3s ease',
    },
    featureIcon: {
      fontSize: '2.5rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '16px',
    },
    featureDesc: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.6)',
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
    ctaSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.6',
      marginBottom: '48px',
    },
    ctaButton: {
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

    // Hero Decoration (opsional, bisa dihapus jika ingin lebih clean)
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
      {/* Hero Section dengan Background Image */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={{
            ...styles.heroContent,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <h1 style={styles.heroTitle}>
              Transformasi Digital{' '}
              <span style={styles.heroHighlight}>Bisnis Anda</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Solusi website profesional dengan teknologi terkini untuk mengoptimalkan 
              pertumbuhan dan kehadiran online bisnis Anda. Hadirkan pengalaman digital 
              yang mengesankan bagi Anda.
            </p>
            <div style={styles.heroButtons}>
              <Link 
                to="/kontak" 
                style={styles.primaryButton}
                className="primary-button"
              >
                Mulai Transformasi Digital
                <span style={styles.buttonArrow} className="button-arrow">→</span>
              </Link>
              <Link 
                to="/portofolio" 
                style={styles.secondaryButton}
                className="secondary-button"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        {!isMobile && (
          <div style={styles.heroDecoration}>
            <div style={styles.floatingCircle1} className="floating" />
            <div style={styles.floatingCircle2} className="floating" />
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection} className="fade-in">
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={styles.statCard}
                className="fade-up"
                data-delay={index * 100}
              >
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader} className="fade-in">
            <h2 style={styles.sectionTitle}>Solusi Digital Lengkap</h2>
            <p style={styles.sectionSubtitle}>
              Kami menyediakan rangkaian solusi digital yang komprehensif untuk 
              mengakselerasi pertumbuhan bisnis Anda di era digital.
            </p>
          </div>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="fade-up feature-card"
                style={styles.featureCard}
                data-index={index}
              >
                <div style={styles.featureIconContainer} className="feature-icon-container">
                  <span style={styles.featureIcon}>{feature.icon}</span>
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaContent} className="fade-in">
            <h2 style={styles.ctaTitle}>
              Wujudkan Visi Digital Bisnis Anda
            </h2>
            <p style={styles.ctaSubtitle}>
              Konsultasi gratis dengan creator untuk merancang strategi digital 
              yang tepat bagi perkembangan bisnis Anda.
            </p>
            <Link 
              to="/kontak" 
              style={styles.ctaButton}
              className="cta-button"
            >
              Jadwalkan Konsultasi Gratis
              <span style={styles.buttonArrow} className="button-arrow">→</span>
            </Link>
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
        .primary-button:hover, .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }
        
        .primary-button:hover .button-arrow,
        .cta-button:hover .button-arrow {
          transform: translateX(6px);
        }
        
        .secondary-button:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border-color: rgba(37, 99, 235, 0.2);
        }
        
        .feature-card:hover .feature-icon-container {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.15);
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .hero {
            padding: 140px 0 100px !important;
            background-attachment: scroll !important;
          }
          
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .feature-card {
            padding: 32px 24px !important;
          }
          
          .section-title, .cta-title {
            font-size: 2.2rem !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 16px !important;
          }
          
          .primary-button, .secondary-button, .cta-button {
            width: 100%;
            justify-content: center;
            padding: 18px 32px !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          .stat-card {
            padding: 24px 16px !important;
          }
          
          .stat-value {
            font-size: 2.5rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          .hero-title {
            font-size: 3.2rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 120px 0 80px !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 20px !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 40px !important;
          }
          
          .features-section, .stats-section, .cta-section {
            padding: 80px 0 !important;
          }
          
          .feature-icon-container {
            width: 70px !important;
            height: 70px !important;
            margin-bottom: 24px !important;
          }
          
          .feature-icon {
            font-size: 2rem !important;
          }
          
          .feature-title {
            font-size: 1.3rem !important;
            margin-bottom: 12px !important;
          }
          
          .section-title, .cta-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }
          
          .section-subtitle, .cta-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .container {
            padding: 0 20px !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;