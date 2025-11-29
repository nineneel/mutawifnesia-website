import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  canonicalUrl,
  author = 'Mutawifnesia',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://mutawifnesia.id';
  const defaultImage = `${siteUrl}/logo.png`;
  const fullTitle = title ? `${title} | Mutawifnesia` : 'Mutawifnesia - Sertifikasi Mutawif Profesional';
  const finalOgImage = ogImage || defaultImage;
  const finalOgUrl = ogUrl || canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
        />
      )}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="Mutawifnesia" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={finalOgUrl} />
      <meta property="twitter:title" content={fullTitle} />
      {description && <meta property="twitter:description" content={description} />}
      <meta property="twitter:image" content={finalOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  twitterCard: PropTypes.string,
  canonicalUrl: PropTypes.string,
  author: PropTypes.string,
  structuredData: PropTypes.object,
  noindex: PropTypes.bool,
  nofollow: PropTypes.bool,
};

export default SEO;
