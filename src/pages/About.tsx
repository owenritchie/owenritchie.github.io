import "./About.css";
import Footer from "../components/global/Footer";
import AutoScrollImages from "../components/global/AutoScrollImages";
import SimpleTag from "../components/global/SimpleTag";
import { useEffect, useState } from "react";

function About() {
  const [aboutMeData, setAboutMeData] = useState<{
    paragraphs: { text: string }[];
  } | null>(null);

  useEffect(() => {
    fetch("/data/aboutMe.json")
      .then((response) => response.json())
      .then((data) => setAboutMeData(data));
  }, []);

  return (
    <div className="page-container">
      <h1 className="about-page-title">About Me</h1>
      <div className="about-dashboard">
        <div className="about-row-top">
          <div className="about-box profile-photo-box">
            <img src="/me/owen.jpg" alt="Owen" className="profile-photo" />
          </div>
          <div className="about-box tech-stack-box">
            <h3 className="box-title">My Stack</h3>
            <div className="scroll-container">
              <div className="scroll-wrapper">
                <AutoScrollImages
                  directory="/stack/stack-small"
                  direction="left"
                />
              </div>
              <div className="scroll-wrapper">
                <AutoScrollImages
                  directory="/stack/stack-large"
                  direction="right"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-row-bottom">
          <div className="about-box bio-box">
            <div className="about-content">
              {aboutMeData?.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}
                />
              ))}
            </div>
          </div>
          <div className="about-sidebar">
            <div className="about-box interests-box">
              <h3 className="box-title">Current Interests</h3>
              <div className="interests-container">
                <SimpleTag text="Urban Transit Design" />
                <SimpleTag text="Baseball Analytics" />
                <SimpleTag text="Retro Futurism" />
                <SimpleTag text="120mm Film" />
                <SimpleTag text="Cool Frogs" />
                <SimpleTag text="Browsing Dribble" />
                <SimpleTag text="Central American History" />
              </div>
            </div>
            <div className="about-box companies-box">
              <h3 className="box-title">
                In the last 3 Years I've worked for:
              </h3>
              <div className="companies-logos">
                <img src="/logos/kinaxis-logo.png" alt="Kinaxis" />
                <img src="/logos/gac-logo.png" alt="Global Affairs Canada" />
                <img src="/logos/poisson-logo.png" alt="Poisson Consulting" />
                <img src="/logos/senators-logo.png" alt="Ottawa Senators" />
                <img src="/logos/ottawa-logo.png" alt="City of Ottawa" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
