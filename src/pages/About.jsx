import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data yang lebih realistis dan profesional
  const achievements = [
    { number: '5+', label: 'Tahun Pengalaman', icon: '⏳' },
    { number: '200+', label: 'Proyek Berhasil', icon: '✅' },
    { number: '98%', label: 'Kepuasan Klien', icon: '⭐' },
    { number: '50+', label: 'Partner Bisnis', icon: '🤝' },
  ];

  const expertise = [
    {
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'Next.js', 'Vue.js'],
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      icon: '🎨'
    },
    {
      title: 'Digital Solutions',
      skills: ['E-commerce', 'Web Apps', 'SEO', 'Performance'],
      icon: '🚀'
    },
    {
      title: 'Support & Maintenance',
      skills: ['Hosting', 'Security', 'Updates', 'Backup'],
      icon: '🔧'
    },
  ];

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

  return (
    <div style={styles.container}>
      {/* Hero Header */}
      <section style={styles.hero}>
        <div style={styles.containerInner}>
          <div style={{
            ...styles.heroContent,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h1 style={styles.heroTitle}>
              Tentang <span style={styles.heroHighlight}>EdraHost</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Partner digital terpercaya dalam transformasi online bisnis Anda.
              Dengan pendekatan berbasis solusi, kami menghadirkan website yang 
              tidak hanya indah, tetapi juga menghasilkan.
            </p>
            <div style={styles.heroButtons}>
              <Link to="/kontak" style={styles.primaryButton}>
                Konsultasi Gratis
              </Link>
              <Link to="/portofolio" style={styles.secondaryButton}>
                Lihat Hasil Kerja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Singkat dan Powerful */}
      <section style={styles.storySection}>
        <div style={styles.containerInner}>
          <div style={styles.storyGrid}>
            <div style={{
              ...styles.storyContent,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              <h2 style={styles.sectionTitle}>Cerita Singkat Creator</h2>
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
            <div style={{
              ...styles.storyVisual,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              <div style={styles.visualCard}>
                <div style={styles.visualIcon}>🎯</div>
                <h3 style={styles.visualTitle}>Fokus Kami</h3>
                <ul style={styles.visualList}>
                  <li>Website yang menghasilkan konversi</li>
                  <li>User experience yang memukau</li>
                  <li>Performansi optimal di semua device</li>
                  <li>Keamanan dan skalabilitas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section style={styles.processSection}>
        <div style={styles.containerInner}>
          <h2 style={styles.sectionTitleCenter}>Proses Kerja Kami</h2>
          <p style={styles.sectionSubtitle}>
            Langkah sistematis untuk hasil terbaik
          </p>
          
          <div style={styles.processTimeline}>
            {process.map((step, index) => (
              <div 
                key={index}
                style={{
                  ...styles.processStep,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div style={styles.processNumber}>{step.step}</div>
                <div style={styles.processContent}>
                  <h4 style={styles.processTitle}>{step.title}</h4>
                  <p style={styles.processDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={styles.valuesSection}>
        <div style={styles.containerInner}>
          <h2 style={styles.sectionTitleCenter}>Nilai-Nilai Creator</h2>
          <p style={styles.sectionSubtitle}>
            Prinsip yang memandu setiap proyek
          </p>
          
          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.valueCard,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.containerInner}>
          <div style={styles.ctaCard}>
            <h2 style={styles.ctaTitle}>Siap Berkolaborasi?</h2>
            <p style={styles.ctaText}>
              Mari bicara tentang bagaimana kami dapat membantu mewujudkan 
              visi digital bisnis Anda.
            </p>
            <div style={styles.ctaButtons}>
              <Link to="/kontak" style={styles.ctaPrimaryButton}>
                Mulai Proyek Anda
              </Link>
              <Link to="/layanan" style={styles.ctaSecondaryButton}>
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx>{`
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
        
        .fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
          
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .achievements-grid,
          .expertise-grid,
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          .process-timeline {
            flex-direction: column !important;
            gap: 30px !important;
          }
          
          .process-step {
            flex-direction: row !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          
          .process-number {
            margin-right: 20px !important;
            margin-bottom: 0 !important;
          }
          
          .hero-buttons,
          .cta-buttons {
            flex-direction: column;
            gap: 12px !important;
          }
          
          .primary-button,
          .secondary-button,
          .cta-primary-button,
          .cta-secondary-button {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .achievements-grid,
          .expertise-grid,
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          
          .hero {
            padding: 100px 0 60px !important;
          }
          
          .section-title {
            font-size: 1.8rem !important;
          }
          
          .section-subtitle {
            font-size: 1rem !important;
          }
        }
        
        /* Hover Effects */
        .achievement-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 30px rgba(74, 144, 226, 0.15) !important;
        }
        
        .expertise-card:hover {
          transform: translateY(-5px) !important;
          border-color: #4A90E2 !important;
        }
        
        .value-card:hover {
          transform: translateY(-5px) !important;
          background-color: rgba(74, 144, 226, 0.05) !important;
        }
        
        .process-step:hover .process-number {
          transform: scale(1.1);
          background-color: #4A90E2;
          color: #ffffff;
        }
        
        .primary-button:hover,
        .cta-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
        }
        
        .secondary-button:hover,
        .cta-secondary-button:hover {
          transform: translateY(-3px);
          border-color: #4A90E2;
          color: #4A90E2;
        }
      `}</style>
    </div>
  );
};

const styles = {
  // Layout
  container: {
    backgroundColor: '#ffffff',
  },
  containerInner: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },

  // Hero Section
  hero: {
    padding: '140px 0 80px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
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
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.2)',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Story Section
  storySection: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  storyContent: {
    paddingRight: '40px',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  sectionTitleCenter: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: '50px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 50px',
  },
  storyText: {
    fontSize: '1.05rem',
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  quote: {
    backgroundColor: 'rgba(74, 144, 226, 0.05)',
    padding: '25px',
    borderRadius: '12px',
    borderLeft: '4px solid #4A90E2',
    marginTop: '30px',
  },
  quoteMark: {
    fontSize: '3rem',
    color: '#4A90E2',
    lineHeight: '1',
    marginBottom: '-10px',
    display: 'block',
  },
  quoteText: {
    fontSize: '1.1rem',
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
    backgroundColor: '#f8f9fa',
    padding: '40px 30px',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    maxWidth: '400px',
    width: '100%',
  },
  visualIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  visualTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  visualList: {
    listStyle: 'none',
    padding: 0,
  },

  // Achievements
  achievementsSection: {
    padding: '80px 0',
    backgroundColor: '#f8f9fa',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '25px',
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    padding: '35px 25px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  achievementIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  achievementNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#4A90E2',
    marginBottom: '8px',
    lineHeight: '1',
  },
  achievementLabel: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '500',
  },

  // Expertise
  expertiseSection: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  expertiseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  expertiseCard: {
    backgroundColor: '#ffffff',
    padding: '35px 30px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
  },
  expertiseIcon: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  expertiseTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '10px',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
  },
  skillDot: {
    color: '#4A90E2',
    marginRight: '10px',
    fontWeight: 'bold',
  },

  // Process
  processSection: {
    padding: '80px 0',
    backgroundColor: '#f8f9fa',
  },
  processTimeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  processStep: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  processNumber: {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    color: '#4A90E2',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  processContent: {
    flex: 1,
  },
  processTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  processDesc: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '1.6',
    margin: 0,
  },

  // Values
  valuesSection: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  valueCard: {
    backgroundColor: '#ffffff',
    padding: '35px 30px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  valueIcon: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  valueTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '15px',
  },
  valueDesc: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '1.6',
    margin: 0,
  },

  // CTA
  ctaSection: {
    padding: '80px 0',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  ctaCard: {
    backgroundColor: '#262626',
    padding: '60px 40px',
    borderRadius: '16px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '20px',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  ctaPrimaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(74, 144, 226, 0.3)',
  },
  ctaSecondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default About;