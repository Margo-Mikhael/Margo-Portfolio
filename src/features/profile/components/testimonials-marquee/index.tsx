import Image from "next/image";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

import { Panel, PanelHeader, PanelTitle } from "../panel";

const CERTIFICATES = [
  {
    src: "/images/certficates/Margo-Mikhael.jpg",
    alt: "Margo Mikhael certificate",
  },
  {
    src: "/images/certficates/Hacking-We.jpg",
    alt: "Hacking We certificate",
  },
  {
    src: "/images/certficates/ICPC-Contest_page-0001.jpg",
    alt: "ICPC Contest certificate",
  },
  {
    src: "/images/certficates/vodafone.jpg",
    alt: "Vodafone certificate",
  },
  {
    src: "/images/certficates/UC-37a8ac16-bcc3-4d1c-9ffb-69a598d1d571.jpg",
    alt: "Udemy certificate",
  },
  {
    src: "/images/certficates/9DD598E3-0F49-4CCE-8CBC-4EB4637C490A-export_page-0001.jpg",
    alt: "Certificate page 1",
  },
  {
    src: "/images/certficates/9DD598E3-0F49-4CCE-8CBC-4EB4637C490A-export_page-0003.jpg",
    alt: "Certificate page 3",
  },
];

export function TestimonialsMarquee() {
  return (
    <Panel
      id="certificates"
      className="before:z-11 after:z-10 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
    >
      <PanelHeader>
        <PanelTitle>Certificates</PanelTitle>
      </PanelHeader>

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent>
          {CERTIFICATES.map((cert) => (
            <MarqueeItem
              key={cert.src}
              className="mx-0 flex h-64 w-96 items-center justify-center border-r border-edge bg-background p-2"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={384}
                height={256}
                className="h-full w-full object-contain"
                unoptimized
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </Panel>
  );
}
