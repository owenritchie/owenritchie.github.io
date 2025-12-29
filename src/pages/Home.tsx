import "./Home.css";
import Card from "../components/global/Card";
import Footer from "../components/global/Footer";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-header">
        <img src="/photos/header.jpg" alt="Header" className="hero-image" />
        <h1 className="hero-title">OWEN RITCHIE</h1>
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
