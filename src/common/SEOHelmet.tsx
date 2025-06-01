import { Helmet } from "react-helmet-async";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "Amoza Tegels - Professional Tile Installation Services in Netherlands",
  description = "Premier tile installation company specializing in precision craftsmanship and superior quality workmanship. Professional tile installation services with expert craftsmanship in Netherlands.",
  keywords = "tile installation, tegels, Netherlands, professional tiling, bathroom tiles, kitchen tiles, floor tiles, wall tiles, ceramic tiles, porcelain tiles, tile contractor, tile services",
  ogTitle,
  ogDescription,
  ogImage = "/images/logo.png",
  canonicalUrl = "https://amoza-tegels.nl/",
  structuredData,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
