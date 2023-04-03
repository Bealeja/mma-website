import React, { useState } from "react";
import "./index.scss";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(100);
  const [imageHeight, setImageHeight] = useState(100);

  const handleImageSizeChange = (e) => {
    const { name, value } = e.target;
    if (name === "width") {
      setImageWidth(value);
    } else if (name === "height") {
      setImageHeight(value);
    }
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  const firstImageIndex = currentImageIndex;
  const secondImageIndex = (currentImageIndex + 1) % images.length;
  const thirdImageIndex = (currentImageIndex + 2) % images.length;

  return (
    <div className="slider">
      <div className="image-container">
        <div className="image-grid">
          <img
            src={images[firstImageIndex]}
            alt={`Image ${firstImageIndex + 1}`}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          />
          <img
            src={images[secondImageIndex]}
            alt={`Image ${secondImageIndex + 1}`}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          />
          <img
            src={images[thirdImageIndex]}
            alt={`Image ${thirdImageIndex + 1}`}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          />
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevImage}>Prev</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
      <div className="image-size-controls">
        <label>
          Width:
          <input
            type="range"
            min="10"
            max="100"
            name="width"
            value={imageWidth}
            onChange={handleImageSizeChange}
          />
        </label>
        <label>
          Height:
          <input
            type="range"
            min="10"
            max="100"
            name="height"
            value={imageHeight}
            onChange={handleImageSizeChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Slider;
