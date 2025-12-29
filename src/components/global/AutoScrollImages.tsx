import "./AutoScrollImages.css";

interface AutoScrollImagesProps {
  images: string[];
  direction?: "left" | "right";
}

function AutoScrollImages({ images, direction = "left" }: AutoScrollImagesProps) {
  if (images.length === 0) return null;

  return (
    <div className="scroll-container">
      <div className={`scroll-track ${direction === "right" ? "reverse" : ""}`}>
        {images.map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
        {images.map((src, i) => <img key={`d${i}`} src={src} alt="" loading="lazy" />)}
        {images.map((src, i) => <img key={`e${i}`} src={src} alt="" loading="lazy" />)}
      </div>
    </div>
  );
}

export default AutoScrollImages;
