import { useEffect, useMemo, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date"; 
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Tri par date décroissante et sélection des 3 plus récents
  const items = useMemo(() => {
    const focus = Array.isArray(data?.focus) ? data.focus : [];
    return focus
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [data]);

  // Défilement automatique toutes les 5s (sauf en pause ou si pas d’items)
  useEffect(() => {
    if (!items.length || paused) {
      return () => {}; // évite le warning "consistent-return"
    }

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, items.length, paused]);

  // Touche "Espace" pour pause / reprise
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        setPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!items.length) return null;

  return (
    <div className="SlideCardList" aria-label="slider">
      {items.map((item, idx) => {
        const eventDate = new Date(item.date);
        const monthName = getMonth(eventDate); // ✅ utilise ton utilitaire existant

        return (
          <div
            key={item.id ?? item.title ?? item.cover ?? item.date}
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
          >
            <img src={item.cover} alt={item.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>{monthName}</div> {/* ✅ ton mois issu de getMonth */}
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="SlideCard__paginationContainer">
        <div
          className="SlideCard__pagination"
          role="tablist"
          aria-label="slider bullets"
        >
          {items.map((item, bulletIdx) => (
            <input
              key={`bullet-${item.id ?? item.title ?? item.cover ?? item.date}`}
              type="radio"
              name="radio-button"
              aria-label={`slide ${bulletIdx + 1}`}
              checked={bulletIdx === index}
              onChange={() => setIndex(bulletIdx)}
            />
          ))}
        </div>
      </div>

      {/* Indicateur visuel de pause */}
      {paused && <div className="SlideCard__pause-indicator">⏸️</div>}
    </div>
  );
};

export default Slider;
