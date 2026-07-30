import About from "../components/about/About";
import Catalog from "../components/catalog/Catalog";
import Contact from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export const metadata = {
    title: "Магазин цветов в Бухаре | Купить букеты с доставкой | Цветы мира",
    description:
        "Магазин цветов «Цветы мира» в Бухаре предлагает купить свежие букеты, премиальные композиции и мягкие игрушки. Быстрая доставка по городу. Закажите цветы с доставкой уже сегодня!",
    keywords:
        "магазин цветов бухара, заказать цветы бухара, купить букеты бухара, доставка цветов бухара, цветы с доставкой бухара, букеты на заказ бухара, магазин цветов, цветы мира, свежие цветы бухара, букеты премиум класса бухара, доставка букетов бухара",
    openGraph: {
        title: "Магазин цветов в Бухаре | Доставка букетов | Цветы мира",
        description: "Магазин цветов «Цветы мира» — свежие букеты, премиум-композиции и мягкие игрушки с доставкой по Бухаре.",
        url: "https://svetimira.uz",
        siteName: "Цветы мира",
        locale: "ru_UZ",
        type: "website",
        images: [
            {
                url: "https://svetimira.uz/images/logo.PNG",
                width: 1200,
                height: 630,
                alt: "Магазин цветов в Бухаре",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    viewport: "width=device-width, initial-scale=1.0",
    alternates: {
        canonical: "https://svetimira.uz",
    },
    verification: {
        google: "ваш-google-verification-код",
        yandex: "ваш-yandex-verification-код",
    },
    category: "Магазин цветов",
    "twitter:card": "summary_large_image",
    "twitter:title": "Магазин цветов в Бухаре | Цветы мира",
    "twitter:description": "Купите свежие букеты и композиции с доставкой по Бухаре",
    "twitter:image": "https://svetimira.uz/images/logo.PNG",
};

export default function CatalogPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Catalog />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}