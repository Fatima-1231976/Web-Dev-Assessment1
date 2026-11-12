function MovieCard({ image, title, description }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{description}</p>

      <button>Watch Now</button>
    </div>
  );
}

export default MovieCard;