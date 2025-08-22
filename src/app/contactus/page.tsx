'use client';
import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
const geniusSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geniusMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export default function MainPage() {
  return (
    <div className={`${geniusSans.variable} ${geniusMono.variable} antialiased`}>
      <h1>Welcome to the Tour Guide App</h1>
      <p>This is the main page.</p>
    </div>
  );
}