import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      periodontics: 'Periodoncia',
      smileDesign: 'Diseño de Sonrisa',
      cases: 'Casos Clínicos',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      title: 'Tu Sonrisa, Nuestra Pasión',
      subtitle: 'Transformamos vidas con tratamientos de vanguardia',
      description: 'Especialista en Periodoncia, Implantología y Diseño de Sonrisa. Más de 10 años de experiencia devolviendo la confianza a nuestros pacientes.',
      cta: 'Agenda tu Consulta',
      whatsapp: 'Escríbenos por WhatsApp'
    },
    about: {
      badge: 'Sobre el Doctor',
      title: 'Dr. Julián Palacios',
      subtitle: 'Especialista en Periodoncia con más de 10 años de experiencia transformando sonrisas',
      bio1: 'Doctor Julián Palacios, odontólogo egresado de la Universidad del Valle (2015) y especialista en Periodoncia de la misma institución (2021). Con más de 10 años de experiencia en odontología y cirugía periodontal, se ha consolidado como un referente en el cuidado integral de la salud oral y en la transformación estética de las sonrisas.',
      bio2: 'Su práctica combina la precisión científica de la periodoncia con la innovación en estética dental, ofreciendo tratamientos como diseño de sonrisa, carillas dentales e implantología. El enfoque del Dr. Palacios está en lograr resultados que no solo mejoran la salud de las encías y dientes, sino que también potencian la seguridad, la armonía facial y la confianza de cada paciente.',
      bio3: 'Cada tratamiento está diseñado con un equilibrio entre funcionalidad y estética, garantizando sonrisas saludables, naturales y atractivas.',
      quote: 'Periodoncia para la salud. Estética dental para la confianza. Diseños de sonrisa que transforman vidas.',
      formation: 'Formación',
      university: 'Universidad del Valle',
      degree: 'Odontología (2015) • Especialización en Periodoncia (2021)',
      experience: 'Experiencia',
      years: 'Más de 10 años',
      experienceDesc: 'Odontología general y cirugía periodontal especializada',
      specialties: 'Especialidades',
      specialtiesType: 'Tratamientos integrales',
      specialtiesList: 'Periodoncia • Implantología • Diseño de Sonrisa',
      approach: 'Enfoque',
      approachType: 'Centrado en el paciente',
      approachDesc: 'Salud oral integral y transformación estética',
      patients: 'Pacientes',
      transformed: 'Transformados'
    },
    services: {
      badge: 'Servicios',
      title: 'Tratamientos Especializados',
      subtitle: 'Soluciones integrales para cada necesidad dental',
      viewMore: 'Ver más',
      mostPopular: 'Más Popular',
      benefitsTitle: 'Beneficios principales:',
      help: {
        title: '¿No estás seguro qué tratamiento necesitas?',
        subtitle: 'Agenda una consulta personalizada y te ayudaremos a encontrar el tratamiento perfecto para tus necesidades y objetivos estéticos.',
        bookFreeConsultation: 'Agendar Consulta Gratuita'
      },
      periodontics: {
        title: 'Periodoncia',
        description: 'Cuidado integral de encías y tejidos de soporte dental'
      },
      implants: {
        title: 'Implantología',
        description: 'Rehabilitación dental con implantes de última generación'
      },
      veneers: {
        title: 'Carillas Dentales',
        description: 'Corrección estética para una sonrisa perfecta'
      },
      smileDesign: {
        title: 'Diseño de Sonrisa',
        description: 'Transformación completa de tu sonrisa con tecnología digital'
      }
    },
    cases: {
      badge: 'Resultados Reales',
      title: 'Casos Clínicos',
      subtitle: 'Transformaciones que cambian vidas',
      viewAll: 'Ver Todos los Casos',
      viewResults: 'Ver Resultados',
      before: 'Antes',
      after: 'Después'
    },
    testimonials: {
      badge: 'Testimonios',
      title: 'Lo Que Dicen Nuestros Pacientes',
      subtitle: 'Experiencias reales de quienes confiaron en nosotros'
    },
    contact: {
      badge: 'Contacto',
      title: 'Agenda tu Consulta',
      subtitle: 'Estamos aquí para ayudarte a lograr la sonrisa de tus sueños',
      phone: 'Teléfono',
      email: 'Correo',
      location: 'Ubicación',
      schedule: 'Horario',
      scheduleTime: 'Lunes - Viernes: 8:00 AM - 6:00 PM',
      whatsapp: 'WhatsApp'
    },
    footer: {
      description: 'Transformando sonrisas con periodoncia especializada, implantología de vanguardia y diseño dental personalizado.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      schedule: 'Horario de Atención',
      scheduleTime: 'Lunes - Viernes: 8:00 AM - 6:00 PM',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      periodontics: 'Periodontics',
      smileDesign: 'Smile Design',
      cases: 'Clinical Cases',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title: 'Your Smile, Our Passion',
      subtitle: 'Transforming lives with cutting-edge treatments',
      description: 'Specialist in Periodontics, Implantology and Smile Design. Over 10 years of experience restoring confidence to our patients.',
      cta: 'Book Your Appointment',
      whatsapp: 'Contact us on WhatsApp'
    },
    about: {
      badge: 'About the Doctor',
      title: 'Dr. Julián Palacios',
      subtitle: 'Periodontics Specialist with over 10 years of experience transforming smiles',
      bio1: 'Dr. Julián Palacios, dentist graduated from Universidad del Valle (2015) and specialist in Periodontics from the same institution (2021). With over 10 years of experience in dentistry and periodontal surgery, he has established himself as a reference in comprehensive oral health care and aesthetic smile transformation.',
      bio2: 'His practice combines the scientific precision of periodontics with innovation in dental aesthetics, offering treatments such as smile design, dental veneers, and implantology. Dr. Palacios\'s approach is to achieve results that not only improve gum and teeth health, but also enhance security, facial harmony, and patient confidence.',
      bio3: 'Each treatment is designed with a balance between functionality and aesthetics, guaranteeing healthy, natural, and attractive smiles.',
      quote: 'Periodontics for health. Dental aesthetics for confidence. Smile designs that transform lives.',
      formation: 'Education',
      university: 'Universidad del Valle',
      degree: 'Dentistry (2015) • Periodontics Specialization (2021)',
      experience: 'Experience',
      years: 'Over 10 years',
      experienceDesc: 'General dentistry and specialized periodontal surgery',
      specialties: 'Specialties',
      specialtiesType: 'Comprehensive treatments',
      specialtiesList: 'Periodontics • Implantology • Smile Design',
      approach: 'Approach',
      approachType: 'Patient-centered',
      approachDesc: 'Comprehensive oral health and aesthetic transformation',
      patients: 'Patients',
      transformed: 'Transformed'
    },
    services: {
      badge: 'Services',
      title: 'Specialized Treatments',
      subtitle: 'Comprehensive solutions for every dental need',
      viewMore: 'Learn more',
      mostPopular: 'Most Popular',
      benefitsTitle: 'Main benefits:',
      help: {
        title: "Not sure which treatment you need?",
        subtitle: 'Book a personalized consultation and we will help you find the perfect treatment for your needs and aesthetic goals.',
        bookFreeConsultation: 'Book Free Consultation'
      },
      periodontics: {
        title: 'Periodontics',
        description: 'Comprehensive care for gums and dental support tissues'
      },
      implants: {
        title: 'Implantology',
        description: 'Dental rehabilitation with latest generation implants'
      },
      veneers: {
        title: 'Dental Veneers',
        description: 'Aesthetic correction for a perfect smile'
      },
      smileDesign: {
        title: 'Smile Design',
        description: 'Complete transformation of your smile with digital technology'
      }
    },
    cases: {
      badge: 'Real Results',
      title: 'Clinical Cases',
      subtitle: 'Transformations that change lives',
      viewAll: 'View All Cases',
      viewResults: 'View Results',
      before: 'Before',
      after: 'After'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Patients Say',
      subtitle: 'Real experiences from those who trusted us'
    },
    contact: {
      badge: 'Contact',
      title: 'Book Your Appointment',
      subtitle: 'We are here to help you achieve the smile of your dreams',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      schedule: 'Schedule',
      scheduleTime: 'Monday - Friday: 8:00 AM - 6:00 PM',
      whatsapp: 'WhatsApp'
    },
    footer: {
      description: 'Transforming smiles with specialized periodontics, cutting-edge implantology, and personalized dental design.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      schedule: 'Office Hours',
      scheduleTime: 'Monday - Friday: 8:00 AM - 6:00 PM',
      rights: 'All rights reserved.'
    }
  }
};
