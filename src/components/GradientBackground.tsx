"use client";

import { useEffect, useRef } from "react";
import { Gradient } from "whatamesh";
import { easeIn, easeInOut, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientColor3?: string;
  gradientColor4?: string;
  fixed?: boolean; // Add a prop to control fixed positioning
}

const GradientBackground = ({
  children,
  className,
  gradientColor1 = "#449ce4",
  gradientColor2 = "#2f8bc1",
  gradientColor3 = "#ccbeee",
  gradientColor4 = "#4c57f6",
  fixed = false,
}: GradientBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.style.setProperty("--gradient-color-1", gradientColor1);
      canvas.style.setProperty("--gradient-color-2", gradientColor2);
      canvas.style.setProperty("--gradient-color-3", gradientColor3);
      canvas.style.setProperty("--gradient-color-4", gradientColor4);

      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    }
  }, [gradientColor1, gradientColor2, gradientColor3, gradientColor4]);

  return (
    <motion.canvas
      id="gradient-canvas"
      ref={canvasRef}
      initial={{ opacity: 0 }} // Start transparent
      animate={{ opacity: 0.8 }} // Fade to 80% opacity
      transition={{ duration: 1, ease: easeInOut }} // Smooth fade-in over 1 second
      className={cn(
        "h-full w-full transition-opacity duration-500",
        fixed ? "fixed inset-0 -z-10" : "absolute -z-10",
        className
      )}
    >
      {children}
    </motion.canvas>
  );
};

export default GradientBackground;
