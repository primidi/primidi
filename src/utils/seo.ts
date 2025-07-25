/**
 * SEO utility functions for consistent optimization across the site
 */

/**
 * Truncate text to a specific length while preserving word boundaries
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Generate SEO-friendly URL slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Extract keywords from content text
 */
export function extractKeywords(text: string, count: number = 10): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, count)
    .map(([word]) => word);
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  // Remove markdown and HTML
  const cleanContent = content
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  return truncateText(cleanContent, maxLength);
}

/**
 * Validate and normalize URL
 */
export function normalizeUrl(url: string, baseUrl: string = 'https://primidi.vercel.app'): string {
  if (url.startsWith('http')) return url;
  if (url.startsWith('/')) return `${baseUrl}${url}`;
  return `${baseUrl}/${url}`;
}

/**
 * Generate structured data for articles
 */
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  author: string;
  publishedTime: Date;
  modifiedTime?: Date;
  image?: string;
  url: string;
  keywords?: string[];
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedTime.toISOString(),
    dateModified: (article.modifiedTime || article.publishedTime).toISOString(),
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://primidi.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: article.author,
      url: 'https://primidi.vercel.app',
    },
    keywords: article.keywords?.join(', ') || '',
    articleSection: article.tags?.join(', ') || '',
    url: article.url,
  };
}

/**
 * SEO constants and defaults
 */
export const SEO_DEFAULTS = {
  SITE_NAME: 'Primidi',
  SITE_URL: 'https://primidi.vercel.app',
  AUTHOR: 'Gharis Primada Hariyono',
  DEFAULT_IMAGE: '/profile-header.png',
  TWITTER_HANDLE: '@gharisprimadi',
  DESCRIPTION_MAX_LENGTH: 160,
  TITLE_MAX_LENGTH: 60,
  KEYWORDS_MAX_COUNT: 10,
} as const;

/**
 * Common keywords for the site
 */
export const COMMON_KEYWORDS = [
  'Gharis Primada Hariyono',
  'Software Engineer',
  'Programming',
  'Web Development',
  'Technology',
  'Tech Blog',
  'Indonesia Developer',
  'Software Development',
  'Programming Tutorials',
  'Tech Insights',
] as const;