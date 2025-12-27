import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/portofolio', label: 'Portofolio' },
    { path: '/tentang-kami', label: 'Tentang Creator' },
    { path: '/kontak', label: 'Kontak' },
  ];

  return (
    <>
      <nav 
        style={{
          ...styles.navbar,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: lastScrollY > 50 ? 'rgba(38, 38, 38, 0.95)' : 'rgba(38, 38, 38, 0.98)',
          backdropFilter: lastScrollY > 50 ? 'blur(10px)' : 'none',
          borderBottom: lastScrollY > 50 ? '1px solid rgba(255,255,255,0.1)' : 'none',
          boxShadow: lastScrollY > 50 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
          padding: lastScrollY > 50 ? '10px 0' : '12px 0',
        }}
      >
        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <NavLink to="/" style={styles.logo}>
              <span style={styles.logoText}>Edra</span>
              <span style={styles.logoHighlight}>Host</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div style={styles.desktopNav} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="nav-link"
                style={({ isActive }) => ({
                  ...styles.navLink,
                  ...(isActive && styles.navLinkActive)
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink 
              to="/kontak" 
              style={styles.navButton}
              className="nav-button"
            >
              Hubungi Creator
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button 
            style={styles.hamburger}
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? 'translateX(-20px)' : 'none'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
            }}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          ...styles.mobileMenu,
          maxHeight: isMenuOpen ? 'calc(100vh - 62px)' : '0',
          opacity: isMenuOpen ? 1 : 0,
        }}>
          <div style={styles.mobileMenuContent}>
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="mobile-link"
                style={({ isActive }) => ({
                  ...styles.mobileLink,
                  ...(isActive && styles.mobileLinkActive),
                  animationDelay: `${index * 0.08}s`
                })}
              >
                <span style={styles.linkIcon}>→</span>
                {link.label}
              </NavLink>
            ))}
            <NavLink 
              to="/kontak" 
              style={styles.mobileButton}
              className="mobile-button"
            >
              Hubungi Kami Sekarang
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div style={styles.overlay} onClick={toggleMenu}></div>}

      {/* Global Styles */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4A90E2, #5BA3F5);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        
        .nav-link:hover {
          color: #4A90E2 !important;
          background: rgba(74, 144, 226, 0.1) !important;
          transform: translateY(-2px);
        }
        
        .nav-link:hover::before {
          width: 70%;
        }
        
        .nav-button:hover {
          background: transparent !important;
          border: 2px solid #4A90E2 !important;
          color: #4A90E2 !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(74, 144, 226, 0.4) !important;
        }
        
        .mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          animation: slideInRight 0.4s ease-out forwards;
        }
        
        .mobile-link:hover {
          color: #4A90E2 !important;
          background: rgba(74, 144, 226, 0.1) !important;
          border-left-color: #4A90E2 !important;
          transform: translateX(8px) !important;
        }
        
        .mobile-button:hover {
          background: transparent !important;
          border: 2px solid #4A90E2;
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(74, 144, 226, 0.4) !important;
        }
        
        .logo:hover .logo-text {
          color: #4A90E2 !important;
        }
        
        .logo:hover {
          transform: scale(1.05);
        }
        
        .hamburger:hover span {
          background-color: #4A90E2 !important;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .hamburger {
            display: none !important;
          }
        }
        
        @media (max-width: 1024px) and (min-width: 769px) {
          .desktop-nav {
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
  },
  logoHighlight: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#4A90E2',
    letterSpacing: '1px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '8px 12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '6px',
  },
  navLinkActive: {
    color: '#4A90E2',
    background: 'rgba(74, 144, 226, 0.08)',
  },
  navButton: {
    background: 'linear-gradient(135deg, #4A90E2, #5BA3F5)',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '28px',
    height: '22px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 1001,
  },
  hamburgerLine: {
    width: '100%',
    height: '3px',
    backgroundColor: '#ffffff',
    borderRadius: '3px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  mobileMenu: {
    position: 'fixed',
    top: '62px',
    left: 0,
    right: 0,
    background: 'rgba(38, 38, 38, 0.98)',
    backdropFilter: 'blur(10px)',
    overflowY: 'auto',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  mobileMenuContent: {
    padding: '30px 25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mobileLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: '500',
    padding: '16px 20px',
    borderRadius: '10px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 0,
    background: 'rgba(255, 255, 255, 0.03)',
    borderLeft: '3px solid transparent',
  },
  mobileLinkActive: {
    color: '#4A90E2',
    background: 'rgba(74, 144, 226, 0.15)',
    borderLeftColor: '#4A90E2',
  },
  linkIcon: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
    opacity: 0,
  },
  mobileButton: {
    background: 'linear-gradient(135deg, #4A90E2, #5BA3F5)',
    color: '#ffffff',
    padding: '16px 24px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '15px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
    animationDelay: '0.4s',
    opacity: 0,
    animation: 'slideInRight 0.4s ease-out forwards',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease',
    backdropFilter: 'blur(2px)',
  },
};

export default Navbar;