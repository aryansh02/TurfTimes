import React from "react";
import Link from "next/link";
import ClubDropdown from "./ClubDropdown";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo text-2xl">TurfTimes</div>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <ClubDropdown />
        </div>
      </nav>
      <div className="navbar-underline"></div>
    </div>
  );
}
