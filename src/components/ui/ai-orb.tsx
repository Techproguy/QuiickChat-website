"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: 28,
  md: 44,
  lg: 88,
  xl: 160,
  hero: 280,
} as const;

export function AIOrb({
  size = "md",
  className,
  pulse = true,
  rings = false,
}: {
  size?: keyof typeof SIZES;
  className?: string;
  pulse?: boolean;
  rings?: boolean;
}) {
  const px = SIZES[size];

  return (
    <div
      className={cn("relative grid place-items-center", className)}
      style={{ width: px, height: px }}
      aria-hidden="true"
    >
      {rings && (
        <>
          <motion.span
            className="absolute rounded-full border border-accent/30"
            style={{ inset: -px * 0.35 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute rounded-full border border-accent/20"
            style={{ inset: -px * 0.65 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0, 0.35] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </>
      )}
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          inset: -px * 0.25,
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
        animate={pulse ? { opacity: [0.6, 1, 0.6] } : undefined}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative overflow-hidden rounded-full"
        style={{
          width: px,
          height: px,
          background:
            "conic-gradient(from 180deg, var(--accent-bright), var(--accent-alt), var(--accent), var(--accent-bright))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-[12%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.85), rgba(255,255,255,0) 40%), radial-gradient(circle at 65% 70%, var(--accent) 0%, var(--on-accent) 100%)",
          }}
        />
      </motion.div>
      {pulse && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: px,
            height: px,
            boxShadow: "0 0 0 1px var(--accent-glow)",
          }}
          animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
