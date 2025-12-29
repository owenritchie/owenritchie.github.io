import { useState, useEffect } from "react";
import Footer from "../components/global/Footer";
import BigProjectCard from "../components/global/BigProjectCard";
import SmallProjectCard from "../components/global/SmallProjectCard";
import "./Work.css";

interface Project {
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  live?: boolean;
  image?: string;
  stack?: string[];
}

function Work() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="work-page">
      <div className="work-container">
        <h1>Recent Projects</h1>
        <p>
          Currently I'm working for <b>Kinaxis Inc.</b> as a Data & Analytics
          Engineer. Below are some of the projects I've worked on in the past
          1-2 years!
        </p>
        <div className="work-list">
          {projects.length > 0 && (
            <div className="work-list-left">
              <h3 className="work-list-label">Highlight Project</h3>
              <BigProjectCard
                title={projects[0].title}
                subtitle={projects[0].subtitle}
                description={projects[0].description}
                link={projects[0].link}
                live={projects[0].live}
                image={projects[0].image}
                stack={projects[0].stack}
              />
            </div>
          )}
          <div className="work-list-right">
            <h3 className="work-list-label">Past Projects</h3>
            {projects.slice(1).map((project, index) => (
              <SmallProjectCard
                key={index + 1}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link}
                live={project.live}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
