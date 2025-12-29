import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
  title: string;
  path: string;
}

function Card({ title, path }: CardProps) {
  return (
    <Link to={path} className="nav-card">
      <h2 className="nav-card-title">{title}</h2>
      <span className="nav-card-arrow">&gt;&gt;</span>
    </Link>
  );
}

export default Card;
