"use client";

import { FaHeart } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        © {currentYear} <span className="footer-highlight">Цветы мира</span>.
                        Все права защищены.
                    </p>

                    <div className="footer-divider" />

                    <p className="footer-developed">
                        Разработано с <FaHeart className="footer-heart" /> в
                        <a
                            href="https://akbarsoft.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Akbar Soft
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}