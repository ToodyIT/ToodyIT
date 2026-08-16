import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twJoin } from "tailwind-merge";
import Link from "next/link";

export const landingEase = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal: FC<RevealProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    transition={{ duration: 0.7, delay, ease: landingEase }}
    viewport={{ once: true, amount: 0.18 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>
);

export const ClipReveal = Reveal;

export const Eyebrow: FC<{ children: ReactNode }> = ({ children }) => (
  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
    {children}
  </p>
);

export const Logo: FC<{ className?: string; href?: string }> = ({
  className,
  href = "/",
}) => (
  <Link
    aria-label="ToodyIT"
    className={twJoin(
      "font-display inline-flex items-baseline text-xl font-bold leading-none tracking-tight sm:text-2xl",
      className
    )}
    href={href}
  >
    <span className="text-fg">Toody</span>
    <span className="text-brand">IT</span>
  </Link>
);
