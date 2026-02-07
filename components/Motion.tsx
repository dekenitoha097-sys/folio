'use client';

import { motion, useScroll, useTransform, useSpring, useInView, Variants } from 'framer-motion';
import { useRef, useEffect, useState, useCallback, CSSProperties } from 'react';

// ============================================
// SCROLL-BASED ANIMATIONS
// ============================================

/**
 * Fade In Up - Smooth entrance animation from bottom
 */
export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.1
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Fade In - Simple opacity fade
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  amount = 0.1
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Slide In Left - Entrance from left side
 */
export const SlideInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.1
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Slide In Right - Entrance from right side
 */
export const SlideInRight = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.1
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scale In - Smooth scale entrance
 */
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.1
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// STAGGERED ANIMATIONS
// ============================================

/**
 * Stagger Container - For staggered children animations
 */
export const StaggerContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } }
      } as Variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Item - Individual staggered animation item
 */
export const StaggerItem = ({
  children,
  direction = 'up',
  duration = 0.5
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <motion.div variants={variants}>
      {children}
    </motion.div>
  );
};

// ============================================
// PARALLAX EFFECTS
// ============================================

/**
 * Parallax Section - Full section with scroll parallax
 */
export const ParallaxSection = ({
  children,
  speed = 0.5,
  className = ''
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/**
 * Parallax Image - Image with scroll parallax effect
 */
export const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.3
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        style={{ y, scale: 1.1 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// ============================================
// MOUSE PARALLAX
// ============================================

/**
 * Mouse Parallax Container - Creates mouse-based parallax effect
 */
export const MouseParallax = ({
  children,
  className = '',
  strength = 20
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      animate={{
        x: mousePosition.x * strength,
        y: mousePosition.y * strength
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Mouse Tilt Card - Card that tilts based on mouse position
 */
export const MouseTiltCard = ({
  children,
  className = '',
  perspective = 1000,
  tiltStrength = 10
}: {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  tiltStrength?: number;
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltStrength;
    const rotateY = ((x - centerX) / centerX) * tiltStrength;

    setRotate({ x: rotateX, y: rotateY });
  }, [tiltStrength]);

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: 'preserve-3d' as const
      }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// HOVER EFFECTS
// ============================================

/**
 * Hover Scale - Scale on hover
 */
export const HoverScale = ({
  children,
  scale = 1.05,
  duration = 0.3,
  className = ''
}: {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Hover Lift - Lift up on hover with shadow
 */
export const HoverLift = ({
  children,
  lift = -8,
  duration = 0.3,
  className = ''
}: {
  children: React.ReactNode;
  lift?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: lift }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Magnetic Button - Button that follows mouse slightly
 */
export const MagneticButton = ({
  children,
  className = '',
  strength = 0.3
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = (e.clientX - rect.left - centerX) * strength;
    const y = (e.clientY - rect.top - centerY) * strength;

    setPosition({ x, y });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// TEXT ANIMATIONS
// ============================================

/**
 * Text Reveal - Character by character reveal
 */
export const TextReveal = ({
  text,
  className = '',
  duration = 0.05,
  delay = 0
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}) => {
  const letters = text.split('');

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * duration,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

/**
 * Word Reveal - Word by word reveal
 */
export const WordReveal = ({
  text,
  className = '',
  duration = 0.1,
  delay = 0
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * duration,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

/**
 * Gradient Text - Animated gradient text
 */
export const GradientText = ({
  children,
  className = '',
  colors = ['#10b981', '#3b82f6', '#8b5cf6', '#10b981']
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
}) => {
  return (
    <motion.span
      className={className}
      style={{
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '300% 100%'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity
      }}
    >
      <span style={{ 
        backgroundClip: 'text', 
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
        display: 'inline-block'
      }}>
        {children}
      </span>
    </motion.span>
  );
};

// ============================================
// CURSOR EFFECTS
// ============================================

/**
 * Custom Cursor - Custom cursor that follows mouse
 */
export const CustomCursor = ({
  className = '',
  size = 20,
  color = '#10b981'
}: {
  className?: string;
  size?: number;
  color?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className={`fixed pointer-events-none z-[9999] ${className}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        x: '-50%',
        y: '-50%'
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.8, 0.4, 0.8]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `2px solid ${color}`,
          background: `${color}20`
        }}
      />
    </motion.div>
  );
};

/**
 * Spotlight Card - Card with spotlight effect on hover
 */
export const SpotlightCard = ({
  children,
  className = '',
  gradient = 'radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.1), transparent 40%)'
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
    (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', '0px');
    (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', '0px');
  }, []);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px'
      } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: gradient
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

// ============================================
// PAGE TRANSITIONS
// ============================================

/**
 * Page Transition - Smooth page load transition
 */
export const PageTransition = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Section Separator - Animated section divider
 */
export const AnimatedSeparator = ({
  className = '',
  height = 1
}: {
  className?: string;
  height?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' as const }}
      style={{
        height,
        background: 'linear-gradient(90deg, transparent, #10b981, transparent)',
        transformOrigin: 'center'
      }}
    />
  );
};

// ============================================
// UTILITY HOOKS
// ============================================

/**
 * Use scroll progress hook
 */
export const useScrollProgress = (threshold = 0) => {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({ offset: [`start ${threshold}`, 'end start'] });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  return progress;
};

/**
 * Check if device is mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

/**
 * Throttled mouse position hook
 */
export const useThrottledMousePosition = (throttleMs = 50) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let lastCall = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastCall >= throttleMs) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastCall = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [throttleMs]);

  if (!isClient) return { x: 0, y: 0 };
  return mousePosition;
};
