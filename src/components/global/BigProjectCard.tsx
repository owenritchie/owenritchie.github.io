import "./BigProjectCard.css";

interface BigProjectCardProps {
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  live?: boolean;
  image?: string;
  stack?: string[];
}

function BigProjectCard({ title, description, link, live, image, stack }: BigProjectCardProps) {
  return (
    <a href={link} className="big-project-card">
      {image && (
        <div className="big-project-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="big-project-card-content">
        {live && <span className="live">Live</span>}
        <h2>{title}</h2>
        {description && <p className="big-project-card-description">{description}</p>}
        {stack && stack.length > 0 && (
          <div className="big-project-card-stack">
            {stack.map((tech, index) => (
              <img key={index} src={tech} alt={`Tech stack ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default BigProjectCard;
