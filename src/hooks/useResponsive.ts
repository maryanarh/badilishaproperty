import { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop, getBreakpoint, addResponsiveListener } from '../utils/responsive';

/**
 * Hook to get current responsive state
 * @returns object with current responsive state
 */
export const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: isMobile(),
    isTablet: isTablet(),
    isDesktop: isDesktop(),
    breakpoint: getBreakpoint(),
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setState({
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
        breakpoint: getBreakpoint(),
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const cleanup = addResponsiveListener(handleResize, 100);
    
    // Initial call
    handleResize();

    return cleanup;
  }, []);

  return state;
};

/**
 * Hook to detect if device supports touch
 * @returns boolean indicating touch support
 */
export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouch;
};

/**
 * Hook to handle responsive navigation
 * @returns object with navigation helpers
 */
export const useResponsiveNav = () => {
  const { isMobile, isTablet, isDesktop, breakpoint } = useResponsive();
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    breakpoint,
    shouldShowMobileMenu: isMobile || isTablet,
    shouldShowDesktopNav: isDesktop,
  };
};

/**
 * Hook to handle responsive images
 * @param mobileSize - size for mobile screens
 * @param tabletSize - size for tablet screens  
 * @param desktopSize - size for desktop screens
 * @returns appropriate image size for current screen
 */
export const useResponsiveImage = (
  mobileSize: string = '400',
  tabletSize: string = '800',
  desktopSize: string = '1200'
) => {
  const { isMobile, isTablet } = useResponsive();
  
  if (isMobile) return mobileSize;
  if (isTablet) return tabletSize;
  return desktopSize;
};

/**
 * Hook to handle responsive typography
 * @param mobileSize - font size for mobile (rem)
 * @param tabletSize - font size for tablet (rem)
 * @param desktopSize - font size for desktop (rem)
 * @returns appropriate font size class
 */
export const useResponsiveTypography = (
  mobileSize: string = 'text-base',
  tabletSize: string = 'text-lg',
  desktopSize: string = 'text-xl'
) => {
  const { isMobile, isTablet } = useResponsive();
  
  if (isMobile) return mobileSize;
  if (isTablet) return tabletSize;
  return desktopSize;
};

/**
 * Hook to handle safe area insets for mobile devices
 * @returns object with safe area values
 */
export const useSafeArea = () => {
  const [safeArea, setSafeArea] = useState({
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
  });

  useEffect(() => {
    const updateSafeArea = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      setSafeArea({
        top: computedStyle.getPropertyValue('--safe-area-top') || '0px',
        bottom: computedStyle.getPropertyValue('--safe-area-bottom') || '0px',
        left: computedStyle.getPropertyValue('--safe-area-left') || '0px',
        right: computedStyle.getPropertyValue('--safe-area-right') || '0px',
      });
    };

    updateSafeArea();
    const cleanup = addResponsiveListener(updateSafeArea, 250);
    
    return cleanup;
  }, []);

  return safeArea;
};

// Example usage:
// const { isMobile, isTablet, isDesktop, breakpoint } = useResponsive();
// const isTouch = useTouchDevice();
// const imageSize = useResponsiveImage('400', '800', '1200');
// const fontSize = useResponsiveTypography('text-sm', 'text-base', 'text-lg');