"use client";

import { useState } from "react";
import { FaTimes, FaInstagram, FaHeart } from "react-icons/fa";
import "./catalog.css";

// Массив вдохновляющих фраз для фотографий
const quotes = [
    "Цветы — это улыбка природы",
    "В каждом лепестке — частичка счастья",
    "Цветы говорят там, где молчат слова",
    "Красота, которая не требует перевода",
    "Мгновение, застывшее в лепестках",
    "Язык цветов понятен без слов",
    "Нежность, подаренная природой",
    "Аромат счастья в каждой композиции",
    "Цветы — это поэзия в реальности",
    "Каждый букет — маленькая история",
    "Вдохновение, рожденное природой",
    "Эмоции, заключенные в бутонах",
    "Красота, которая лечит душу",
    "Цветы дарят радость без причины",
    "Искусство быть прекрасным",
    "Магия, которую можно потрогать",
    "Цветы — это настроение в подарок",
    "Симфония красок и ароматов",
    "Прикосновение к прекрасному",
    "Цветы — маленькие чудеса природы",
    "Эстетика в каждой детали",
    "Цветы — это искусство природы",
    "Нежность, достойная королевы",
    "Красота в каждой линии",
    "Цветы — это чувства материализованные",
    "Идеальный баланс формы и цвета",
    "Природа — лучший дизайнер",
    "Цветы — это счастье, которое можно дарить",
    "Жизнь прекрасна, когда рядом цветы"
];

export default function Catalog() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Генерируем массив из 29 фотографий
    const images = Array.from({ length: 29 }, (_, i) => ({
        id: i + 1,
        src: `/images/catalog/${i + 1}.jpg`,
        quote: quotes[i % quotes.length],
        alt: `Цветочная композиция ${i + 1}`
    }));

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    return (
        <section id="catalog" className="catalog-section">
            <div className="container">
                <div className="catalog-header animate-fade-up">
                    <h2 className="section-title">
                        Наша <span className="title-highlight">галерея</span>
                    </h2>
                    <p className="section-subtitle">
                        ✨ Каждая фотография — это вдохновение и красота
                    </p>
                </div>

                {/* Сетка с фотографиями */}
                <div className="catalog-grid">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="catalog-item animate-fade-up"
                            style={{ animationDelay: `${0.05 + index * 0.025}s` }}
                            onClick={() => openLightbox(image)}
                        >
                            <div className="catalog-item-inner">
                                <div className="image-wrapper">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="catalog-image"
                                        loading="lazy"
                                    />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <FaHeart className="overlay-icon" />
                                            <p className="overlay-quote">"{image.quote}"</p>
                                            <span className="overlay-number">#{String(image.id).padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Нижний блок с вдохновением */}
                <div className="catalog-footer animate-fade-up delay-4">
                    <p className="footer-quote">
                        "Цветы — это язык, который понимают все сердца"
                    </p>
                    <a
                        href="https://www.instagram.com/sveti.mira.bukhara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-instagram"
                    >
                        <FaInstagram /> Смотреть больше в Instagram
                    </a>
                </div>
            </div>

            {/* Лайтбокс */}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <FaTimes />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="lightbox-image"
                        />
                        <div className="lightbox-quote">
                            <FaHeart className="lightbox-icon" />
                            <p>"{selectedImage.quote}"</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}