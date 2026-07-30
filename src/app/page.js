import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";


export default function Home() {
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