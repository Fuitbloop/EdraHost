import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: '📱', label: 'WhatsApp', link: 'https://wa.me/6285198674763' },
    { icon: '📧', label: 'Email', link: 'mailto:fuitbloop@gmail.com' },
    { icon: '💬', label: 'Telegram', link: 'https://t.me/edrahost' },
  ];

  const quickLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/portofolio', label: 'Portofolio' },
    { path: '/tentang-creator', label: 'Tentang Creator' },
    { path: '/kontak', label: 'Kontak' },
  ];

  const serviceLinks = [
    { label: 'Website Perusahaan', desc: 'Profil Perusahaan' },
    { label: 'Website Portfolio', desc: 'Portfolio Personal' },
    { label: 'Website Landing Page', desc: 'Iklan Promosi' },
  ];

  const styles = {
    // Footer Container
    footer: {
      backgroundColor: 'rgba(15, 23, 42, 0.98)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    container: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 24px 40px',
      position: 'relative',
      zIndex: 2,
    },

    // Main Content
    mainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      marginBottom: '60px',
    },
    fadeIn: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Logo & About Section
    aboutSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'transform 0.3s ease',
    },
    logoText: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#ffffff',
      letterSpacing: '1px',
      transition: 'color 0.3s ease',
    },
    logoHighlight: {
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '1px',
    },
    aboutText: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '1.1rem',
      lineHeight: '1.8',
      margin: 0,
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '16px',
      marginTop: '16px',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      padding: '12px 20px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1rem',
    },
    socialIcon: {
      fontSize: '1.3rem',
    },

    // Quick Links Section
    linksSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '8px',
      position: 'relative',
      paddingBottom: '12px',
    },
    sectionTitleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      borderRadius: '2px',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '8px',
    },
    link: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
    },
    linkArrow: {
      fontSize: '0.9rem',
      opacity: 0,
      transform: 'translateX(-10px)',
      transition: 'all 0.3s ease',
    },
    serviceItem: {
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
    },
    serviceTitle: {
      color: '#ffffff',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '4px',
    },
    serviceDesc: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '0.9rem',
    },

    // Contact Section
    contactSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      padding: '16px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
    },
    contactIcon: {
      fontSize: '1.5rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      flexShrink: 0,
    },
    contactContent: {
      flex: 1,
    },
    contactLabel: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '0.9rem',
      marginBottom: '4px',
    },
    contactValue: {
      color: '#ffffff',
      fontSize: '1.1rem',
      fontWeight: '500',
      margin: 0,
    },
    contactLink: {
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },

    // Bottom Bar
    bottomBar: {
      paddingTop: '40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    bottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '24px',
    },
    copyright: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '1rem',
      margin: 0,
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      color: '#ffffff',
      padding: '12px 32px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    buttonArrow: {
      fontSize: '1.2rem',
      transition: 'transform 0.3s ease',
    },

    // Decorative Elements
    decoration: {
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
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      animationDelay: '0s',
    },
    floatingCircle2: {
      position: 'absolute',
      bottom: '10%',
      left: '5%',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
      borderRadius: '50%',
      animationDelay: '2s',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* About Section */}
          <div style={{ ...styles.aboutSection, ...styles.fadeIn }}>
            <div style={styles.logoContainer} className="footer-logo">
              <span style={styles.logoText}>Edra</span>
              <span style={styles.logoHighlight}>Host</span>
            </div>
            <p style={styles.aboutText}>
              Jasa pembuatan website profesional yang fokus pada hasil dan pengalaman pengguna. 
              Tingkatkan kepercayaan dan minat terhadap bisnis Anda dengan solusi digital terbaik.
            </p>
            <div style={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  className="social-link"
                >
                  <span style={styles.socialIcon}>{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div style={{ ...styles.linksSection, ...styles.fadeIn }}>
            <h3 style={styles.sectionTitle}>
              Menu Utama
              <div style={styles.sectionTitleUnderline}></div>
            </h3>
            <ul style={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <Link 
                    to={link.path} 
                    style={styles.link}
                    className="footer-nav-link"
                  >
                    <span style={styles.linkArrow}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div style={{ ...styles.linksSection, ...styles.fadeIn }}>
            <h3 style={styles.sectionTitle}>
              Layanan Unggulan
              <div style={styles.sectionTitleUnderline}></div>
            </h3>
            <div style={styles.linkList}>
              {serviceLinks.map((service, index) => (
                <div 
                  key={index} 
                  style={styles.serviceItem}
                  className="service-item"
                >
                  <div style={styles.serviceTitle}>{service.label}</div>
                  <div style={styles.serviceDesc}>{service.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div style={{ ...styles.contactSection, ...styles.fadeIn }}>
            <h3 style={styles.sectionTitle}>
              Kontak Kami
              <div style={styles.sectionTitleUnderline}></div>
            </h3>
            <div style={styles.contactList}>
              <div style={styles.contactItem} className="contact-card">
                <span style={styles.contactIcon}>📧</span>
                <div style={styles.contactContent}>
                  <div style={styles.contactLabel}>Email</div>
                  <a 
                    href="mailto:fuitbloop@gmail.com" 
                    style={styles.contactLink}
                  >
                    <p style={styles.contactValue}>fuitbloop@gmail.com</p>
                  </a>
                </div>
              </div>
              <div style={styles.contactItem} className="contact-card">
                <span style={styles.contactIcon}>📞</span>
                <div style={styles.contactContent}>
                  <div style={styles.contactLabel}>Telepon / WhatsApp</div>
                  <a 
                    href="https://wa.me/6285198674763" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactLink}
                  >
                    <p style={styles.contactValue}>+62 851-9867-4763</p>
                  </a>
                </div>
              </div>
              <div style={styles.contactItem} className="contact-card">
                <span style={styles.contactIcon}>📍</span>
                <div style={styles.contactContent}>
                  <div style={styles.contactLabel}>Alamat</div>
                  <p style={styles.contactValue}>Jl. Taman Asri 2, Kota Sukabumi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>
              © {currentYear} EdraHost. All rights reserved.
            </p>
            <a 
              href="https://wa.me/6285198674763" 
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaButton}
              className="footer-cta-button"
            >
              Mulai Proyek Anda
              <span style={styles.buttonArrow} className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div style={styles.decoration}>
        <div style={styles.floatingCircle1} className="floating" />
        <div style={styles.floatingCircle2} className="floating" />
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .floating {
          animation: float 10s ease-in-out infinite;
        }
        
        /* Hover Effects */
        .footer-logo:hover {
          transform: scale(1.05);
        }
        
        .footer-logo:hover .logo-text {
          color: #2563eb !important;
        }
        
        .social-link:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(37, 99, 235, 0.3) !important;
          transform: translateY(-3px) !important;
          color: #2563eb !important;
        }
        
        .footer-nav-link:hover {
          color: #2563eb !important;
          padding-left: 12px !important;
        }
        
        .footer-nav-link:hover .link-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        .service-item:hover {
          background: rgba(37, 99, 235, 0.1) !important;
          border-color: rgba(37, 99, 235, 0.2) !important;
          transform: translateY(-3px) !important;
        }
        
        .contact-card:hover {
          background: rgba(37, 99, 235, 0.1) !important;
          border-color: rgba(37, 99, 235, 0.2) !important;
          transform: translateY(-3px) !important;
        }
        
        .contact-link:hover {
          color: #2563eb !important;
        }
        
        .footer-cta-button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.4) !important;
          background: transparent !important;
          border-color: #2563eb !important;
          color: #2563eb !important;
        }
        
        .footer-cta-button:hover .button-arrow {
          transform: translateX(6px) !important;
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .container {
            padding: 60px 20px 30px !important;
          }
          
          .main-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .bottom-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px !important;
          }
          
          .footer-cta-button {
            width: 100% !important;
            justify-content: center !important;
          }
          
          .social-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
          }
          
          .section-title {
            font-size: 1.3rem !important;
          }
          
          .about-text {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .main-content {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .container {
            padding: 70px 32px 35px !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 50px 16px 25px !important;
          }
          
          .footer {
            padding: 40px 0 20px !important;
          }
          
          .logo-text, .logo-highlight {
            font-size: 1.6rem !important;
          }
          
          .social-grid {
            grid-template-columns: 1fr !important;
          }
          
          .social-link {
            justify-content: center !important;
          }
          
          .service-item {
            padding: 10px 14px !important;
          }
          
          .contact-item {
            padding: 14px !important;
          }
          
          .footer-cta-button {
            padding: 14px 24px !important;
            font-size: 0.95rem !important;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;