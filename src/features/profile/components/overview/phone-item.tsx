"use client";

import { MessageCircleIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);
  const whatsappNumber = phoneNumberDecoded.replace(/\D/g, "");

  return (
    <IntroItem>
      <IntroItemIcon>
        <MessageCircleIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `https://wa.me/${whatsappNumber}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            isClient
              ? `WhatsApp ${formatPhoneNumber(phoneNumberDecoded)}`
              : "Phone number"
          }
        >
          {isClient
            ? formatPhoneNumber(phoneNumberDecoded)
            : "[Phone protected]"}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}
