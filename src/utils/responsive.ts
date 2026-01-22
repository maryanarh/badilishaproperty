// Responsive utility functions for better mobile-first development

/**
 * Check if the current device is mobile based on screen width
 * @returns boolean indicating if device is mobile
 */
export const isMobile = (): boolean => {
  return window.innerWidth < 768;
};

/**
 * Check if the current device is tablet based on screen width
 * @returns boolean indicating if device is tablet
 */
export const isTablet = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Check if the current device is desktop based on screen width
 * @returns boolean indicating if device is desktop
 */
export const isDesktop = (): boolean => {
  return window.innerWidth >= 1024;
};

/**
 * Get current breakpoint name
 * @returns string representing current breakpoint
 */
export const getBreakpoint = (): string => {
  const width = window.innerWidth;
  if (width < 475) return 'xs';
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  if (width < 1280) return 'xl';
  return '2xl';
};

/**
 * Debounce function for resize events
 * @param func - function to debounce
 * @param wait - wait time in milliseconds
 * @returns debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }) as T;
};

/**
 * Add responsive event listener
 * @param callback - function to call on resize
 * @param debounceMs - debounce time in milliseconds
 * @returns cleanup function
 */
export const addResponsiveListener = (
  callback: () => void,
  debounceMs: number = 250
): (() => void) => {
  const debouncedCallback = debounce(callback, debounceMs);
  window.addEventListener('resize', debouncedCallback);
  
  return () => {
    window.removeEventListener('resize', debouncedCallback);
  };
};

/**
 * Get responsive image size based on screen width
 * @param mobileSize - size for mobile (default: '400')
 * @param tabletSize - size for tablet (default: '800')
 * @param desktopSize - size for desktop (default: '1200')
 * @returns appropriate image size string
 */
export const getResponsiveImageSize = (
  mobileSize: string = '400',
  tabletSize: string = '800',
  desktopSize: string = '1200'
): string => {
  if (isMobile()) return mobileSize;
  if (isTablet()) return tabletSize;
  return desktopSize;
};

/**
 * Responsive navigation helper
 * @returns object with navigation helpers
 */
export const responsiveNav = {
  isMobile,
  isTablet,
  isDesktop,
  getBreakpoint,
};

/**
 * Touch device detection
 * @returns boolean indicating if device supports touch
 */
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Safe area insets for mobile devices
 * @returns object with safe area values
 */
export const getSafeAreaInsets = () => {
  return {
    top: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-top') || '0px',
    bottom: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-bottom') || '0px',
    left: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-left') || '0px',
    right: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-right') || '0px',
  };
};

/**
 * Responsive font size calculation
 * @param minSize - minimum font size in rem
 * @param maxSize - maximum font size in rem
 * @param minWidth - minimum viewport width in px
 * @param maxWidth - maximum viewport width in px
 * @returns clamp() value for responsive font sizing
 */
export const responsiveFontSize = (
  minSize: number,
  maxSize: number,
  minWidth: number = 320,
  maxWidth: number = 1920
): string => {
  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const intersection = minSize - slope * minWidth;
  
  return `clamp(${minSize}rem, ${intersection}rem + ${slope * 100}vw, ${maxSize}rem)`;
};

type TestimonialsLayoutConfig = {
  sectionPaddingY: string;
  containerPaddingX: string;
  containerMaxWidth: string;
  heroHeight: string;
};

export const getTestimonialsLayoutConfig = (): TestimonialsLayoutConfig => {
  const breakpoint = getBreakpoint();

  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return {
      sectionPaddingY: 'py-16',
      containerPaddingX: 'px-4',
      containerMaxWidth: 'max-w-3xl',
      heroHeight: 'h-[420px] md:h-[400px]',
    };
  }

  if (breakpoint === 'md') {
    return {
      sectionPaddingY: 'py-20',
      containerPaddingX: 'px-6',
      containerMaxWidth: 'max-w-5xl',
      heroHeight: 'h-[460px] md:h-[400px]',
    };
  }

  if (breakpoint === 'lg') {
    return {
      sectionPaddingY: 'py-24',
      containerPaddingX: 'px-6',
      containerMaxWidth: 'max-w-6xl',
      heroHeight: 'h-[480px] md:h-[400px]',
    };
  }

  return {
    sectionPaddingY: 'py-28',
    containerPaddingX: 'px-6',
    containerMaxWidth: 'max-w-7xl',
    heroHeight: 'h-[500px] md:h-[400px]',
  };
};

// Example usage:
// const fontSize = responsiveFontSize(1, 2); // 1rem to 2rem responsive
// style={{ fontSize }} or className={`text-[${responsiveFontSize(1, 2)}]`}
