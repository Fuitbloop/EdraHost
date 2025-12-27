import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setIsLoading(true);
    // Buka portfolio di tab baru
    window.open('https://edrahost-psi-silk.vercel.app/', '_blank');
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Portofolio</h1>
          <p style={styles.subtitle}>
            Lihat koleksi lengkap proyek dan layanan
          </p>
        </div>

        {/* Redirect Card */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>
            <span style={styles.icon}>🚀</span>
          </div>
          
          <h2 style={styles.cardTitle}>
            Portofolio Lengkap Tersedia di Website Creator
          </h2>
          
          <p style={styles.cardDescription}>
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
              >
                https://edrahost-psi-silk.vercel.app/
              </a>
            </div>
            
            <div style={styles.featuresList}>
              <div style={styles.feature}>
                <span style={styles.checkIcon}>✓</span>
                <span>Proyek Terbaru</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.checkIcon}>✓</span>
                <span>Studi Kasus Detail</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.checkIcon}>✓</span>
                <span>Teknologi yang Digunakan</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={styles.buttonGroup}>
            <button 
              style={styles.primaryButton}
              onClick={handleRedirect}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span style={styles.spinner}></span>
                  Membuka...
                </>
              ) : (
                <>
                  Buka Portofolio Sekarang
                  <span style={styles.buttonArrow}>↗</span>
                </>
              )}
            </button>
            
            <button 
              style={styles.secondaryButton}
              onClick={handleBack}
            >
              Kembali
            </button>
          </div>

          
        </div>

        {/* Preview Section */}
        <div style={styles.previewSection}>
          <h3 style={styles.previewTitle}>Apa yang Akan Anda Temukan?</h3>
          <div style={styles.previewGrid}>
            <div style={styles.previewItem}>
              <div style={styles.previewIcon}>🎨</div>
              <h4>Desain Modern</h4>
              <p>Koleksi desain website terkini dan inovatif</p>
            </div>
            <div style={styles.previewItem}>
              <div style={styles.previewIcon}>⚡</div>
              <h4>Performa Optimal</h4>
              <p>Website dengan kecepatan dan optimasi terbaik</p>
            </div>
            <div style={styles.previewItem}>
              <div style={styles.previewIcon}>📱</div>
              <h4>Responsif</h4>
              <p>Proyek yang bekerja sempurna di semua device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 70px)',
    backgroundColor: '#f8f9fa',
    padding: '140px 0 80px',
  },
  content: {
    width: '90%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    marginBottom: '50px',
  },
  cardIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 30px',
  },
  icon: {
    fontSize: '2.5rem',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '20px',
    lineHeight: '1.3',
  },
  cardDescription: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  websiteInfo: {
    backgroundColor: 'rgba(74, 144, 226, 0.05)',
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '30px',
    border: '1px solid rgba(74, 144, 226, 0.1)',
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
    color: '#4A90E2',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    wordBreak: 'break-all',
    transition: 'all 0.3s ease',
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginTop: '20px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.95rem',
  },
  checkIcon: {
    color: '#4A90E2',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#1a1a1a',
    padding: '16px 32px',
    borderRadius: '8px',
    border: '2px solid rgba(0, 0, 0, 0.2)',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
    animation: 'spin 1s ease-in-out infinite',
    marginRight: '8px',
  },
  note: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 193, 7, 0.2)',
    textAlign: 'left',
  },
  noteTitle: {
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '5px',
    fontSize: '0.95rem',
  },
  noteText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    margin: 0,
  },
  previewSection: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  previewTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '30px',
  },
  previewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '25px',
  },
  previewItem: {
    textAlign: 'center',
    padding: '25px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  },
  previewIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
};

// Add CSS animations and hover effects
const cssStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .primary-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
  }
  
  .primary-button:hover .button-arrow {
    transform: translate(3px, -3px);
  }
  
  .secondary-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: #4A90E2;
    color: #4A90E2;
  }
  
  .url-link:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
  
  .preview-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .preview-item:hover .preview-icon {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .card {
      padding: 30px 20px !important;
    }
    
    .button-group {
      flex-direction: column;
      gap: 12px !important;
    }
    
    .primary-button, .secondary-button {
      width: 100% !important;
    }
    
    .preview-grid {
      grid-template-columns: 1fr !important;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 1.8rem !important;
    }
    
    .card-title {
      font-size: 1.4rem !important;
    }
  }
`;

// Apply styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = cssStyles;
  document.head.appendChild(styleSheet);
}

export default Portfolio;