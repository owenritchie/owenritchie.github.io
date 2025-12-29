import { useState, useEffect } from "react";
import Footer from "../components/global/Footer";
import "./Art.css";

function Art() {
  const [categories, setCategories] = useState<string[]>([]);
  const [photos, setPhotos] = useState<Record<string, string[]>>({});
  const [selected, setSelected] = useState("");
  const [viewing, setViewing] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/photos.json")
      .then((res) => res.json())
      .then((data) => {
        const cats = Object.keys(data).sort();
        setCategories(cats);
        setPhotos(data);
        if (cats.length > 0) setSelected(cats[0]);
      });
  }, []);

  return (
    <div className="art-page">
      <div className="art-container">
        <h1>My Pictures</h1>
        <p>
          I spend a lot of my free time taking photos, some of which have been
          featured in <b>The Globe & Mail</b>, <b>Royal Ontario Museum</b> and{" "}
          <b>Parks Canada's social media</b>.
        </p>
        <div className="art-layout">
          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={selected === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bento">
            {selected &&
              photos[selected]?.slice(0, 5).map((photo, i) => (
                <div
                  key={i}
                  className="photo"
                  onClick={() => setViewing(photo)}
                >
                  <img src={photo} alt={`${selected} ${i + 1}`} />
                </div>
              ))}
          </div>
        </div>

        {viewing && (
          <div className="viewer" onClick={() => setViewing(null)}>
            <img src={viewing} alt="Full view" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Art;
