import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: 'UMKM Profile Website',
      description: 'Website resmi untuk memperkenalkan bisnis kamu.',
      features: ['Cocok untuk toko', 'Cocok untuk jasa', 'Cocok untuk usaha lokal'],
      price: 'Rp 125.000 - Rp 299.000',
      icon: '🏢'
    },
    {
      id: 2,
      title: 'Promo Landing Page Website',
      description: 'Satu halaman fokus untuk iklan & penjualan.',
      features: ['Cocok untuk Promo', 'Cocok untuk Diskon', 'Cocok untuk Event', 'Cocok untuk iklan IG/FB'],
      price: 'Rp 125.000 - Rp 299.000',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'Personal / Portfolio Website',
      description: 'Tampilkan keahlian dan karya kamu secara profesional.',
      features: ['Cocok untuk freelancer', 'Cocok untuk content creator', 'Cocok untuk jasa personal'],
      price: 'Rp 125.000 - Rp 299.000',
      icon: '🎨'
    },
  ];

  const processSteps = [
    { number: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan website' },
    { number: '02', title: 'Desain', desc: 'Pembuatan mockup UI/UX' },
    { number: '03', title: 'Development', desc: 'Pengembangan website' },
    { number: '04', title: 'Launch', desc: 'Peluncuran & maintenance' },
  ];

  // Background image untuk hero section
  const heroBackgroundImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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

    // Services Grid Section
    servicesSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
    servicesHeader: {
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
    },
    serviceCard: {
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
    cardPrice: {
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
    },
    orderButton: {
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
    processTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '20px',
      letterSpacing: '-0.02em',
    },
    processSubtitle: {
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

    // Disclaimer Section
    disclaimerSection: {
      padding: '80px 0 120px',
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
              Layanan <span style={styles.heroHighlight}>Profesional</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Solusi lengkap pembuatan website untuk berbagai kebutuhan bisnis Anda. 
              Kami menghadirkan website yang tidak hanya indah, tetapi juga fungsional.
            </p>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div style={styles.heroDecoration}>
          <div style={styles.floatingCircle1} className="floating" />
          <div style={styles.floatingCircle2} className="floating" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <div style={styles.servicesHeader} className="fade-in">
            <h2 style={styles.sectionTitle}>Paket Layanan Kami</h2>
            <p style={styles.sectionSubtitle}>
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>
          
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className="fade-up service-card"
                style={{
                  ...styles.serviceCard,
                  transform: hoveredCard === service.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                data-index={index}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.iconContainer} className="service-icon-container">
                    <span style={styles.icon}>{service.icon}</span>
                  </div>
                  <div style={styles.cardTitleContainer}>
                    <h3 style={styles.cardTitle}>{service.title}</h3>
                  </div>
                </div>
                <p style={styles.cardDescription}>{service.description}</p>
                <ul style={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={styles.cardPrice}>
                  {service.price}
                </div>
                <Link 
                  to="/kontak" 
                  style={styles.orderButton}
                  className="order-button"
                >
                  Pesan Sekarang
                  <span style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.processSection}>
        <div style={styles.container}>
          <div style={styles.processHeader} className="fade-in">
            <h2 style={styles.processTitle}>Proses Pengerjaan</h2>
            <p style={styles.processSubtitle}>
              Langkah-langkah sistematis untuk hasil terbaik
            </p>
          </div>
          
          <div style={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="fade-up process-step"
                style={styles.processStep}
                data-index={index}
              >
                <div style={styles.stepNumber}>{step.number}</div>
                <div style={styles.stepContent}>
                  <h4 style={styles.stepTitle}>{step.title}</h4>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div style={styles.stepConnector} className="step-connector" />
                )}
              </div>
            ))}
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
              Website ini dibuat menggunakan data statis tidak dalam bentuk dinamis. 
              Harga dan layanan yang ditampilkan dapat berubah sewaktu-waktu. 
              Hubungi kami untuk informasi selengkapnya dan konsultasi gratis.
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
        .service-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(37, 99, 235, 0.3) !important;
        }
        
        .service-card:hover .service-icon-container {
          transform: scale(1.1) rotate(5deg) !important;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%) !important;
        }
        
        .order-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%) !important;
          color: #ffffff !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3) !important;
          border-color: transparent !important;
        }
        
        .order-button:hover span {
          transform: translateX(5px) !important;
        }
        
        .process-step:hover .step-number {
          transform: scale(1.1) rotate(10deg) !important;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4) !important;
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
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .service-card {
            padding: 32px 24px !important;
          }
          
          .section-title, .process-title, .disclaimer-title {
            font-size: 2.2rem !important;
          }
          
          .services-section, .process-section {
            padding: 80px 0 !important;
          }
          
          .disclaimer-section {
            padding: 60px 0 80px !important;
          }
          
          .disclaimer-content {
            padding: 32px 24px !important;
          }
          
          .process-steps {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          
          .step-connector {
            display: none !important;
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
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
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
          
          .services-section, .process-section {
            padding: 60px 0 !important;
          }
          
          .icon-container {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 20px !important;
          }
          
          .icon {
            font-size: 2rem !important;
          }
          
          .card-title {
            font-size: 1.3rem !important;
            margin-bottom: 12px !important;
          }
          
          .card-description {
            font-size: 1rem !important;
          }
          
          .section-title, .process-title, .disclaimer-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }
          
          .section-subtitle, .process-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .process-steps {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .step-number {
            width: 70px !important;
            height: 70px !important;
            font-size: 1.5rem !important;
          }
          
          .step-title {
            font-size: 1.2rem !important;
          }
          
          .disclaimer-message {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Services;