import './globals.css'; 
import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import TeamLogos from './components/TeamLogos';

export const metadata = {
  title: 'TurfTimes',
  description: 'Premier League News App',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <TeamLogos /> 
        <Navbar />
        <div className="navbar-underline" />
        {children}
      </body>
    </html>
  );
}
