import "./App.css";

// Import movie images
import barbie from "./assets/barbie.jpg";
import hiddenFigures from "./assets/hidden-figures.jpg";
import hook from "./assets/hook.jpg";
import laLaLand from "./assets/la-la-land.jpg";
import palmSprings from "./assets/palm-springs.jpg";
import rogerRabbit from "./assets/who-framed-roger-rabbit.jpg";

// Movie information from university assets
const movies = [
  {
    title: "Barbie (2023)",
    image: barbie,
    description:
      "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!",
  },
  {
    title: "Hidden Figures (2016)",
    image: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: "Hook (1991)",
    image: hook,
    description:
      "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.",
  },
  {
    title: "La La Land (2016)",
    image: laLaLand,
    description:
      "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!",
  },
  {
    title: "Palm Springs (2020)",
    image: palmSprings,
    description:
      "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.",
  },
  {
    title: "Who Framed Roger Rabbit (1988)",
    image: rogerRabbit,
    description:
      "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!",
  },
];

// Header component
function Header() {
  return (
    <header className="header">
      <h1 className="logo">watch.it</h1>

      <nav aria-label="Movie categories">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        Search
      </button>
    </header>
  );
}

// Reusable movie card component
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        src={movie.image}
        alt={`${movie.title} movie poster`}
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>{movie.description}</p>

        <button className="watch-button" type="button">
          Watch Now
        </button>
      </div>
    </article>
  );
}

// Main React application
function App() {
  return (
    <>
      <Header />

      <main id="movies" className="container">
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
