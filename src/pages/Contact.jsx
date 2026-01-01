import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // WhatsApp Integration
    const whatsappMessage = `
Halo Edra, saya ${formData.name}!

*Subjek:* ${formData.subject}
*Email:* ${formData.email}
*Telepon:* ${formData.phone}

*Pesan:*
${formData.message}

---
*Pesan ini dikirim melalui website EdraHost.*
    `.trim();
    
    // WhatsApp number (085198674763)
    const phoneNumber = '6285198674763';
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Show confirmation
    const userConfirmed = window.confirm(
      `Anda akan diarahkan ke WhatsApp untuk mengirim pesan:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nKlik OK untuk melanjutkan ke WhatsApp.`
    );
    
    if (userConfirmed) {
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setIsSubmitting(false);
    }
  };

  // Data yang dipertahankan (TIDAK DIUBAH)
  const contactInfo = [
    { 
      icon: '📍', 
      title: 'Alamat', 
      info: 'Jl. Taman Asri 2, Kota Sukabumi' 
    },
    { 
      icon: '📞', 
      title: 'Telepon', 
      info: '+62 851-9867-4763',
      link: 'https://wa.me/6285198674763'
    },
    { 
      icon: '✉️', 
      title: 'Email', 
      info: 'fuitbloop@gmail.com',
      link: 'mailto:fuitbloop@gmail.com'
    },
    { 
      icon: '🕒', 
      title: 'Jam Operasional', 
      info: 'Senin - Sabtu: 09:00 - 14:00' 
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan website?',
      answer: 'Website sederhana selesai dalam 1-3 hari(tergantung skala website).'
    },
    {
      question: 'Apakah ada biaya maintenance?',
      answer: 'Kami menawarkan paket maintenance bulanan yang lengkap.'
    },
    {
      question: 'Bisakah saya request revisi desain?',
      answer: 'Ya, kami memberikan 1-3x revisi desain untuk memastikan hasil sesuai.'
    },
    {
      question: 'Apakah website akan responsif di mobile?',
      answer: 'Semua website kami fully responsive dan dioptimalkan untuk semua perangkat.'
    },
  ];

  // Background image untuk hero section
  const heroBackgroundImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  const styles = {
    // Container - PERBAIKAN: Tambah box-sizing dan overflow
    container: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 2,
    },

    // Hero Section - TANPA TOMBOL (KONSISTEN)
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

    // Contact Form Section
    contactSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
    // PERBAIKAN: Hapus minWidth yang fixed
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', // PERBAIKAN: gunakan min()
      gap: '60px',
      alignItems: 'start',
    },
    contactForm: {
      paddingRight: '40px',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '40px',
      letterSpacing: '-0.02em',
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(10px)',
      width: '100%', // PERBAIKAN: tambah width 100%
      boxSizing: 'border-box', // PERBAIKAN: tambah box-sizing
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%', // PERBAIKAN: tambah width 100%
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      width: '100%', // PERBAIKAN: tambah width 100%
    },
    formGroup: {
      width: '100%',
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      boxSizing: 'border-box', // PERBAIKAN: tambah box-sizing
    },
    textarea: {
      width: '100%',
      padding: '16px 20px',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box', // PERBAIKAN: tambah box-sizing
    },
    submitButton: {
      backgroundColor: '#25D366',
      color: '#ffffff',
      padding: '18px 40px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
      width: '100%', // PERBAIKAN: tombol full width
      boxSizing: 'border-box',
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '25px',
      border: '1px solid #c3e6cb',
      fontSize: '0.95rem',
      textAlign: 'center',
      width: '100%', // PERBAIKAN: tambah width 100%
      boxSizing: 'border-box',
    },

    // Contact Info Section
    contactInfoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '100%', // PERBAIKAN: tambah width 100%
    },
    infoCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(10px)',
      width: '100%', // PERBAIKAN: tambah width 100%
      boxSizing: 'border-box',
    },
    infoTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '30px',
    },
    // PERBAIKAN: Hapus minWidth yang fixed
    contactInfoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', // PERBAIKAN: gunakan min()
      gap: '30px',
      marginBottom: '30px',
      width: '100%',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px',
      background: '#f8fafc',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      width: '100%', // PERBAIKAN: tambah width 100%
      boxSizing: 'border-box',
    },
    contactIcon: {
      fontSize: '2rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      flexShrink: 0,
    },
    contactDetails: {
      flex: 1,
    },
    contactItemTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '8px',
    },
    contactText: {
      fontSize: '1rem',
      color: 'rgba(0, 0, 0, 0.6)',
      lineHeight: '1.5',
      margin: 0,
    },
    contactLink: {
      fontSize: '1rem',
      color: '#2563eb',
      lineHeight: '1.5',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'block',
      wordBreak: 'break-word', // PERBAIKAN: handle long text
    },
    mapContainer: {
      marginTop: '30px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(226, 232, 240, 1)',
      width: '100%', // PERBAIKAN: tambah width 100%
    },

    // FAQ Section
    faqSection: {
      padding: '120px 0',
      background: '#ffffff',
    },
    faqHeader: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    sectionTitleCenter: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '24px',
      letterSpacing: '-0.02em',
      textAlign: 'center',
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(0, 0, 0, 0.6)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    // PERBAIKAN: Hapus minWidth yang fixed
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', // PERBAIKAN: gunakan min()
      gap: '32px',
    },
    faqCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px 32px',
      borderRadius: '20px',
      border: '1px solid rgba(226, 232, 240, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      textAlign: 'left',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      width: '100%', // PERBAIKAN: tambah width 100%
      boxSizing: 'border-box',
    },
    faqIcon: {
      fontSize: '2rem',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    faqQuestion: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '16px',
    },
    faqAnswer: {
      fontSize: '1.1rem',
      color: 'rgba(0, 0, 0, 0.7)',
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
      width: '100%', // PERBAIKAN: tambah width 100%
      padding: '0 20px', // PERBAIKAN: tambah padding
      boxSizing: 'border-box',
    },
    ctaTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
    },
    ctaText: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.6',
      marginBottom: '48px',
    },
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      width: '100%', // PERBAIKAN: tambah width 100%
    },
    ctaPrimaryButton: {
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
      textAlign: 'center',
      width: '100%', // PERBAIKAN: tombol full width di mobile
      boxSizing: 'border-box',
      justifyContent: 'center',
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

  // Google Maps embed URL for the address
  const googleMapsUrl = "https://www.google.com/maps?q=3WQW%2B7VG%20Jl.%20Taman%20Asri%20Raya%20Subangjaya%2C%20Kec.%20Cikole%2C%20Kota%20Sukabumi%2C%20Jawa%20Barat%2043116&output=embed";

  return (
    <>
      {/* Hero Section - TANPA TOMBOL (KONSISTEN) */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Hubungi <span style={styles.heroHighlight}>Creator</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Mari diskusikan kebutuhan website Anda bersama creator yang fokus menghadirkan website modern, efektif, dan sesuai kebutuhan Anda,
               baik untuk personal maupun bisnis.
            </p>
            {/* TOMBOL DIHAPUS untuk konsistensi dengan halaman lain */}
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div style={styles.heroDecoration}>
          <div style={styles.floatingCircle1} className="floating" />
          <div style={styles.floatingCircle2} className="floating" />
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            {/* Form Column */}
            <div style={styles.contactForm} className="fade-in">
              <h2 style={styles.sectionTitle}>Kirim Pesan via WhatsApp</h2>
              <div style={styles.formCard} className="fade-up">
                {submitStatus === 'success' && (
                  <div style={styles.successMessage}>
                    ✅ Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim pesan.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />
                  </div>
                  
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                      />
                    </div>
                    
                    <div style={styles.formGroup}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="No. Telepon *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                      />
                    </div>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subjek *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <textarea
                      name="message"
                      placeholder="Pesan Anda *"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={styles.textarea}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    style={{
                      ...styles.submitButton,
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : (
                      <>
                        📱 Kirim via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div style={styles.contactInfoSection}>
              <div style={styles.infoCard} className="fade-up">
                <h2 style={styles.infoTitle}>Informasi Kontak</h2>
                
                <div style={styles.contactInfoGrid}>
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      style={styles.contactItem}
                      onMouseEnter={() => setHoveredCard(`contact-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      data-index={index}
                    >
                      <div style={styles.contactIcon}>{item.icon}</div>
                      <div style={styles.contactDetails}>
                        <h4 style={styles.contactItemTitle}>{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.contactLink}
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p style={styles.contactText}>{item.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={styles.mapContainer}>
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Lokasi Kantor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <div style={styles.faqHeader} className="fade-in">
            <h2 style={styles.sectionTitleCenter}>Pertanyaan yang Sering Diajukan</h2>
            <p style={styles.sectionSubtitle}>
              Temukan jawaban untuk pertanyaan umum seputar layanan kami
            </p>
          </div>
          
          <div style={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="fade-up faq-card"
                style={styles.faqCard}
                onMouseEnter={() => setHoveredCard(`faq-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                data-index={index}
              >
                <div style={styles.faqIcon}>❓</div>
                <h3 style={styles.faqQuestion}>{faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaContent} className="fade-in">
            <h2 style={styles.ctaTitle}>Mari Berdiskusi!</h2>
            <p style={styles.ctaText}>
              Jangan ragu untuk menghubungi kami. Konsultasi awal seputar 
              kebutuhan website Anda selalu gratis dan tanpa komitmen.
            </p>
            <div style={styles.ctaButtons}>
              <a 
                href="https://wa.me/6285198674763" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.ctaPrimaryButton}
                className="cta-button"
              >
                Chat Langsung di WhatsApp
                <span style={styles.buttonArrow} className="button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx>{`
        /* PERBAIKAN: Tambah reset dasar untuk mobile */
        * {
          box-sizing: border-box;
          max-width: 100%;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        
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
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #2563eb !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
        }
        
        button[type="submit"]:hover {
          background-color: #128C7E !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3) !important;
        }
        
        button[type="submit"]:disabled:hover {
          transform: none !important;
          box-shadow: none !important;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }
        
        .cta-button:hover .button-arrow {
          transform: translateX(6px);
        }
        
        .faq-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border-color: rgba(37, 99, 235, 0.2);
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: rgba(37, 99, 235, 0.2);
        }
        
        .contact-link:hover {
          color: #1d4ed8 !important;
          text-decoration: underline;
        }
        
        /* Responsive Breakpoints - PERBAIKAN: Lebih spesifik */
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
            padding: 0 16px !important;
          }
          
          /* PERBAIKAN: Grid menjadi 1 kolom dengan width 100% */
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            width: 100% !important;
          }
          
          .contact-form {
            padding-right: 0 !important;
            width: 100% !important;
          }
          
          .faq-grid,
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            width: 100% !important;
          }
          
          .section-title, .section-title-center, .cta-title {
            font-size: 2.2rem !important;
            padding: 0 16px !important;
            word-wrap: break-word;
          }
          
          .contact-section, .faq-section, .cta-section {
            padding: 80px 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 16px !important;
            width: 100% !important;
            padding: 0 16px !important;
          }
          
          .cta-button {
            width: 100% !important;
            justify-content: center;
            padding: 18px 32px !important;
          }
          
          /* PERBAIKAN: Form row menjadi 1 kolom */
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            width: 100% !important;
          }
          
          .form-card, .info-card {
            padding: 30px 24px !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
          
          /* PERBAIKAN: Kontainer map */
          .mapContainer {
            width: 100% !important;
            overflow: hidden !important;
          }
          
          /* PERBAIKAN: Padding untuk mobile */
          .container {
            padding: 0 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            width: 100% !important;
          }
          
          .faq-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
            width: 100% !important;
          }
          
          .hero-title {
            font-size: 3.2rem !important;
          }
          
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            width: 100% !important;
          }
          
          .container {
            padding: 0 32px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 120px 0 40px !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 16px !important;
            padding: 0 8px !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 30px !important;
            padding: 0 8px !important;
          }
          
          .contact-section, .faq-section, .cta-section {
            padding: 60px 0 !important;
          }
          
          .section-title, .section-title-center, .cta-title {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
            padding: 0 8px !important;
          }
          
          .section-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
            padding: 0 8px !important;
          }
          
          .faq-card {
            padding: 30px 24px !important;
            width: 100% !important;
          }
          
          .faq-question {
            font-size: 1.2rem !important;
          }
          
          .faq-icon {
            font-size: 1.8rem !important;
            margin-bottom: 20px !important;
          }
          
          .contact-item {
            padding: 16px !important;
            width: 100% !important;
          }
          
          .contact-icon {
            font-size: 1.5rem !important;
          }
          
          /* PERBAIKAN: Pastikan semua elemen tidak melebihi layar */
          input, textarea, button, a {
            max-width: 100% !important;
          }
          
          .container {
            padding: 0 12px !important;
          }
        }
        
        /* PERBAIKAN: Untuk layar sangat kecil */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.8rem !important;
          }
          
          .section-title, .section-title-center, .cta-title {
            font-size: 1.6rem !important;
          }
          
          .form-card, .info-card {
            padding: 20px 16px !important;
          }
          
          .contact-item {
            padding: 12px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;