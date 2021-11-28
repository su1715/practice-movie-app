import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
