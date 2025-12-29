import "./AutoScrollImages.css";

interface AutoScrollImagesProps {
  directory: string;
  direction?: "left" | "right";
}

function AutoScrollImages({ directory, direction = "left" }: AutoScrollImagesProps) {
  const images = Object.values(
    import.meta.glob("/public/**/*.png", { eager: true, as: "url" })
  ).filter((path: string) => path.includes(directory));

  return (
    <div className="scroll-container">
      <div className={`scroll-track ${direction === "right" ? "reverse" : ""}`}>
        {images.map((src, i) => <img key={i} src={src} alt="" />)}
        {images.map((src, i) => <img key={`d${i}`} src={src} alt="" />)}
        {images.map((src, i) => <img key={`e${i}`} src={src} alt="" />)}
      </div>
    </div>
  );
}

export default AutoScrollImages;
