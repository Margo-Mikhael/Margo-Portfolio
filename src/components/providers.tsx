"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

import { ButtonClickSound } from "./button-click-sound";
import { Toaster } from "./ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        <AppProgressProvider
          color="var(--foreground)"
          height="5px"
          delay={500}
          options={{ showSpinner: false }}
        >
          {children}
        </AppProgressProvider>
        <Toaster position="top-center" />
        <SmoothCursor />
        <ButtonClickSound />
      </ThemeProvider>
    </JotaiProvider>
  );
}
