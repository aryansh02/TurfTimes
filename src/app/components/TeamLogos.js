import React from "react";
import Image from "next/image";

const teamLinks = [
  {
    href: "https://www.arsenal.com",
    src: "/images/Arsenal.png",
    alt: "Arsenal",
  },
  {
    href: "https://www.avfc.co.uk",
    src: "/images/AstonVilla.png",
    alt: "Aston Villa",
  },
  {
    href: "https://www.afcb.co.uk",
    src: "/images/Bournemouth.png",
    alt: "Bournemouth",
  },
  {
    href: "https://www.brentfordfc.com",
    src: "/images/Brentford.png",
    alt: "Brentford",
  },
  {
    href: "https://www.brightonandhovealbion.com",
    src: "/images/Brighton.png",
    alt: "Brighton",
  },
  {
    href: "https://www.chelseafc.com",
    src: "/images/Chelsea.png",
    alt: "Chelsea",
  },
  {
    href: "https://www.cpfc.co.uk",
    src: "/images/CrystalPalace.png",
    alt: "Crystal Palace",
  },
  {
    href: "https://www.evertonfc.com",
    src: "/images/Everton.png",
    alt: "Everton",
  },
  {
    href: "https://www.fulhamfc.com",
    src: "/images/Fulham.png",
    alt: "Fulham",
  },
  {
    href: "https://www.itfc.co.uk",
    src: "/images/IpswichTown.png",
    alt: "Ipswich Town",
  },
  {
    href: "https://www.lcfc.com",
    src: "/images/LeicesterCity.png",
    alt: "Leicester City",
  },
  {
    href: "https://www.liverpoolfc.com",
    src: "/images/Liverpool.png",
    alt: "Liverpool",
  },
  {
    href: "https://www.mancity.com",
    src: "/images/ManchesterCity.png",
    alt: "Manchester City",
  },
  {
    href: "https://www.manutd.com",
    src: "/images/ManchesterUnited.png",
    alt: "Manchester United",
  },
  {
    href: "https://www.nufc.co.uk",
    src: "/images/NewcastleUnited.png",
    alt: "Newcastle United",
  },
  {
    href: "https://www.nottinghamforest.co.uk",
    src: "/images/NottinghamForest.png",
    alt: "Nottingham Forest",
  },
  {
    href: "https://www.southamptonfc.com",
    src: "/images/Southampton.png",
    alt: "Southampton",
  },
  {
    href: "https://www.tottenhamhotspur.com",
    src: "/images/TottenhamHotspur.png",
    alt: "Tottenham Hotspur",
  },
  {
    href: "https://www.whufc.com",
    src: "/images/WestHamUnited.png",
    alt: "West Ham United",
  },
  {
    href: "https://www.wolves.co.uk",
    src: "/images/WolverhamptonWanderers.png",
    alt: "Wolves",
  },
];

export default function TeamLogos() {
  return (
    <div className="team-logos-container">
      {teamLinks.map((team, index) => (
        <a
          key={index}
          href={team.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={team.src} alt={team.alt} className="team-logo" />
        </a>
      ))}
    </div>
  );
}
