import About from "../components/about/About";
import Catalog from "../components/catalog/Catalog";
import Contact from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export const metadata = {
    title: "Заказать цветы в Бухаре | Купить букеты с доставкой | Цветы мира",
    description:
        "Закажите цветы в Бухаре с доставкой. Широкий выбор букетов, композиций и мягких игрушек. Быстрая доставка, премиум-качество, доступные цены.",
    keywords:
        "заказать цветы бухара, купить букеты бухара, доставка цветов бухара, цветы с доставкой бухара, букеты на заказ бухара, магазин цветов бухара, цветы мира",
    openGraph: {
        title: "Заказать цветы в Бухаре | Доставка букетов | Цветы мира",
        description: "Купите красивые букеты с доставкой по Бухаре. Премиальные композиции, свежие цветы, доступные цены.",
        url: "https://svetimira.uz/catalog",
        siteName: "Цветы мира",
        locale: "ru_UZ",
        type: "website",
        images: [
            {
                url: "https://svetimira.uz/images/logo.PNG",
                width: 1200,
                height: 630,
                alt: "Заказать цветы в Бухаре",
            },
        ],
    },
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    alternates: {
        canonical: "https://svetimira.uz/catalog",
    },
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