"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaLeaf, 
  FaHeart, 
  FaTruck, 
  FaGift, 
  FaQuoteLeft, 
  FaStar,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaPlay,
  FaPause
} from "react-icons/fa";
import "./about.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const stats = [
    { number: "5+", label: "Лет опыта", icon: FaStar },
    { number: "1000+", label: "Счастливых клиентов", icon: FaHeart },
    { number: "50+", label: "Уникальных букетов", icon: FaLeaf },
    { number: "24/7", label: "Всегда на связи", icon: FaPhone },
  ];

  const features = [
    {
      icon: FaLeaf,
      title: "Свежие цветы",
      description: "Только лучшие сорта, отобранные вручную для ваших букетов"
    },
    {
      icon: FaHeart,
      title: "Индивидуальный подход",
      description: "Каждый букет создается с любовью и вниманием к деталям"
    },
    {
      icon: FaTruck,
      title: "Быстрая доставка",
      description: "Оперативная доставка по всей Бухаре с заботой о каждом цветке"
    },
    {
      icon: FaGift,
      title: "Подарки и сюрпризы",
      description: "Мягкие игрушки и дополнительные аксессуары для особых моментов"
    }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-background">
        <div className="bg-circle circle1" />
        <div className="bg-circle circle2" />
        <div className="bg-circle circle3" />
      </div>

      <div className="container">
        {/* Заголовок */}
        <div className="about-header">
          <span className="about-badge animate-fade-up">✦ О НАС</span>
          <h2 className="section-title animate-fade-up delay-1">
            Цветы, которые <br />
            <span className="title-highlight">говорят вместо слов</span>
          </h2>
          <p className="about-subtitle animate-fade-up delay-2">
            Мы создаем не просто букеты, а настоящие эмоции, запечатленные в каждом лепестке
          </p>
        </div>

        {/* Основной контент */}
        <div className="about-content">
          <div className="about-text animate-fade-up delay-2">
            <div className="quote-wrapper">
              <FaQuoteLeft className="quote-icon" />
              <p className="about-description">
                <strong>Цветы мира</strong> — это премиальный флористический бренд в Бухаре, 
                где каждый букет становится произведением искусства. Мы верим, что цветы — 
                это язык, понятный всем сердцам, и наша миссия — помогать вам говорить на нем.
              </p>
            </div>
            
            <div className="about-features-grid">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`about-feature-card animate-fade-up delay-${3 + index * 0.1}`}
                >
                  <div className="feature-icon-wrapper">
                    <feature.icon className="feature-icon" />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Статистика */}
          <div className="stats-grid animate-fade-up delay-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">
                  <span className="stat-number-text">{stat.number}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* История с видео */}
          <div className="story-section animate-fade-up delay-4">
            <div className="story-content">
              <div className="story-text">
                <h3 className="story-title">Наша история</h3>
                <p className="story-description">
                  История <strong>Цветы мира</strong> началась с простой любви к прекрасному. 
                  Мы объединили лучшие традиции флористики с современными тенденциями, 
                  чтобы создавать букеты, которые запоминаются надолго.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <span className="highlight-dot" />
                    <span>Ручная работа над каждым букетом</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot" />
                    <span>Эксклюзивные композиции</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot" />
                    <span>Премиальные сорта цветов</span>
                  </div>
                </div>
                <div className="story-socials">
                  <a 
                    href="https://www.instagram.com/sveti.mira.bukhara/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="story-social-link instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://t.me/svetimira_bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="story-social-link telegram"
                  >
                    <FaTelegram />
                  </a>
                  <a 
                    href="tel:+998914448048" 
                    className="story-social-link phone"
                  >
                    <FaPhone />
                  </a>
                </div>
              </div>
              <div className="story-video-wrapper" onClick={toggleVideo}>
                <video
                  ref={videoRef}
                  src="/videos/about.mp4"
                  className="story-video"
                  playsInline
                  loop
                  poster="/images/about-poster.jpg"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
                <div className={`story-video-overlay ${isVideoPlaying ? "hidden" : ""}`}>
                  <div className="play-button-wrapper">
                    <FaPlay className="play-icon" />
                  </div>
                  <span className="play-text">Смотреть видео</span>
                </div>
                {isVideoPlaying && (
                  <button className="video-pause-btn" onClick={(e) => { e.stopPropagation(); toggleVideo(); }}>
                    <FaPause />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="cta-section animate-fade-up delay-5">
            <div className="cta-content">
              <h3 className="cta-title">Готовы создать ваш идеальный букет?</h3>
              <p className="cta-description">
                Свяжитесь с нами, и мы воплотим ваши мечты в цветах
              </p>
              <a href="#contact" className="cta-button">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}