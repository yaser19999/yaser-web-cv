'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds (adjust timing as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence >
      {isLoading && (
        <motion.div
          key="preloader"
          // Slide up and fade out on exit
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/55 backdrop-blur-2xl"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 3, opacity: 0 }}
            animate={{ scale: [3, 3.1, 3], opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/elnagar.png" // Replace with your logo path in /public
              alt="Logo"
              width={120}
              height={120}
              priority
              className="w-auto h-24"
            />
            {/* Optional subtle loading bar or text */}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}