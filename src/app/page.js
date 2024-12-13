import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import TeamLogos from "./components/TeamLogos";
import BentoGrid from "./components/BentoGrid";

export const metadata = {
  title: "TurfTimes",
  description: "Premier League News App",
};

export default function HomePage() {
  return (
    <html lang="en">
      <head />
      <body>
        <TeamLogos />
        <Navbar />
        <div className="navbar-underline" />
        <main>
          <BentoGrid />
        </main>
      </body>
    </html>
  );
}
