import "./SimpleTag.css";

interface SimpleTagProps {
  text: string;
}

function SimpleTag({ text }: SimpleTagProps) {
  return <span className="simple-tag">{text}</span>;
}

export default SimpleTag;
