"use client";

import { useEffect } from "react";

import { useSound } from "@/hooks/use-sound";

export function ButtonClickSound() {
  const playClick = useSound("/audio/ui-sounds/click.wav");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest<HTMLElement>(
        "button, [data-slot='button'], [role='button'], a[href]"
      );
      if (!clickable) return;
      if (clickable.hasAttribute("disabled")) return;
      if (clickable.getAttribute("aria-disabled") === "true") return;

      playClick();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [playClick]);

  return null;
}
