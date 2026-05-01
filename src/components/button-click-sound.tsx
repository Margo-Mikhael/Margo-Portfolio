"use client";

import { useEffect } from "react";

import { useSound } from "@/hooks/use-sound";

export function ButtonClickSound() {
  const playClick = useSound("/audio/ui-sounds/click.wav");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest<HTMLElement>(
        "button, [data-slot='button'], [role='button']"
      );
      if (!button) return;
      if (button.hasAttribute("disabled")) return;
      if (button.getAttribute("aria-disabled") === "true") return;

      playClick();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [playClick]);

  return null;
}
