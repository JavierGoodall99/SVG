import React, { useState } from "react";
import {
  CartOutline,
  HeartOutline,
  PointingFinger,
  Linkedin,
  SettingsOutline,
  Shield,
} from "./Icons";
import "./App.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function App(): JSX.Element {
  const [primaryColor, setPrimaryColor] = useState<string>("#000000"); // Initial primary color
  const [secondaryColor, setSecondaryColor] = useState<string>("#FFFFFF"); // Initial secondary color
  const [size, setSize] = useState<number>(80); // Initial size
  const [gradient, setGradient] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(5); // Initial stroke width

  const handleSearch = (searchTerm: string) => {
    // Perform your search logic here using the search term
    console.log("Searching for:", searchTerm);

    // Filter the icons based on the search term
    const filteredIcons = icons.filter((icon) =>
      icon.type.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the search results state
    setSearchResults(filteredIcons);
  };

  const [searchResults, setSearchResults] = useState<React.ReactNode[]>([]);

  const icons = [
    <HeartOutline
      size={size + "px"}
      gradient={
        gradient
          ? { allow: true, start: primaryColor, end: secondaryColor }
          : { allow: false, fill: primaryColor }
      }
      strokeWidth={strokeWidth}
      onClick={() => handleIconClick("Heart")}
    />,
    <SettingsOutline
      size={size + "px"}
      gradient={
        gradient
          ? { allow: true, start: primaryColor, end: secondaryColor }
          : { allow: false, fill: primaryColor }
      }
      strokeWidth={strokeWidth}
      onClick={() => handleIconClick("Settings")}
    />,
    <CartOutline
      size={size + "px"}
      gradient={
        gradient
          ? { allow: true, start: primaryColor, end: secondaryColor }
          : { allow: false, fill: primaryColor }
      }
      strokeWidth={strokeWidth}
      onClick={() => handleIconClick("Cart")}
    />,

    <PointingFinger
      size={size + "px"}
      gradient={
        gradient
          ? { allow: true, start: primaryColor, end: secondaryColor }
          : { allow: false, fill: primaryColor }
      }
      strokeWidth={strokeWidth}
      onClick={() => handleIconClick("Heart")}
    />,

    <Shield
      size={size + "px"}
      gradient={
        gradient
          ? { allow: true, start: primaryColor, end: secondaryColor }
          : { allow: false, fill: primaryColor }
      }
      strokeWidth={strokeWidth}
      onClick={() => handleIconClick("Heart")}
    />,
  ];

  // Event handlers for state updates
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
    <div>
      <div className="body">
        <h1>Welcome to the Icon App</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="search">
        <SearchBar onSearch={handleSearch} />
      </div>
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="sidenav">
          <div className="container">
            <label htmlFor="primaryColor">
              {gradient ? "Choose Color " : "Choose Color "}
              {/*    {gradient ? "Select Start color: " : "Select color: "} */}
            </label>
            <input
              type="color"
              value={primaryColor}
              onChange={handlePrimaryColorChange}
            />
            {gradient && (
              <>
                <label htmlFor="secondaryColor">Second Color</label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={handleSecondaryColorChange}
                />
              </>
            )}

            <label htmlFor="isGradient">Tick to Gradient</label>
            <input
              type="checkbox"
              onChange={() => setGradient(!gradient)}
              id="isGradient"
            />

            <label htmlFor="size">Size {size} px</label>
            <input
              type="range"
              id="size"
              min="20"
              max="100"
              value={size}
              onChange={handleSizeChange}
            />

            <label htmlFor="strokeWidth">Stroke Width {strokeWidth} px</label>
            <input
              type="range"
              id="strokeWidth"
              min="1"
              max="20"
              value={strokeWidth}
              onChange={handleStrokeWidthChange}
            />
          </div>
        </div>
        <div className="App">
          <div className="App-header">
            {searchResults.length > 0
              ? searchResults.map((icon, index) =>
                  React.cloneElement(icon as React.ReactElement, { key: index })
                )
              : [
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                  ...icons,
                ].map((icon, index) =>
                  React.cloneElement(icon as React.ReactElement, { key: index })
                )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
