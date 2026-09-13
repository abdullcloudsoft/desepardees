import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { MenuSection } from "./components/MenuSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingCallButton } from "./components/FloatingCallButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E] font-sans antialiased">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Highlights />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Mobile Sticky Quick Call Button */}
      <FloatingCallButton />
    </div>
  );
}
