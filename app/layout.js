'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';



// Yeh component sirf title change karega — kuch render nahi karega
function DynamicTitle() {
  useEffect(() => {
    const sections = [
      { id: 'hero', title: 'Ayan Khalid' },
      { id: 'about', title: 'About – Ayan Khalid' },
      { id: 'projects', title: 'Projects – Ayan Khalid' },
      { id: 'contact', title: 'Contact – Ayan Khalid' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // thoda buffer

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            document.title = section.title;
            return;
          }
        }
      }
      // Agar top pe hai
      document.title = 'Ayan Khalid';
    };

    handleScroll(); // pehli baar bhi check kare
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <DynamicTitle />
        {children}
      </body>
    </html>
  );
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // ye required hai agar variable use kar rahe ho
});



