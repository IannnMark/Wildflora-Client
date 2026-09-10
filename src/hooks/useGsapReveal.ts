"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Run layout effects on the client, but fall back to a no-op on the server so
 * Next.js does not warn during SSR.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealOptions = {
  /** Distance (px) the targets travel on the y axis while fading in. */
  y?: number;
  /** Tween duration in seconds. */
  duration?: number;
  /** Delay between each target when a `selector` is provided. */
  stagger?: number;
  /** Delay before the animation starts. */
  delay?: number;
  /** ScrollTrigger start position. Ignored when `scroll` is false. */
  start?: string;
  /**
   * When true (default) the animation is tied to the element entering the
   * viewport. When false it plays as soon as the component mounts.
   */
  scroll?: boolean;
  /**
   * Optional CSS selector, scoped to the ref, whose matches are animated with a
   * stagger. When omitted the ref element itself is animated.
   */
  selector?: string;
};

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null);
  const {
    y = 24,
    duration = 0.8,
    stagger = 0.12,
    delay = 0,
    start = "top 85%",
    scroll = true,
    selector,
  } = options;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element[] = selector
      ? Array.from(el.querySelectorAll(selector))
      : [el];
    if (targets.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { autoAlpha: 0, y });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        ...(scroll
          ? { scrollTrigger: { trigger: el, start, once: true } }
          : {}),
      });
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, delay, start, scroll, selector]);

  return ref;
}
