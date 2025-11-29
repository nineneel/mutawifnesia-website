// SEO Configuration for different pages
const siteUrl = import.meta.env.VITE_SITE_URL || 'https://mutawifnesia.id';

export const seoConfig = {
  home: {
    title: 'Beranda',
    description: 'Mutawifnesia - Platform sertifikasi profesional untuk Mutawif Indonesia masa depan. Bergabunglah dengan program pelatihan dan sertifikasi terpercaya untuk menjadi Mutawif profesional yang kompeten dan bersertifikat.',
    keywords: 'mutawif, sertifikasi mutawif, pelatihan mutawif, mutawif indonesia, umroh, haji, tour guide, wisata religi, sertifikasi profesional, pelatihan mutawif profesional',
    canonicalUrl: siteUrl,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mutawifnesia',
      description: 'Sertifikasi profesional untuk Mutawif Indonesia masa depan',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-821-3081-8170',
        contactType: 'Customer Service',
        email: 'mutawifnesia@gmail.com',
        availableLanguage: ['Indonesian', 'English']
      },
      sameAs: [
        'https://facebook.com/mutawifnesia',
        'https://instagram.com/mutawifnesia',
        'https://twitter.com/mutawifnesia'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gedung Fancy Mampang, Jl. Mampang Prpt. Raya No.151 Lantai 4 Unit A7, RT.3/RW.1, Duren Tiga',
        addressLocality: 'Jakarta Selatan',
        addressRegion: 'DKI Jakarta',
        postalCode: '12760',
        addressCountry: 'ID'
      }
    }
  },
  about: {
    title: 'Tentang Kami',
    description: 'Pelajari lebih lanjut tentang Mutawifnesia, misi kami dalam mengembangkan Mutawif profesional Indonesia, dan bagaimana kami membantu Anda menjadi pemandu wisata religi yang kompeten dan bersertifikat.',
    keywords: 'tentang mutawifnesia, visi misi mutawifnesia, lembaga sertifikasi mutawif, ahlan certification, pelatihan mutawif terpercaya',
    canonicalUrl: `${siteUrl}/about`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Tentang Mutawifnesia',
      description: 'Informasi tentang Mutawifnesia dan program sertifikasi Mutawif profesional',
      url: `${siteUrl}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: 'PT ACCREDITATION HAJJ AND UMRAH LAND ARRANGEMENT',
        alternateName: 'Mutawifnesia',
        description: 'Lembaga sertifikasi profesional untuk Mutawif Indonesia'
      }
    }
  },
  obligation: {
    title: 'Program Obligasi',
    description: 'Jelajahi program obligasi Mutawifnesia yang dirancang untuk mendukung pengembangan karir Mutawif profesional. Pelajari manfaat dan peluang investasi dalam program sertifikasi kami.',
    keywords: 'obligasi mutawif, program obligasi, investasi mutawif, pendanaan pelatihan mutawif',
    canonicalUrl: `${siteUrl}/obligation`,
    noindex: true // Coming soon page
  },
  contact: {
    title: 'Hubungi Kami',
    description: 'Hubungi tim Mutawifnesia untuk informasi lebih lanjut tentang program sertifikasi Mutawif. Kami siap membantu Anda mewujudkan karir sebagai Mutawif profesional yang bersertifikat.',
    keywords: 'kontak mutawifnesia, hubungi mutawifnesia, customer service mutawif, informasi pendaftaran mutawif',
    canonicalUrl: `${siteUrl}/contact`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Hubungi Mutawifnesia',
      description: 'Halaman kontak untuk Mutawifnesia',
      url: `${siteUrl}/contact`
    }
  },
  notFound: {
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Mutawifnesia untuk menemukan informasi tentang program sertifikasi Mutawif profesional.',
    noindex: true,
    nofollow: true
  }
};

// Default SEO fallback
export const defaultSEO = {
  title: 'Mutawifnesia - Sertifikasi Mutawif Profesional',
  description: 'Platform sertifikasi profesional untuk Mutawif Indonesia masa depan',
  keywords: 'mutawif, sertifikasi, pelatihan, umroh, haji',
  ogImage: `${siteUrl}/logo.png`,
  twitterCard: 'summary_large_image'
};
