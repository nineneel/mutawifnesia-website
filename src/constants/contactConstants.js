// WhatsApp Contact Configuration
export const WHATSAPP_CONFIG = {
  // Phone number in international format (without + sign)
  PHONE_NUMBER: '6282130818170',

  // Message template for program registration with simple KYC
  MESSAGE_TEMPLATE: `Halo, saya tertarik untuk mendaftar Program Sertifikasi Mutawifnesia.

Berikut data diri saya:
Nama Lengkap:
Email:
Usia:
Pendidikan Terakhir:
Pengalaman Terkait:

Mohon informasi lebih lanjut mengenai program ini. Terima kasih.`,
};

// Helper function to generate WhatsApp URL
export const getWhatsAppUrl = (phoneNumber = WHATSAPP_CONFIG.PHONE_NUMBER, message = WHATSAPP_CONFIG.MESSAGE_TEMPLATE) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
