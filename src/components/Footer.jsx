import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={styles.logoText}>Edra</span>
              <span style={styles.logoHighlight}>Host</span>
            </div>
            <p style={styles.footerDescription}>
              jasa pembuatan website profesional, Tingkatkan
              kepercayaan dan minat terhadap bisnis anda.
            </p>
            
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Menu</h4>
            <div style={styles.footerLinks}>
              <Link to="/" style={styles.footerLink}>Beranda</Link>
              <Link to="/layanan" style={styles.footerLink}>Layanan</Link>
              <Link to="/portofolio" style={styles.footerLink}>Portofolio</Link>
              <Link to="/tentang-kami" style={styles.footerLink}>Tentang Kami</Link>
              <Link to="/kontak" style={styles.footerLink}>Kontak</Link>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Kontak</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <span>fuitbloop@gmail.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <span>+62 851-9867-4763</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span>Jl. Taman Asri 2, Kota Sukabumi</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <div style={styles.divider} />
          <p style={styles.copyright}>
            © {currentYear} EdraHost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#262626',
    color: '#ffffff',
    padding: '80px 0 30px',
    marginTop: 'auto',
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '50px',
    marginBottom: '50px',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '1px',
  },
  logoHighlight: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#4A90E2',
    letterSpacing: '1px',
  },
  footerDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.7',
    fontSize: '0.95rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  socialLink: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '6px 12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  footerHeading: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '15px',
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footerLink: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.95rem',
  },
  contactIcon: {
    fontSize: '1.1rem',
  },
  footerBottom: {
    paddingTop: '30px',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '25px',
  },
  copyright: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
};

// Inject hover styles
const footerHoverStyles = `
  .social-link:hover {
    color: #4A90E2 !important;
    border-color: #4A90E2;
    transform: translateY(-2px);
  }
  
  .footer-link:hover {
    color: #4A90E2 !important;
    padding-left: 5px;
  }
`;

const footerStyleSheet = document.createElement('style');
footerStyleSheet.textContent = footerHoverStyles;
document.head.appendChild(footerStyleSheet);

export default Footer;