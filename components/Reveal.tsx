"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function elementIsInViewport(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  return r.top < vh && r.bottom > 0;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: 0 | 1 | 2 | 3;
  /** When true, direct `.reveal-stagger-grid` child cells animate in sequence after reveal. */
  staggerChildren?: boolean;
};

export function Reveal({
  className = "",
  children,
  style,
  stagger = 0,
  staggerChildren = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    if (elementIsInViewport(el)) {
      setIsIntersecting(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsIntersecting(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 },
    );

    io.observe(el);

    const raf = requestAnimationFrame(() => {
      if (elementIsInViewport(el)) {
        setIsIntersecting(true);
        io.disconnect();
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [prefersReducedMotion]);

  const visible = prefersReducedMotion || isIntersecting;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${staggerChildren ? "reveal--stagger-children" : ""} ${className}`.trim()}
      style={style}
      data-stagger={stagger > 0 ? stagger : undefined}
    >
      {children}
    </div>
  );
}
