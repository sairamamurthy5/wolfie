
import "./Card.css";

function Card({ children, title, className = "" }) {
  return (
    <div className={`wt-card ${className}`}>
      {title && <h2 className="wt-card__title">{title}</h2>}

      <div className="wt-card__content">
        {children}
      </div>
    </div>
  );
}

export default Card;
