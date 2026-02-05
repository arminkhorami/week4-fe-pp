function Tour({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
  difficulty,
  rating,
  removeTour,
  id,
}) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
        <p className="tour-difficulty">{difficulty}</p>
      </div>

      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
          <p className="tour-rating">⭐ {rating}</p>
        </div>

        <p>{info}</p>

        <div className="tour-footer">
          <p>{location}</p>
          <p>from {cost}</p>
          <p>{duration} days</p>

          {/* 👇 این کاملاً درسته */}
          <button
            className="btn delete-btn"
            onClick={() => removeTour(id)}
          >
            Remove this tour
          </button>
        </div>
      </div>
    </article>
  );
}

export default Tour;
