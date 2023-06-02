import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HeartOutline from "./Icons/HeartOutline"; // Import the SVG component
import SettingsOutline from "./Icons/SettingsOutline"; // Import the SVG component
// Import other SVG components...

function Product() {
  const { iconName } = useParams();
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const [size, setSize] = useState(80);
  const [gradient, setGradient] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(2);

  
  const handlePrimaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrimaryColor(event.target.value);
  };

  const handleSecondaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondaryColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(event.target.value));
  };

  const handleStrokeWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStrokeWidth(Number(event.target.value));
  };

  const renderProductSVG = () => {
    switch (iconName) {
      case "Heart":
        return (
          <HeartOutline
            gradient={
              gradient
                ? { allow: true, start: primaryColor, end: secondaryColor }
                : { allow: false, fill: primaryColor }
            }
            size={size + "px"}
            strokeWidth={strokeWidth}
          />
        );
      case "Settings":
        return (
          <SettingsOutline
            gradient={
              gradient
                ? { allow: true, start: primaryColor, end: secondaryColor }
                : { allow: false, fill: primaryColor }
            }
            size={size + "px"}
            strokeWidth={strokeWidth}
          />
        );
      // Render other product SVG components...
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="landing-page">
        {/* <h1>Welcome to the Icon App</h1>
        <p>Select a start color, end color, size, and stroke width to customize the icons:</p> */}

        <label htmlFor="primaryColor">{gradient ? "Select Start color: " : "Select color: "}</label>
        <input
          type="color"
          value={primaryColor}
          onChange={handlePrimaryColorChange}
        />
        {gradient && (
          <>
            <label htmlFor="secondaryColor">Select End Color:</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={handleSecondaryColorChange}
            />
          </>
        )}

        <label htmlFor="isGradient">Tick for Gradient:</label>
        <input
          type="checkbox"
          onChange={() => setGradient(!gradient)}
          id="isGradient"
        />

        <label htmlFor="size">Select Size:</label>
        <input
          type="range"
          id="size"
          min="20"
          max="200"
          value={size}
          onChange={handleSizeChange}
        />

        <label htmlFor="strokeWidth">Select Stroke Width:</label>
        <input
          type="range"
          id="strokeWidth"
          min="1"
          max="20"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
      </div>

      <div className="Product-content">
        {renderProductSVG()}
      </div>
    </div>
  );
}

export default Product;
