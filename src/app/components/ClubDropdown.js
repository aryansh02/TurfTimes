"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";

const clubs = [
  { name: "Arsenal", url: "https://www.arsenal.com/history" },
  { name: "Aston Villa", url: "https://www.avfc.co.uk/club/history" },
  { name: "Bournemouth", url: "https://www.afcb.co.uk/club" },
  { name: "Brentford", url: "https://www.brentfordfc.com/en/history" },
  {
    name: "Brighton",
    url: "https://www.brightonandhovealbion.com/pages/en/club-history",
  },
  {
    name: "Chelsea",
    url: "https://www.chelseafc.com/en/history",
  },
  {
    name: "Crystal Palace",
    url: "https://www.cpfc.co.uk/information/crystal-palace-history/",
  },
  { name: "Everton", url: "https://www.evertonfc.com/club/history" },
  { name: "Fulham", url: "https://www.fulhamfc.com/club/history" },
  { name: "Ipswich Town", url: "https://www.itfc.co.uk/club/history" },
  { name: "Leicester City", url: "https://www.lcfc.com/history?lang=en" },
  { name: "Liverpool", url: "https://www.liverpoolfc.com/history" },
  { name: "Manchester City", url: "https://www.mancity.com/history" },
  { name: "Manchester United", url: "https://www.manutd.com/en/history" },
  { name: "Newcastle United", url: "https://www.newcastleunited.com/en/club" },
  {
    name: "Nottingham Forest",
    url: "https://www.nottinghamforest.co.uk/club-information",
  },
  { name: "Southampton", url: "https://www.southamptonfc.com/en/club" },
  {
    name: "Tottenham Hotspur",
    url: "https://www.tottenhamhotspur.com/the-club/",
  },
  { name: "West Ham United", url: "https://www.whufc.com/club/history" },
  { name: "Wolves", url: "https://www.wolves.co.uk/club/history" },
];

export default function ClubDropdown() {
  return (
    <div className="dropdown">
      <button className="dropdown-button no-gradient">
        Clubs <FaChevronDown className="arrow-icon" />
      </button>
      <div className="dropdown-menu right-align">
        <div className="dropdown-column">
          {clubs.slice(0, 10).map((club, index) => (
            <a
              key={index}
              href={club.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              {club.name}
            </a>
          ))}
        </div>
        <div className="dropdown-column">
          {clubs.slice(10).map((club, index) => (
            <a
              key={index}
              href={club.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              {club.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
