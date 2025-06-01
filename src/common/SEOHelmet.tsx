import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Amoza Tegels - Professional Tile Installation Services in Netherlands",
  description = "Premier tile installation company specializing in precision craftsmanship and superior quality workmanship. Professional tile installation services with expert craftsmanship in Netherlands.",
  keywords = "tile installation, tegels, Netherlands, professional tiling, bathroom tiles, kitchen tiles, floor tiles, wall tiles, ceramic tiles, porcelain tiles, tile contractor, tile services",
  ogTitle,
  ogDescription,
  ogImage = "/images/logo.png",
  canonicalUrl = "https://amoza-tegels.nl/",
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper function to set canonical URL
    const setCanonicalUrl = (url: string) => {
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    };

    // Set meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    // Open Graph tags
    setMetaTag("og:title", ogTitle || title, true);
    setMetaTag("og:description", ogDescription || description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", canonicalUrl, true);

    // Twitter tags
    setMetaTag("twitter:title", ogTitle || title);
    setMetaTag("twitter:description", ogDescription || description);
    setMetaTag("twitter:image", ogImage);

    // Set canonical URL
    setCanonicalUrl(canonicalUrl);

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Amoza Tegels";
    };
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl,
  ]);

  // This component doesn't render anything
  return null;
};

export default SEO;
