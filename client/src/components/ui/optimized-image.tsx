import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallback?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  fallback
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (priority) return; // Pas de lazy loading pour les images prioritaires

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Optimiser l'URL Unsplash
  const optimizeUnsplashUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      const params = new URLSearchParams(url.split('?')[1] || '');
      
      // Paramètres d'optimisation
      params.set('auto', 'format,compress');
      params.set('fit', 'crop');
      params.set('q', '80'); // Qualité optimisée
      
      // Ajouter le format WebP si supporté
      if (typeof window !== 'undefined' && window.navigator.userAgent.includes('Chrome')) {
        params.set('fm', 'webp');
      }
      
      // Redimensionner si nécessaire
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      
      return `${baseUrl}?${params.toString()}`;
    }
    return url;
  };

  const optimizedSrc = optimizeUnsplashUrl(src);
  const displaySrc = hasError && fallback ? fallback : optimizedSrc;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder de chargement */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
      )}
      
      {/* Image optimisée */}
      {isInView && (
        <img
          ref={imgRef}
          src={displaySrc}
          alt={alt}
          className={`
            transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      )}
      
      {/* Placeholder si l'image n'est pas encore chargée */}
      {!isInView && !priority && (
        <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded" style={{ width, height }} />
      )}
    </div>
  );
}

// Composant spécialisé pour les avatars
export function OptimizedAvatar({
  src,
  alt,
  size = "md",
  className = ""
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      width={size === "sm" ? 32 : size === "md" ? 48 : 64}
      height={size === "sm" ? 32 : size === "md" ? 48 : 64}
    />
  );
} 