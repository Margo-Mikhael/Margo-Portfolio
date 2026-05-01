"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const activeHash = useActiveSection(items);

  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const [hrefPath, hrefHash] = href.split("#");
        const isOnSamePath = pathname === (hrefPath || "/");
        const matchesHash = hrefHash ? activeHash === hrefHash : !activeHash;
        const active =
          activeId === href ||
          (href === "/" // Home page
            ? ["/", "/index"].includes(activeId || "")
            : isOnSamePath && matchesHash);

        return (
          <NavItem key={href} href={href} active={active}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

function useActiveSection(items: NavItem[]) {
  const [activeHash, setActiveHash] = useState<string | undefined>(undefined);

  useEffect(() => {
    const ids = items
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveHash(visible[0].target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return activeHash;
}

export function NavItem({
  active,
  className,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground select-none",
        "hover:text-foreground active:opacity-70",
        active && "text-foreground",
        className
      )}
      {...props}
    />
  );
}
