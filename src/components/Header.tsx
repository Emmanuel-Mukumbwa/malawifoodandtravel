"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleRouteChange = () => closeMenu();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/itineraries", label: "Itineraries" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span>Malawi</span> Food & Travel
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}