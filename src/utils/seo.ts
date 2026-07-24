/**
 * YELWIN Dynamic SEO & OpenGraph Metadata Manager
 */

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export function updateSEOMetadata(meta: SEOMetadata = {}): void {
  const defaultTitle = 'YELWIN — Modern Technology & Digital Innovation | BE BEYOND.';
  const defaultDesc =
    'YELWIN is a modern technology and digital innovation company turning ambitious ideas into digital products, intelligent AI technology, and scalable brands.';
  const defaultKeywords = [
    'YELWIN',
    'Technology Company',
    'AI Solutions',
    'Digital Product Development',
    'SaaS',
    'UI UX Design',
    'Brand Strategy',
    'Automation'
  ];

  const title = meta.title ? `${meta.title} | YELWIN` : defaultTitle;
  const description = meta.description || defaultDesc;
  const keywords = (meta.keywords || defaultKeywords).join(', ');

  // Update Document Title
  document.title = title;

  // Helper to update meta tag
  const setMeta = (nameAttr: string, valueAttr: string, content: string) => {
    let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(nameAttr, valueAttr);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  setMeta('name', 'description', description);
  setMeta('name', 'keywords', keywords);

  // Open Graph
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', 'YELWIN');

  // Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);

  // JSON-LD Structured Data for Organization
  let jsonLdScript = document.querySelector('#yelwin-structured-data');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'yelwin-structured-data';
    jsonLdScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(jsonLdScript);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YELWIN',
    slogan: 'BE BEYOND.',
    description: defaultDesc,
    url: typeof window !== 'undefined' ? window.location.origin : 'https://yelwin.com',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.svg` : '',
    sameAs: [
      'https://linkedin.com/company/yelwin',
      'https://github.com/yelwin-tech',
      'https://x.com/yelwin_tech'
    ],
    knowsAbout: [
      'Digital Products',
      'Artificial Intelligence',
      'Process Automation',
      'User Experience Design',
      'Brand Identity'
    ]
  };

  jsonLdScript.textContent = JSON.stringify(structuredData);
}
