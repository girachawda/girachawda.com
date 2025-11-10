"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/about", label: "About" },
    // { href: "/insights", label: "Insights" },
  ];

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Gira Chawda
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center border-t border-border bg-background">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
