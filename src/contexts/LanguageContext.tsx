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
      doctor: 'Dr. Julián Palacios',
      services: 'Servicios',
      periodontics: 'Periodoncia',
      smileDesign: 'Diseño de Sonrisa',
      implants: 'Implantología',
      veneers: 'Carillas',
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
      after: 'Después',
      successCases: 'Casos Exitosos',
      averageSatisfaction: 'Satisfacción Promedio',
      successRate: 'Tasa de Éxito',
      yearsExperience: 'Años de Experiencia',
      nextSuccess: '¿Quieres ser nuestro próximo caso de éxito?',
      nextSuccessDesc: 'Cada paciente es único y merece un tratamiento personalizado. Agenda tu consulta y descubre cómo podemos transformar tu sonrisa.',
      viewMoreCases: 'Ver Más Casos Clínicos',
      defaultDisclaimer: 'Resultado real de paciente. Los resultados pueden variar según cada caso individual.',
      ceramicCase: {
        title: 'Diseño de Sonrisa en Cerámica',
        category: 'Diseño de Sonrisa',
        description: 'Tratamiento realizado con restauraciones cerámicas de alta estética que permiten mejorar forma, color y proporción dental, logrando una sonrisa más armónica, natural y luminosa, con resultados duraderos y biocompatibles.'
      },
      ceramicLenses: {
        title: 'Diseño de sonrisa con lentes cerámicos',
        description: 'Transformación estética realizada con lentes cerámicos de alta precisión, diseñados para mejorar la forma, el color y la proporción dental, logrando una sonrisa armónica, natural y luminosa. Este tratamiento permite realzar la expresión facial, ofreciendo resultados duraderos, biocompatibles y altamente estéticos, adaptados a las características únicas de cada paciente.'
      },
      case1: {
        title: 'Diseño de Sonrisa Completo',
        category: 'Estética Dental',
        duration: '3 semanas',
        difficulty: 'Avanzado',
        description: 'Transformación completa con carillas de porcelana y blanqueamiento profesional.',
        results: ['Alineación perfecta', 'Color natural uniforme', 'Armonía facial mejorada', 'Confianza restaurada']
      },
      case2: {
        title: 'Rehabilitación con Implantes',
        category: 'Implantología',
        duration: '4 meses',
        difficulty: 'Complejo',
        description: 'Reemplazo de múltiples piezas dentales con implantes de titanio y coronas personalizadas.',
        results: ['Función masticatoria 100% restaurada', 'Estética natural', 'Preservación del hueso', 'Solución permanente']
      },
      case3: {
        title: 'Tratamiento Periodontal Integral',
        category: 'Periodoncia',
        duration: '6 semanas',
        difficulty: 'Moderado',
        description: 'Regeneración de encías y tratamiento de periodontitis avanzada con técnicas mínimamente invasivas.',
        results: ['Encías saludables', 'Eliminación de inflamación', 'Prevención de pérdida dental', 'Mejora en salud general']
      },
      case4: {
        title: 'Carillas Ultrafinas',
        category: 'Estética Dental',
        duration: '2 semanas',
        difficulty: 'Intermedio',
        description: 'Corrección de espacios y forma dental con carillas de porcelana ultrafinas sin desgaste.',
        results: ['Mínima invasión', 'Resultado inmediato', 'Conservación dental', 'Apariencia natural']
      },
      difficulties: {
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        complex: 'Complejo',
        moderate: 'Moderado'
      },
      videoTestimonials: {
        title: 'Testimonios Reales',
        video1: 'Testimonio de Paciente',
        video2: 'Experiencia del Paciente',
        video3: 'Historia de Éxito'
      }
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
      rights: 'Todos los derechos reservados.',
      specialist: 'Especialista en Periodoncia - Universidad del Valle',
      saturdays: 'Sábados',
      sundays: 'Domingos',
      closed: 'Cerrado'
    },
    // Pages
    smileDesignPage: {
      badge: 'Tratamiento Estrella',
      title: 'Diseño de Sonrisa',
      description: 'Transforma tu sonrisa con nuestro enfoque científico y artístico. Combinamos tecnología avanzada con la experiencia del Dr. Palacios para crear la sonrisa perfecta que siempre soñaste.',
      cta: 'Agenda tu Consulta',
      whyChoose: '¿Por qué elegir nuestro Diseño de Sonrisa?',
      whyChooseDesc1: 'El Diseño de Sonrisa del Dr. Julián Palacios combina estética y ciencia para crear resultados personalizados, naturales y duraderos. Nuestro enfoque se basa en resaltar la armonía facial y dental de cada paciente, garantizando sonrisas únicas que reflejan seguridad y confianza.',
      whyChooseDesc2: 'Cada diseño es diferente porque cada persona lo es. Con tecnología avanzada y una visión estética detallada, logramos resultados que transforman no solo la sonrisa, sino también la autoestima y la calidad de vida.',
      clinicalCases: 'Casos Clínicos Reales',
      realTransformations: 'Transformaciones Reales',
      realTransformationsDesc: 'Descubre los resultados increíbles que hemos logrado con nuestros pacientes',
      readyForSmile: '¿Listo para tu nueva sonrisa?',
      readyForSmileDesc: 'Agenda tu consulta gratuita y descubre cómo podemos transformar tu sonrisa',
      scheduleFree: 'Agendar Consulta Gratis',
      viewTestimonials: 'Ver Testimonios',
      benefits: ['Análisis facial completo', 'Simulación digital previa', 'Resultados naturales y armónicos', 'Mejora de la autoestima', 'Procedimiento mínimamente invasivo', 'Resultados duraderos'],
      process: {
        step1: { title: 'Consulta Inicial', description: 'Evaluación facial y dental completa' },
        step2: { title: 'Diseño Digital', description: 'Simulación 3D de tu nueva sonrisa' },
        step3: { title: 'Preparación', description: 'Preparación mínima de dientes' },
        step4: { title: 'Resultado Final', description: 'Colocación y ajuste perfecto' }
      },
      cases: {
        case1: { title: 'Diseño de Sonrisa Completo', category: 'Diseño de Sonrisa' },
        case2: { title: 'Carillas de Porcelana', category: 'Carillas Dentales' },
        case3: { title: 'Rehabilitación con Implantes', category: 'Implantología' }
      }
    },
    periodonticsPage: {
      badge: 'Especialidad del Dr. Palacios',
      title: 'Periodoncia',
      description: 'La base de una sonrisa saludable está en encías sanas. Como especialista en periodoncia, el Dr. Palacios ofrece tratamientos avanzados para prevenir y tratar enfermedades de las encías, preservando tu salud oral integral.',
      evaluation: 'Evaluación Periodontal',
      treatments: 'Tratamientos Especializados',
      comprehensiveSolutions: 'Soluciones Periodontales Integrales',
      comprehensiveSolutionsDesc: 'Tratamientos personalizados para cada etapa de la enfermedad periodontal, utilizando tecnología de vanguardia y técnicas mínimamente invasivas.',
      realCases: 'Casos Reales',
      transformations: 'Transformaciones Periodontales',
      transformationsDesc: 'Resultados reales de nuestros pacientes que han recuperado la salud de sus encías y la estabilidad de sus dientes con nuestros tratamientos especializados.',
      disclaimer: '*Los resultados pueden variar según cada caso individual. Las imágenes mostradas corresponden a casos reales tratados por el Dr. Palacios.',
      viewMoreCases: 'Ver Más Casos Clínicos',
      warningSignsBadge: 'Señales de Alerta',
      warningSignsTitle: '¿Cuándo consultar al periodoncista?',
      warningSignsDesc: 'La detección temprana es clave para prevenir la pérdida dental. Si presentas alguno de estos síntomas, agenda una cita inmediatamente.',
      preventionTitle: 'Prevención Efectiva',
      preventionDesc: 'Mantén tus encías saludables con estos hábitos esenciales',
      treatment1: {
        title: 'Limpieza Profunda',
        description: 'Eliminación de sarro y placa bacteriana por debajo de la línea de las encías',
        benefits: ['Elimina infecciones', 'Previene pérdida ósea', 'Mejora halitosis']
      },
      treatment2: {
        title: 'Cirugía Periodontal',
        description: 'Tratamiento avanzado para casos severos de enfermedad periodontal',
        benefits: ['Regeneración tisular', 'Preserva dientes', 'Resultados duraderos']
      },
      treatment3: {
        title: 'Mantenimiento',
        description: 'Cuidado preventivo continuo para mantener la salud de las encías',
        benefits: ['Prevención efectiva', 'Detección temprana', 'Sonrisa saludable']
      },
      clinicalCase: {
        title: 'Regeneración Periodontal',
        category: 'Tratamiento Avanzado'
      },
      symptoms: ['Encías rojas o inflamadas', 'Sangrado al cepillarse', 'Mal aliento persistente', 'Retracción de encías', 'Dientes flojos o móviles', 'Dolor al masticar'],
      prevention: ['Cepillado correcto 2 veces al día', 'Uso diario de hilo dental', 'Enjuague bucal antibacteriano', 'Visitas regulares al periodoncista', 'Evitar el tabaco', 'Dieta balanceada']
    },
    implantologyPage: {
      badge: 'Solución Definitiva',
      title: 'Implantología',
      description: 'Recupera la funcionalidad completa de tu boca con implantes dentales de última generación. El Dr. Palacios combina técnica quirúrgica avanzada con materiales de primera calidad para resultados duraderos.',
      evaluation3D: 'Evaluación 3D Gratuita',
      successCases: 'Casos Exitosos',
      benefitsTitle: 'Beneficios de los Implantes Dentales',
      benefitsSubtitle: 'La mejor solución para reemplazar dientes perdidos de forma permanente',
      processTitle: 'Proceso de Implantación',
      processSubtitle: 'Un procedimiento planificado paso a paso para garantizar el éxito',
      typesTitle: 'Tipos de Implantes',
      typesSubtitle: 'Soluciones personalizadas según tus necesidades específicas',
      moreInfo: 'Más Información',
      recoverSmile: 'Recupera tu Sonrisa Completa',
      recoverSmileDesc: 'Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Agenda tu evaluación 3D gratuita y descubre si eres candidato para implantes.',
      evaluation3DFree: 'Evaluación 3D Gratis',
      financingPlan: 'Plan de Financiamiento',
      benefits: {
        durability: { title: 'Durabilidad', description: 'Los implantes pueden durar toda la vida con el cuidado adecuado' },
        comfort: { title: 'Comodidad', description: 'Se sienten y funcionan como dientes naturales' },
        aesthetics: { title: 'Estética', description: 'Resultados naturales que mejoran tu sonrisa' },
        functionality: { title: 'Funcionalidad', description: 'Recupera completamente tu capacidad de masticación' }
      },
      process: {
        step1: { title: 'Evaluación Inicial', description: 'Examen completo, radiografías 3D y planificación digital', duration: '1 hora' },
        step2: { title: 'Cirugía de Implante', description: 'Colocación precisa del implante de titanio', duration: '1-2 horas' },
        step3: { title: 'Integración Ósea', description: 'Período de cicatrización y osteointegración', duration: '3-6 meses' },
        step4: { title: 'Corona Final', description: 'Colocación de la corona personalizada', duration: '2-3 semanas' }
      },
      types: {
        single: { title: 'Implante Unitario', description: 'Reemplazo de un solo diente perdido', ideal: 'Pérdida de un diente', recovery: '3-6 meses' },
        bridge: { title: 'Puente sobre Implantes', description: 'Reemplazo de varios dientes consecutivos', ideal: 'Pérdida de 2-4 dientes', recovery: '4-6 meses' },
        full: { title: 'Prótesis Total', description: 'Reemplazo completo de todos los dientes', ideal: 'Edentulismo total', recovery: '6-8 meses' }
      },
      idealFor: 'Ideal para',
      recovery: 'Recuperación'
    },
    veneersPage: {
      badge: 'Tecnología Avanzada',
      title: 'Carillas Dentales',
      description: 'Transforma dientes manchados, astillados o desalineados con nuestras carillas de alta calidad. Resultados inmediatos y naturales que duran años.',
      specializedConsult: 'Consulta Especializada',
      viewTransformations: 'Ver Transformaciones',
      advantagesTitle: 'Ventajas de las Carillas Dentales',
      advantagesSubtitle: 'Solución integral para múltiples problemas estéticos dentales',
      typesTitle: 'Tipos de Carillas',
      typesSubtitle: 'Elige la opción que mejor se adapte a tus necesidades y presupuesto',
      mostPopular: 'Más Popular',
      moreInfo: 'Más Información',
      smileWithConfidence: 'Sonríe con Confianza',
      smileWithConfidenceDesc: 'Las carillas dentales son la solución perfecta para una sonrisa impecable. Agenda tu evaluación y descubre qué tipo de carilla es ideal para ti.',
      freeEvaluation: 'Evaluación Gratuita',
      successCases: 'Casos de Éxito',
      advantages: {
        resistance: { title: 'Resistencia Superior', description: 'Material cerámico de alta calidad que resiste el desgaste diario' },
        aesthetics: { title: 'Estética Natural', description: 'Resultados que imitan perfectamente el esmalte dental natural' },
        fast: { title: 'Procedimiento Rápido', description: 'Resultados visibles en pocas sesiones' },
        minimal: { title: 'Mínimamente Invasivo', description: 'Preservamos la mayor cantidad de estructura dental' }
      },
      types: {
        porcelain: {
          title: 'Carillas de Porcelana',
          description: 'La opción premium para resultados duraderos y naturales',
          features: ['Duración: 15-20 años', 'Resistencia superior', 'Color estable', 'Biocompatible']
        },
        composite: {
          title: 'Carillas de Composite',
          description: 'Solución rápida y económica para mejoras inmediatas',
          features: ['Duración: 5-8 años', 'Aplicación directa', 'Reparable', 'Más económica']
        }
      }
    },
    common: {
      duration: 'Duración',
      weeks: 'semanas',
      months: 'meses',
      hours: 'hora',
      years: 'años'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      doctor: 'Dr. Julián Palacios',
      services: 'Services',
      periodontics: 'Periodontics',
      smileDesign: 'Smile Design',
      implants: 'Implantology',
      veneers: 'Veneers',
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
      after: 'After',
      successCases: 'Successful Cases',
      averageSatisfaction: 'Average Satisfaction',
      successRate: 'Success Rate',
      yearsExperience: 'Years of Experience',
      nextSuccess: 'Want to be our next success story?',
      nextSuccessDesc: 'Each patient is unique and deserves personalized treatment. Schedule your consultation and discover how we can transform your smile.',
      viewMoreCases: 'View More Clinical Cases',
      defaultDisclaimer: 'Real patient result. Results may vary depending on each individual case.',
      ceramicCase: {
        title: 'Ceramic Smile Design',
        category: 'Smile Design',
        description: 'Treatment performed with high-aesthetic ceramic restorations that improve shape, color and dental proportion, achieving a more harmonious, natural and luminous smile, with lasting and biocompatible results.'
      },
      ceramicLenses: {
        title: 'Smile design with ceramic lenses',
        description: 'Aesthetic transformation performed with high-precision ceramic lenses, designed to improve the shape, color and dental proportion, achieving a harmonious, natural and luminous smile. This treatment enhances facial expression, offering lasting, biocompatible and highly aesthetic results, adapted to the unique characteristics of each patient.'
      },
      case1: {
        title: 'Complete Smile Design',
        category: 'Dental Aesthetics',
        duration: '3 weeks',
        difficulty: 'Advanced',
        description: 'Complete transformation with porcelain veneers and professional whitening.',
        results: ['Perfect alignment', 'Uniform natural color', 'Improved facial harmony', 'Restored confidence']
      },
      case2: {
        title: 'Implant Rehabilitation',
        category: 'Implantology',
        duration: '4 months',
        difficulty: 'Complex',
        description: 'Replacement of multiple teeth with titanium implants and custom crowns.',
        results: ['100% restored chewing function', 'Natural aesthetics', 'Bone preservation', 'Permanent solution']
      },
      case3: {
        title: 'Comprehensive Periodontal Treatment',
        category: 'Periodontics',
        duration: '6 weeks',
        difficulty: 'Moderate',
        description: 'Gum regeneration and treatment of advanced periodontitis with minimally invasive techniques.',
        results: ['Healthy gums', 'Elimination of inflammation', 'Prevention of tooth loss', 'Improved overall health']
      },
      case4: {
        title: 'Ultra-thin Veneers',
        category: 'Dental Aesthetics',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        description: 'Correction of spacing and dental shape with ultra-thin porcelain veneers without wear.',
        results: ['Minimal invasion', 'Immediate result', 'Dental preservation', 'Natural appearance']
      },
      difficulties: {
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        complex: 'Complex',
        moderate: 'Moderate'
      },
      videoTestimonials: {
        title: 'Real Testimonials',
        video1: 'Patient Testimonial',
        video2: 'Patient Experience',
        video3: 'Success Story'
      }
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
      rights: 'All rights reserved.',
      specialist: 'Periodontics Specialist - Universidad del Valle',
      saturdays: 'Saturdays',
      sundays: 'Sundays',
      closed: 'Closed'
    },
    // Pages
    smileDesignPage: {
      badge: 'Star Treatment',
      title: 'Smile Design',
      description: 'Transform your smile with our scientific and artistic approach. We combine advanced technology with Dr. Palacios\' experience to create the perfect smile you\'ve always dreamed of.',
      cta: 'Book Your Appointment',
      whyChoose: 'Why Choose Our Smile Design?',
      whyChooseDesc1: 'Dr. Julián Palacios\' Smile Design combines aesthetics and science to create personalized, natural, and lasting results. Our approach is based on highlighting the facial and dental harmony of each patient, guaranteeing unique smiles that reflect confidence and security.',
      whyChooseDesc2: 'Each design is different because each person is unique. With advanced technology and a detailed aesthetic vision, we achieve results that transform not only the smile, but also self-esteem and quality of life.',
      clinicalCases: 'Real Clinical Cases',
      realTransformations: 'Real Transformations',
      realTransformationsDesc: 'Discover the incredible results we have achieved with our patients',
      readyForSmile: 'Ready for your new smile?',
      readyForSmileDesc: 'Schedule your free consultation and discover how we can transform your smile',
      scheduleFree: 'Schedule Free Consultation',
      viewTestimonials: 'View Testimonials',
      benefits: ['Complete facial analysis', 'Prior digital simulation', 'Natural and harmonious results', 'Improved self-esteem', 'Minimally invasive procedure', 'Lasting results'],
      process: {
        step1: { title: 'Initial Consultation', description: 'Complete facial and dental evaluation' },
        step2: { title: 'Digital Design', description: '3D simulation of your new smile' },
        step3: { title: 'Preparation', description: 'Minimal tooth preparation' },
        step4: { title: 'Final Result', description: 'Perfect placement and adjustment' }
      },
      cases: {
        case1: { title: 'Complete Smile Design', category: 'Smile Design' },
        case2: { title: 'Porcelain Veneers', category: 'Dental Veneers' },
        case3: { title: 'Implant Rehabilitation', category: 'Implantology' }
      }
    },
    periodonticsPage: {
      badge: 'Dr. Palacios\' Specialty',
      title: 'Periodontics',
      description: 'The foundation of a healthy smile is in healthy gums. As a periodontics specialist, Dr. Palacios offers advanced treatments to prevent and treat gum diseases, preserving your comprehensive oral health.',
      evaluation: 'Periodontal Evaluation',
      treatments: 'Specialized Treatments',
      comprehensiveSolutions: 'Comprehensive Periodontal Solutions',
      comprehensiveSolutionsDesc: 'Personalized treatments for each stage of periodontal disease, using cutting-edge technology and minimally invasive techniques.',
      realCases: 'Real Cases',
      transformations: 'Periodontal Transformations',
      transformationsDesc: 'Real results from our patients who have recovered gum health and tooth stability with our specialized treatments.',
      disclaimer: '*Results may vary by individual case. Images shown correspond to real cases treated by Dr. Palacios.',
      viewMoreCases: 'View More Clinical Cases',
      warningSignsBadge: 'Warning Signs',
      warningSignsTitle: 'When to consult the periodontist?',
      warningSignsDesc: 'Early detection is key to preventing tooth loss. If you have any of these symptoms, schedule an appointment immediately.',
      preventionTitle: 'Effective Prevention',
      preventionDesc: 'Keep your gums healthy with these essential habits',
      treatment1: {
        title: 'Deep Cleaning',
        description: 'Removal of tartar and bacterial plaque below the gum line',
        benefits: ['Eliminates infections', 'Prevents bone loss', 'Improves bad breath']
      },
      treatment2: {
        title: 'Periodontal Surgery',
        description: 'Advanced treatment for severe cases of periodontal disease',
        benefits: ['Tissue regeneration', 'Preserves teeth', 'Lasting results']
      },
      treatment3: {
        title: 'Maintenance',
        description: 'Continuous preventive care to maintain gum health',
        benefits: ['Effective prevention', 'Early detection', 'Healthy smile']
      },
      clinicalCase: {
        title: 'Periodontal Regeneration',
        category: 'Advanced Treatment'
      },
      symptoms: ['Red or inflamed gums', 'Bleeding when brushing', 'Persistent bad breath', 'Gum recession', 'Loose or mobile teeth', 'Pain when chewing'],
      prevention: ['Correct brushing 2 times a day', 'Daily flossing', 'Antibacterial mouthwash', 'Regular visits to the periodontist', 'Avoid tobacco', 'Balanced diet']
    },
    implantologyPage: {
      badge: 'Definitive Solution',
      title: 'Implantology',
      description: 'Recover the complete functionality of your mouth with latest generation dental implants. Dr. Palacios combines advanced surgical technique with top quality materials for lasting results.',
      evaluation3D: 'Free 3D Evaluation',
      successCases: 'Successful Cases',
      benefitsTitle: 'Benefits of Dental Implants',
      benefitsSubtitle: 'The best solution to permanently replace missing teeth',
      processTitle: 'Implantation Process',
      processSubtitle: 'A step-by-step planned procedure to ensure success',
      typesTitle: 'Types of Implants',
      typesSubtitle: 'Customized solutions according to your specific needs',
      moreInfo: 'More Information',
      recoverSmile: 'Recover Your Complete Smile',
      recoverSmileDesc: 'Dental implants are the most advanced and durable solution to replace missing teeth. Schedule your free 3D evaluation and find out if you are a candidate for implants.',
      evaluation3DFree: 'Free 3D Evaluation',
      financingPlan: 'Financing Plan',
      benefits: {
        durability: { title: 'Durability', description: 'Implants can last a lifetime with proper care' },
        comfort: { title: 'Comfort', description: 'They feel and function like natural teeth' },
        aesthetics: { title: 'Aesthetics', description: 'Natural results that improve your smile' },
        functionality: { title: 'Functionality', description: 'Fully recover your chewing ability' }
      },
      process: {
        step1: { title: 'Initial Evaluation', description: 'Complete exam, 3D x-rays and digital planning', duration: '1 hour' },
        step2: { title: 'Implant Surgery', description: 'Precise placement of titanium implant', duration: '1-2 hours' },
        step3: { title: 'Bone Integration', description: 'Healing period and osseointegration', duration: '3-6 months' },
        step4: { title: 'Final Crown', description: 'Placement of custom crown', duration: '2-3 weeks' }
      },
      types: {
        single: { title: 'Single Implant', description: 'Replacement of a single missing tooth', ideal: 'Loss of one tooth', recovery: '3-6 months' },
        bridge: { title: 'Implant-Supported Bridge', description: 'Replacement of several consecutive teeth', ideal: 'Loss of 2-4 teeth', recovery: '4-6 months' },
        full: { title: 'Full Prosthesis', description: 'Complete replacement of all teeth', ideal: 'Total edentulism', recovery: '6-8 months' }
      },
      idealFor: 'Ideal for',
      recovery: 'Recovery'
    },
    veneersPage: {
      badge: 'Advanced Technology',
      title: 'Dental Veneers',
      description: 'Transform stained, chipped or misaligned teeth with our high quality veneers. Immediate and natural results that last for years.',
      specializedConsult: 'Specialized Consultation',
      viewTransformations: 'View Transformations',
      advantagesTitle: 'Advantages of Dental Veneers',
      advantagesSubtitle: 'Comprehensive solution for multiple dental aesthetic problems',
      typesTitle: 'Types of Veneers',
      typesSubtitle: 'Choose the option that best suits your needs and budget',
      mostPopular: 'Most Popular',
      moreInfo: 'More Information',
      smileWithConfidence: 'Smile with Confidence',
      smileWithConfidenceDesc: 'Dental veneers are the perfect solution for an impeccable smile. Schedule your evaluation and discover which type of veneer is ideal for you.',
      freeEvaluation: 'Free Evaluation',
      successCases: 'Success Cases',
      advantages: {
        resistance: { title: 'Superior Resistance', description: 'High quality ceramic material that resists daily wear' },
        aesthetics: { title: 'Natural Aesthetics', description: 'Results that perfectly mimic natural tooth enamel' },
        fast: { title: 'Quick Procedure', description: 'Visible results in a few sessions' },
        minimal: { title: 'Minimally Invasive', description: 'We preserve the maximum amount of dental structure' }
      },
      types: {
        porcelain: {
          title: 'Porcelain Veneers',
          description: 'The premium option for lasting and natural results',
          features: ['Duration: 15-20 years', 'Superior resistance', 'Stable color', 'Biocompatible']
        },
        composite: {
          title: 'Composite Veneers',
          description: 'Quick and economical solution for immediate improvements',
          features: ['Duration: 5-8 years', 'Direct application', 'Repairable', 'More economical']
        }
      }
    },
    common: {
      duration: 'Duration',
      weeks: 'weeks',
      months: 'months',
      hours: 'hour',
      years: 'years'
    }
  }
};
