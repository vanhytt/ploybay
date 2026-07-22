import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import BrandStory from "./components/BrandStory";
import StoryGrid from "./components/StoryGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Banner />
        <ProductGrid />
        <BrandStory />
        <StoryGrid />
      </main>
      <Footer />
    </>
  );
}