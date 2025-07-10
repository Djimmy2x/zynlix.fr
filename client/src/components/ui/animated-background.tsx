import { useState, useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  gifSrc: string;
  alt: string;
  opacity?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "small" | "medium" | "large";
  className?: string;
}

export function AnimatedBackground({
  gifSrc,
  alt,
  opacity = 0.1,
  position = "top-right",
  size = "medium",
  className = ""
}: AnimatedBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "center": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  };

  const sizeClasses = {
    small: "w-16 h-16 md:w-20 md:h-20",
    medium: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28",
    large: "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute ${positionClasses[position]} pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    >
      {isVisible && (
        <img
          src={`./src/assets/${gifSrc}`}
          alt={alt}
          className={`
            ${sizeClasses[size]} 
            object-contain 
            transition-opacity 
            duration-1000 
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            filter blur-[0.5px]
          `}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

// Composant pour GIF en overlay décoratif plus visible
interface DecorativeGifProps {
  gifSrc: string;
  alt: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function DecorativeGif({
  gifSrc,
  alt,
  className = "",
  size = "medium"
}: DecorativeGifProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const gifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (gifRef.current) {
      observer.observe(gifRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sizeClasses = {
    small: "w-12 h-12 md:w-16 md:h-16",
    medium: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    large: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
  };

  return (
    <div 
      ref={gifRef}
      className={`flex items-center justify-center ${className}`}
    >
      {isVisible && (
        <div className="relative group">
          <img
            src={`./src/assets/${gifSrc}`}
            alt={alt}
            className={`
              ${sizeClasses[size]} 
              object-contain 
              transition-all 
              duration-700 
              ${isLoaded ? 'opacity-80 scale-100' : 'opacity-0 scale-95'}
              group-hover:opacity-100 
              group-hover:scale-105
              rounded-lg
              shadow-sm
            `}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
    </div>
  );
} 