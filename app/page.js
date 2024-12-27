import FAQ from "./Components/FAQ";
 import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import './styles/globals.css';
import Header from "./Components/Header";
import Development from "./Components/Development";
import Problem from "./Components/Problem";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Problem />
      <Features />
      <Development />
      <FAQ />
     <Footer />
    </div>
  );
}