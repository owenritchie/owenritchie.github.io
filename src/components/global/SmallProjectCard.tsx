import "./SmallProjectCard.css";

interface SmallProjectCardProps {
  title: string;
  subtitle: string;
  link?: string;
  live?: boolean;
  image?: string;
}

function SmallProjectCard({
  title,
  subtitle,
  link,
  image,
}: SmallProjectCardProps) {
  return (
    <a href={link} className="small-project-card">
      <div className="small-project-card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {image && <img src={image} alt={title} />}
    </a>
  );
}

export default SmallProjectCard;
