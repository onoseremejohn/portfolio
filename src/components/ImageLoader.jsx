import { useState } from "react";
import Spinner from "./Spinner";
const ImageLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: loading ? "none" : "block" }}
      />
    </>
  );
};

export default ImageLoader;
