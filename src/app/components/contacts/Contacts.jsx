"use client";

import { useState } from "react";
import {
    FaInstagram,
    FaTelegram,
    FaPhone,
    FaMapPin,
    FaClock,
    FaTaxi
} from "react-icons/fa";
import "./contact.css";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const latitude = "39.757280";
    const longitude = "64.433626";
    const address = "Бухара, ул. Мустакиллик, 37/1";
    const fullAddress = "Nastarin Restaurant, " + address;
    const phone = "+998914448048";

    const handleYandexTaxi = () => {
        const deeplink = `yandextaxi://route/?end-lat=${latitude}&end-lon=${longitude}&end-address=${encodeURIComponent(fullAddress)}`;
        const fallbackUrl = `https://taxi.yandex.uz/?rto=${latitude},${longitude}&text=${encodeURIComponent(fullAddress)}`;

        window.location.href = deeplink;
        setTimeout(() => {
            window.location.href = fallbackUrl;
        }, 500);
    };

    const copyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const workingHours = [
        { day: "Понедельник - Воскресенье", hours: "09:00 - 0:00" },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-background">
                <div className="contact-bg-circle c1" />
                <div className="contact-bg-circle c2" />
                <div className="contact-bg-circle c3" />
            </div>

            <div className="container">
                <div className="contact-header">
                    <span className="contact-badge animate-fade-up">✦ СВЯЗЬ</span>
                    <h2 className="section-title animate-fade-up delay-1">
                        Свяжитесь с <span className="title-highlight">нами</span>
                    </h2>
                    <p className="contact-subtitle animate-fade-up delay-2">
                        Мы всегда рады помочь вам выбрать идеальный букет
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Информация */}
                    <div className="contact-info animate-fade-up delay-3">
                        <div className="info-card">
                            <div className="info-icon-wrapper phone">
                                <FaPhone className="info-icon" />
                            </div>
                            <h3 className="info-title">Телефон</h3>
                            <a href={`tel:${phone}`} className="info-link">
                                {phone}
                            </a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon-wrapper location">
                                <FaMapPin className="info-icon" />
                            </div>
                            <h3 className="info-title">Адрес</h3>
                            <p className="info-text">{address}</p>
                            <div className="info-actions">
                                <button onClick={handleYandexTaxi} className="info-btn route">
                                    <FaTaxi /> Вызвать такси
                                </button>
                                <button onClick={copyAddress} className="info-btn copy">
                                    {copied ? "✓ Скопировано" : "📋 Копировать"}
                                </button>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon-wrapper hours">
                                <FaClock className="info-icon" />
                            </div>
                            <h3 className="info-title">Режим работы</h3>
                            <div className="hours-list">
                                {workingHours.map((item, index) => (
                                    <div key={index} className="hours-item">
                                        <span className="hours-day">{item.day}</span>
                                        <span className="hours-time">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="info-card social">
                            <h3 className="info-title">Мы в соцсетях</h3>
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/sveti.mira.bukhara/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link instagram"
                                >
                                    <FaInstagram />
                                    <span>Instagram</span>
                                </a>
                                <a
                                    href="https://t.me/svetimira_bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link telegram"
                                >
                                    <FaTelegram />
                                    <span>Telegram</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="contact-map animate-fade-up delay-4">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps?q=39.757280,64.433626&z=17&output=embed"
                                width="100%"
                                height="100%"
                                className="map-iframe"
                                allowFullScreen
                                loading="lazy"
                                title="Карта магазина Цветы мира в Бухаре"
                            />
                            <div className="map-overlay">
                                <div className="map-pin">
                                    <FaMapPin className="pin-icon" />
                                    <span className="pin-text">Цветы мира</span>
                                </div>
                            </div>
                        </div>

                        <div className="map-actions">
                            <button onClick={handleYandexTaxi} className="map-taxi-btn">
                                <FaTaxi className="taxi-icon" />
                                Вызвать такси
                            </button>
                            <a
                                href="https://www.google.com/maps/dir//39.757280,64.433626"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-google-btn"
                            >
                                <FaMapPin /> Открыть в Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}