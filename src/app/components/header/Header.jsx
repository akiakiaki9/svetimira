"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaTelegram, FaPhone } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo-wrapper">
            <div className="logo-circle">
              <img
                src="/images/logo.PNG"
                alt="Цветы мира"
                className="logo-img"
              />
            </div>
            <span className="logo-text">
              <span className="logo-text-highlight">Цветы</span> мира
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#catalog" className="nav-link">Каталог</a>
            <a href="#about" className="nav-link">О нас</a>
            <a href="#contact" className="nav-link">Контакты</a>
            <a href="tel:+998914448048" className="btn-phone">
              <FaPhone className="icon-phone" /> +998 91 444 80 48
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className={`mobile-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu} />

        {/* Mobile Menu - без дублирующегося логотипа */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <button className="mobile-close" onClick={closeMenu}>
            <HiX />
          </button>

          <nav className="mobile-nav">
            <a href="#catalog" className="mobile-nav-link" onClick={closeMenu}>
              Каталог
            </a>
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
              О нас
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              Контакты
            </a>
            <a href="tel:+998914448048" className="mobile-btn-phone" onClick={closeMenu}>
              <FaPhone className="icon-phone" /> Позвонить
            </a>
          </nav>

          <div className="mobile-socials">
            <a
              href="https://www.instagram.com/sveti.mira.bukhara/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/svetimira_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}