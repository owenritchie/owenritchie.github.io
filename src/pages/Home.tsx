import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";
import Card from "../components/global/Card";
import Footer from "../components/global/Footer";

interface WeatherData {
  city: string;
  temperature: number;
  unit: string;
  condition: string;
}

function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    fetch("/data/weather.json")
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => {});
  }, []);

  return (
    <div className="home-container">
      <div className="hero-header" ref={heroRef}>
        <motion.img src="/photos/header.jpg" alt="Header" className="hero-image" style={{ scale }} />
        <div className="hero-title-wrapper">
          <motion.h1
            className="hero-title"
            style={{ opacity: titleOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OWEN RITCHIE
          </motion.h1>
        </div>
        {weather && (
          <span className="hero-weather">
            {weather.temperature}°{weather.unit} · {weather.condition} · {weather.city}
          </span>
        )}
      </div>

      <div className="intro-section">
        <div className="intro-box">
          <div className="box-header">
            <span className="intro-title">a little bit about me...</span>
          </div>
          <p className="intro-text">
            &gt; I'm a 21 year old Engineer & Developer based in Ottawa, Canada.
          </p>
          <p className="intro-text">
            &gt; I build data pipelines, design visual media, and solve problems
            using software & code.
          </p>
        </div>
      </div>

      <div className="cards-section">
        <Card title="More About Me!" path="/about" />
        <Card title="My Work" path="/work" />
        <Card title="My Art" path="/art" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
