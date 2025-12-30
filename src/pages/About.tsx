import "./About.css";
import Footer from "../components/global/Footer";
import AutoScrollImages from "../components/global/AutoScrollImages";
import SimpleTag from "../components/global/SimpleTag";
import { useEffect, useState } from "react";

const stackSmall = [
  "/stack/stack-small/bigquery.png",
  "/stack/stack-small/claude.png",
  "/stack/stack-small/grafana.png",
  "/stack/stack-small/java.png",
  "/stack/stack-small/powerbi.png",
  "/stack/stack-small/react.png",
  "/stack/stack-small/snowflake.png",
  "/stack/stack-small/streamlit.png",
  "/stack/stack-small/tidyverse.png",
];

const stackLarge = [
  "/stack/stack-large/datadog.png",
  "/stack/stack-large/dbt.png",
  "/stack/stack-large/looker.png",
  "/stack/stack-large/metabase.png",
  "/stack/stack-large/neon.png",
  "/stack/stack-large/pandas.png",
  "/stack/stack-large/scikit.png",
];

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
            <img
              src="/me/owen.jpg"
              alt="Owen"
              className="profile-photo"
              fetchPriority="high"
            />
          </div>
          <div className="about-box tech-stack-box">
            <h3 className="box-title">My Stack</h3>
            <div className="scroll-container">
              <div className="scroll-wrapper">
                <AutoScrollImages images={stackSmall} direction="left" />
              </div>
              <div className="scroll-wrapper">
                <AutoScrollImages images={stackLarge} direction="right" />
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
                <SimpleTag text="Maps" />
                <SimpleTag text="ML Applications" />
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
