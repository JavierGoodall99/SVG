import React, { useState } from "react";
import { CartOutline, HeartOutline, SettingsOutline } from "./Icons";
import "./App.css"; 
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function App(): JSX.Element {
  const [primaryColor, setPrimaryColor] = useState<string>("#000000"); // Initial primary color
  const [secondaryColor, setSecondaryColor] = useState<string>("#FFFFFF"); // Initial secondary color
  const [size, setSize] = useState<number>(80); // Initial size
  const [gradient, setGradient] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(2); // Initial stroke width

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

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked!`);
  };

  return (
    <div className="App">
      <div className="landing-page">
        <h1>Welcome to the Icon App</h1>
        <p>Select a start color, end color, size, and stroke width to customize the icons:</p>

        <label htmlFor="primaryColor">
          {gradient ? "Select Start color: " : "Select color: "}
        </label>
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

      <div className="App-header">
        <HeartOutline
          size={size + "px"}
          gradient={
            gradient
              ? { allow: true, start: primaryColor, end: secondaryColor }
              : { allow: false, fill: primaryColor }
          }
          strokeWidth={strokeWidth}
          onClick={() => handleIconClick("Heart")}
        />

        <SettingsOutline
          size={size + "px"}
          gradient={
            gradient
              ? { allow: true, start: primaryColor, end: secondaryColor }
              : { allow: false, fill: primaryColor }
          }
          strokeWidth={strokeWidth}
          onClick={() => handleIconClick("Settings")}
        />

        <CartOutline
          size={size + "px"}
          gradient={
            gradient
              ? { allow: true, start: primaryColor, end: secondaryColor }
              : { allow: false, fill: primaryColor }
          }
          strokeWidth={strokeWidth}
          onClick={() => handleIconClick("Cart")}
        />
      </div>
      <div>
        <h4 style={{ textAlign: "left" }}>Example Usage in React App</h4>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`<HeartOutline
 size={"${size}px"}
 gradient={${gradient ? `{ allow: true, start: ${primaryColor}, end: ${secondaryColor} }` : `{ allow: false, fill: ${primaryColor} }`}}
 strokeWidth={${strokeWidth}}
/>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
