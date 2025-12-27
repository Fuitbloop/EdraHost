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

    const elements = document.querySelectorAll('.fade-up');
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
      desc: 'Optimasi performa maksimal untuk kecepatan loading terbaik.'
    },
    {
      icon: '📱',
      title: 'Responsif',
      desc: 'Tampilan optimal di semua perangkat dan ukuran layar.'
    },
    {
      icon: '🎨',
      title: 'Desain Modern',
      desc: 'UI/UX terkini dengan estetika yang memukau.'
    },
    {
      icon: '🔒',
      title: 'Keamanan',
      desc: 'Proteksi lengkap untuk keamanan data Anda.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
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
              Kami menghadirkan solusi website profesional dengan teknologi terkini 
              untuk mengoptimalkan pertumbuhan dan kehadiran online bisnis Anda.
            </p>
            <div style={styles.heroButtons}>
              <Link 
                to="/kontak" 
                style={styles.primaryButton}
              >
                Mulai Sekarang
                <span style={styles.buttonArrow}>→</span>
              </Link>
              <Link 
                to="/portofolio" 
                style={styles.secondaryButton}
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

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Mengapa Memilih EdraHost?</h2>
            <p style={styles.sectionSubtitle}>
              Solusi lengkap untuk kebutuhan digital bisnis Anda
            </p>
          </div>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="fade-up"
                style={styles.featureCard}
                data-index={index}
              >
                <div style={styles.featureIconContainer}>
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
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <p style={styles.ctaSubtitle}>
              Konsultasi gratis, wujudkan website impian.
            </p>
            <Link 
              to="/kontak" 
              style={styles.ctaButton}
            >
              Konsultasi Gratis
              <span style={styles.buttonArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .floating {
          animation: float 8s ease-in-out infinite;
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .feature-card {
            padding: 25px !important;
          }
          
          .section-title {
            font-size: 1.8rem !important;
          }
          
          .cta-title {
            font-size: 1.8rem !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 12px !important;
          }
          
          .primary-button, .secondary-button, .cta-button {
            width: 100%;
            justify-content: center;
            padding: 14px 24px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          
          .hero-title {
            font-size: 2.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 100px 0 80px !important;
          }
          
          .hero-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 30px !important;
          }
          
          .features-section, .cta-section {
            padding: 60px 0 !important;
          }
          
          .feature-icon-container {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 20px !important;
          }
          
          .feature-icon {
            font-size: 2rem !important;
          }
          
          .feature-title {
            font-size: 1.3rem !important;
            margin-bottom: 10px !important;
          }
          
          .section-title, .cta-title {
            font-size: 1.6rem !important;
            margin-bottom: 12px !important;
          }
          
          .section-subtitle, .cta-subtitle {
            font-size: 1rem !important;
            margin-bottom: 30px !important;
          }
          
          .container {
            width: 92% !important;
            padding: 0 !important;
          }
        }
        
        /* Hover Effects */
        .primary-button:hover, .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
        }
        
        .primary-button:hover .button-arrow,
        .cta-button:hover .button-arrow {
          transform: translateX(5px);
        }
        
        .secondary-button:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.1);
          border-color: #4A90E2;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card:hover .feature-icon-container {
          transform: scale(1.05);
          background-color: rgba(74, 144, 226, 0.15);
        }
      `}</style>
    </>
  );
};

const styles = {
  // Container
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  },

  // Hero Section
  hero: {
    padding: '140px 0 100px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 'calc(110vh - 70px)',
    display: 'flex',
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 3,
  },
  heroTitle: {
    fontSize: '3.2rem',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#ffffff',
  },
  heroHighlight: {
    color: '#4A90E2',
    background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.2)',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
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
    top: '15%',
    right: '10%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(74, 144, 226, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    animationDelay: '0s',
  },
  floatingCircle2: {
    position: 'absolute',
    bottom: '15%',
    left: '8%',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%)',
    borderRadius: '50%',
    animationDelay: '2s',
  },

  // Features Section
  featuresSection: {
    padding: '100px 0',
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: '35px 30px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  },
  featureIconContainer: {
    width: '70px',
    height: '70px',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    transition: 'all 0.3s ease',
  },
  featureIcon: {
    fontSize: '2.2rem',
  },
  featureTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  featureDesc: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '1.6',
    margin: 0,
  },

  // CTA Section
  ctaSection: {
    padding: '100px 0',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  ctaTitle: {
    fontSize: '2.4rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff',
  },
  ctaSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(74, 144, 226, 0.3)',
  },
};

export default Home;