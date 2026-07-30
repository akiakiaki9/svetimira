"use client";

import { useEffect, useRef } from "react";
import { FaInstagram, FaTelegram, FaPhone } from "react-icons/fa";
import "./hero.css";

export default function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Замедляем видео для более эстетичного эффекта
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <section className="hero">
            {/* Видео фон */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Оверлей с градиентом */}
            <div className="hero-overlay" />

            {/* Контент */}
            <div className="hero-content container">

                <h1 className="hero-title animate-fade-up delay-2">
                    Цветы, которые <br />
                    <span className="hero-title-highlight">говорят вместо слов</span>
                </h1>

                <p className="hero-subtitle animate-fade-up delay-3">
                    Букеты и композиции премиум-класса в Бухаре. <br />
                    Доставка, нежность и безупречный стиль.
                </p>

                <div className="hero-buttons animate-fade-up delay-4">
                    <a href="#catalog" className="btn-primary hero-btn">
                        Смотреть каталог
                    </a>
                    <a href="tel:+998914448048" className="btn-outline hero-btn">
                        <FaPhone className="hero-btn-icon" /> Заказать
                    </a>
                </div>

                <div className="hero-socials animate-fade-up delay-5">
                    <a
                        href="https://www.instagram.com/sveti.mira.bukhara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-link"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://t.me/svetimira_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-link"
                        aria-label="Telegram"
                    >
                        <FaTelegram />
                    </a>
                </div>
            </div>

            {/* Индикатор прокрутки */}
            <div className="hero-scroll-indicator animate-fade-up delay-5">
                <span className="scroll-text">Прокрутите вниз</span>
                <div className="scroll-line">
                    <div className="scroll-dot" />
                </div>
            </div>
        </section>
    );
}