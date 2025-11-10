import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const EventCard = ({ imageSrc, imageAlt = "image", date = new Date(), title, label, small = false, ...props }) => {
  const parsedDate = date instanceof Date ? date : new Date(date);

  return (
    <div data-testid="card-testid" className={`EventCard${small ? " EventCard--small" : ""}`} {...props}>
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{getMonth(parsedDate)}</div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, // reste requis
  small: PropTypes.bool,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
  date: new Date(),
  // PLUS de defaultProps pour label
};

export default EventCard;
