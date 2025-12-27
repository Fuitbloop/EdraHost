import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Layanan Kami</h1>
        <p style={styles.subtitle}>
          Solusi lengkap pembuatan website untuk berbagai kebutuhan bisnis
        </p>
      </div>

      {/* Services Grid */}
      <div style={styles.servicesGrid}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              ...styles.serviceCard,
              transform: hoveredCard === service.id ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardHeader}>
              <div style={styles.iconContainer}>
                <span style={styles.icon}>{service.icon}</span>
              </div>
              <div style={styles.cardTitleContainer}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <div style={styles.priceTag}>{service.price}</div>
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
            <button 
              style={styles.orderButton}
              onClick={() => window.location.href = '/kontak'}
            >
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div style={styles.processSection}>
        <h2 style={styles.processTitle}>Proses Pengerjaan</h2>
        <p style={styles.processSubtitle}>
          Langkah-langkah sistematis untuk hasil terbaik
        </p>
        
        <div style={styles.processSteps}>
          {processSteps.map((step, index) => (
            <div key={index} style={styles.processStep}>
              <div style={styles.stepNumber}>{step.number}</div>
              <div style={styles.stepContent}>
                <h4 style={styles.stepTitle}>{step.title}</h4>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div style={styles.stepConnector} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .service-card {
          animation: fadeIn 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
        }
        
        .process-step {
          animation: fadeIn 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '140px 0 100px',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  servicesGrid: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto 80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '35px 30px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '20px',
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  icon: {
    fontSize: '2rem',
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  priceTag: {
    display: 'inline-block',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  cardDescription: {
    color: 'rgba(0, 0, 0, 0.6)',
    lineHeight: '1.6',
    marginBottom: '25px',
    flex: 1,
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '30px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '10px',
    fontSize: '0.95rem',
  },
  checkIcon: {
    color: '#4A90E2',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  orderButton: {
    backgroundColor: 'transparent',
    color: '#4A90E2',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid #4A90E2',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    marginTop: 'auto',
  },
  processSection: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  processTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '12px',
  },
  processSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginBottom: '50px',
  },
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
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
    width: '60px',
    height: '60px',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  stepDesc: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  stepConnector: {
    position: 'absolute',
    top: '30px',
    right: '-15px',
    width: '30px',
    height: '2px',
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
};

// Add hover styles
const servicesHoverStyles = `
  .service-card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .service-card:hover .icon-container {
    transform: rotate(10deg) scale(1.1);
    transition: all 0.3s ease;
  }
  
  .order-button:hover {
    background-color: #4A90E2;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 144, 226, 0.3);
  }
`;

const servicesStyleSheet = document.createElement('style');
servicesStyleSheet.textContent = servicesHoverStyles;
document.head.appendChild(servicesStyleSheet);

export default Services;