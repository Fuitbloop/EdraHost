import { useState, useEffect } from 'react';

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

  useEffect(() => {
    setIsVisible(true);
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
    // Format: 62 (country code) + 85198674763 (without leading 0)
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

  // Google Maps embed URL for the address
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.92553646404!2d106.82253641544395!3d-6.870999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848d9f8b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sJl.%20Taman%20Asri%202%2C%20Jl.%20Ciaul%20Pasir%20No.8%20blok%20A7%2C%20Kec.%20Cikole%2C%20Kota%20Sukabumi%2C%20Jawa%20Barat%2043116!5e0!3m2!1sen!2sid!4v1234567890";

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Hubungi Creator</h1>
        <p style={styles.subtitle}>
          siap membantu mewujudkan website impian Anda
        </p>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        {/* Form Column */}
        <div style={{
          ...styles.formColumn,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <div style={styles.formCard}>
            <h2 style={styles.formTitle}>Kirim Pesan via WhatsApp</h2>
            
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
                  backgroundColor: isSubmitting ? '#357ABD' : '#25D366'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : '📱 Kirim via WhatsApp'}
              </button>
            </form>
          </div>
        </div>

        {/* Info Column */}
        <div style={{
          ...styles.infoColumn,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          <div style={styles.infoCard}>
            <h2 style={styles.infoTitle}>Informasi Kontak</h2>
            
            <div style={styles.contactInfo}>
              {contactInfo.map((item, index) => (
                <div key={index} style={styles.contactItem}>
                  <div style={styles.contactIcon}>{item.icon}</div>
                  <div style={styles.contactDetails}>
                    <h4 style={styles.contactTitle}>{item.title}</h4>
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

            <div style={styles.mapSection}>
              <h4 style={styles.mapTitle}>📍 Lokasi Kantor</h4>
              <div style={styles.mapContainer}>
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Lokasi Kantor"
                />
                <p style={styles.mapText}>
                  Jl. Taman Asri 2, Kota Sukabumi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Pertanyaan yang Sering Diajukan</h2>
        <div style={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                ...styles.faqItem,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`
              }}
            >
              <h4 style={styles.faqQuestion}>{faq.question}</h4>
              <p style={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '140px 0 100px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
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
  contactSection: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto 80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '50px',
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  formCard: {
    backgroundColor: '#ffffff',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    flex: 1,
  },
  formTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '30px',
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '25px',
    border: '1px solid #c3e6cb',
    fontSize: '0.95rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formGroup: {
    width: '100%',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    backgroundColor: '#f8f9fa',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
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
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  infoTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '40px',
  },
  contactInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginBottom: '40px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  contactIcon: {
    fontSize: '2rem',
    color: '#4A90E2',
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  contactText: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    lineHeight: '1.5',
  },
  contactLink: {
    fontSize: '1rem',
    color: '#4A90E2',
    lineHeight: '1.5',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  mapSection: {
    marginBottom: '40px',
  },
  mapTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  mapContainer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #e0e0e0',
  },
  mapText: {
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '0.95rem',
  },
  socialSection: {
    
  },
  socialTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  socialLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
  },
  socialLink: {
    backgroundColor: '#f8f9fa',
    color: '#1a1a1a',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: '2px solid #e0e0e0',
  },
  faqSection: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  faqTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '60px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  faqItem: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  },
  faqQuestion: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  faqAnswer: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    lineHeight: '1.6',
  },
};

// Add hover effects inline
const hoverStyles = `
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #4A90E2 !important;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1) !important;
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
  
  .social-link:hover {
    background-color: #4A90E2 !important;
    color: #ffffff !important;
    border-color: #4A90E2 !important;
    transform: translateY(-2px) !important;
  }
  
  .contact-item:hover .contact-icon {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
  
  .faq-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .contact-link:hover {
    color: #357ABD !important;
    text-decoration: underline !important;
  }
`;

// Apply hover styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hoverStyles;
  document.head.appendChild(styleSheet);
}

export default Contact;