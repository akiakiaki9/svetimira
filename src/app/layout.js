import "./globals.css";

export const metadata = {
  title: "Цветы мира | Премиум букеты и композиции в Бухаре",
  description:
    "Цветы, которые говорят вместо слов. Букеты и композиции премиум-класса, мягкие игрушки в Бухаре. Доставка цветов по городу.",
  keywords:
    "цветы Бухара, букеты премиум, доставка цветов, мягкие игрушки, цветы мира, svetimira.uz",
  openGraph: {
    title: "Цветы мира — премиум букеты в Бухаре",
    description: "Цветы, которые говорят вместо слов. Доставка по Бухаре.",
    url: "https://svetimira.uz",
    siteName: "Цветы мира",
    locale: "ru_UZ",
    type: "website",
    images: [
      {
        url: "https://svetimira.uz/images/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Цветы мира — премиум букеты в Бухаре",
      },
    ],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/logo.PNG" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.PNG" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}