import { FaSearch, FaGithub } from "react-icons/fa";
import ImageLoader from "./ImageLoader";
const PortfolioItem = ({
  imageSrc,
  title,
  projectLink,
  githubLink,
  className,
  additionalInfo,
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
        {additionalInfo && (
          <p dangerouslySetInnerHTML={{ __html: additionalInfo }} />
        )}
        <div className="links-container">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View Project"
          >
            <FaSearch />
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View Github"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
