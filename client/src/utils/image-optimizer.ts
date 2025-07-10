// Utilitaire pour optimiser les images et réduire leur poids
interface ImageOptimizerOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  fit?: 'crop' | 'scale' | 'fill';
}

export function optimizeImageUrl(
  originalUrl: string, 
  options: ImageOptimizerOptions = {}
): string {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'crop'
  } = options;

  // Si c'est une image Unsplash, optimisons-la
  if (originalUrl.includes('unsplash.com')) {
    const url = new URL(originalUrl);
    
    // Ajouter les paramètres d'optimisation
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('fm', format);
    url.searchParams.set('fit', fit);
    
    // Activer la compression automatique
    url.searchParams.set('auto', 'format,compress');
    
    return url.toString();
  }

  // Pour d'autres sources, retourner l'URL originale
  return originalUrl;
}

// Générer un srcSet pour les images responsives
export function generateSrcSet(originalUrl: string, sizes: number[] = [400, 800, 1200]): string {
  return sizes
    .map(size => `${optimizeImageUrl(originalUrl, { width: size })} ${size}w`)
    .join(', ');
}

// Placeholder en base64 pour éviter les Layout Shift
export const imagePlaceholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y5ZmFmYiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD4KICA8L3N2Zz4K";

// Composant d'image optimisée réutilisable
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 80,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false
}: OptimizedImageProps) {
  const optimizedSrc = optimizeImageUrl(src, { width, height, quality });
  const webpSrc = optimizeImageUrl(src, { width, height, quality, format: 'webp' });
  const srcSet = generateSrcSet(src);

  return (
    <picture>
      <source srcSet={srcSet} type="image/webp" sizes={sizes} />
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
      />
    </picture>
  );
}

// Recommandations d'optimisation pour le projet
export const imageOptimizationTips = {
  // Tailles recommandées pour différents usages
  sizes: {
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 250 },
    hero: { width: 1200, height: 800 },
    fullscreen: { width: 1920, height: 1080 }
  },
  
  // Qualité recommandée par type d'image
  quality: {
    photo: 80,
    illustration: 90,
    icon: 95
  },
  
  // Formats recommandés
  formats: {
    modern: 'webp', // Pour les navigateurs modernes
    fallback: 'jpg' // Pour les anciens navigateurs
  }
}; 