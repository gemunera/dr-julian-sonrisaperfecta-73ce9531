// Centralized social media links and handlers

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/dr.julianpalacios',
  facebook: 'https://www.facebook.com/share/1DbZ9ztDej/?mibextid=wwXIfr',
  whatsapp: {
    phoneNumber: '573167580565',
    defaultMessage: '¡Hola! Gracias por comunicarte con la clínica del Dr. Julián Palacios.\n\nPor favor cuéntanos, ¿qué información deseas recibir sobre nuestros servicios de periodoncia, diseño de sonrisa, carillas dentales o implantología?'
  }
};

export const openInstagram = () => {
  window.open(SOCIAL_LINKS.instagram, '_blank');
};

export const openFacebook = () => {
  window.open(SOCIAL_LINKS.facebook, '_blank');
};

export const openWhatsApp = (customMessage?: string) => {
  const message = customMessage || SOCIAL_LINKS.whatsapp.defaultMessage;
  const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
