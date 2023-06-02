import { FaSearch, FaGithub } from "react-icons/fa";
import ImageLoader from "./ImageLoader";
const PortfolioItem = ({
  imageSrc,
  title,
  projectLink,
  githubLink,
  className,
}) => {
  return (
    <div
      className={
        className ? `portfolio-grid-el ${className}` : "portfolio-grid-el"
      }
    >
      <ImageLoader src={imageSrc} alt={title} />
      <div className="container">
        <p>{title}</p>
        <div className="btn-container">
          <button>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <FaSearch />
            </a>
          </button>
          <button>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
