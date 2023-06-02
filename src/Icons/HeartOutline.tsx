import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./app.css";

type HeartOutlineProps = {
  gradient:
    | { allow: true; start: string; end: string }
    | { allow: false; fill: string };
  size: string;
  strokeWidth?: number;
  onClick?: () => void;
};

const HeartOutline = ({
  size = "24px",
  gradient = {
    allow: false,
    fill: "#000000",
  },
  strokeWidth = 1,
  onClick,
}: HeartOutlineProps) => {
  const [showCode, setShowCode] = useState(false); // Track the state of the code display

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const downloadAsPng = () => {
    const svgElement = document.getElementById("heart-outline-svg"); // Get the SVG element by its ID
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string
      const canvas = document.createElement("canvas"); // Create a canvas element
      const ctx = canvas.getContext("2d"); // Get the 2D rendering context of the canvas

      const img = new Image(); // Create an image element
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData)); // Set the source of the image to the SVG data encoded as a base64 string

      img.onload = function () {
        canvas.width = img.width; // Set the canvas width to match the image width
        canvas.height = img.height; // Set the canvas height to match the image height
        ctx?.drawImage(img, 0, 0); // Draw the image onto the canvas at coordinates (0, 0)

        const a = document.createElement("a"); // Create an anchor element
        a.setAttribute("href", canvas.toDataURL("image/png")); // Set the anchor's href attribute to the canvas data URL representing the PNG image
        a.setAttribute("download", "heart_outline.png"); // Set the download attribute to specify the file name as "heart_outline.png"
        a.style.display = "none"; // Hide the anchor element
        document.body.appendChild(a); // Append the anchor element to the document body
        a.click(); // Simulate a click on the anchor element to trigger the download
        document.body.removeChild(a); // Remove the anchor element from the document body after the download
      };
    }
  };

  const downloadAsSvg = () => {
    const svgElement = document.getElementById("heart-outline-svg"); // Get the SVG element by its ID
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string

      const a = document.createElement("a"); // Create an anchor element
      a.setAttribute(
        "href",
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
      ); // Set the anchor's href attribute to the SVG data encoded as a URI component
      a.setAttribute("download", "heart_outline.svg"); // Set the download attribute to specify the file name as "heart_outline.svg"
      a.style.display = "none"; // Hide the anchor element
      document.body.appendChild(a); // Append the anchor element to the document body
      a.click(); // Simulate a click on the anchor element to trigger the download
      document.body.removeChild(a); // Remove the anchor element from the document body after the download
    }
  };

  const handleCodeClick = () => {
    setShowCode(true);
    Prism.highlightAll(); // Highlight the code using Prism.js
  };

  const handleCodeCloseClick = () => {
    setShowCode(false);
  };

  return (
    <div>
      <svg
        id="heart-outline-svg" // Add id to the svg element for accessing it in download functions
        height={size}
        width={size}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 471.701 471.701"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stop-color={gradient.allow && gradient.start} />
            <stop offset="100%" stop-color={gradient.allow && gradient.end} />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
          c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
          l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
          C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
          s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
          c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
          C444.801,187.101,434.001,213.101,414.401,232.701z"
            fill={gradient.allow ? "url(#gradient)" : gradient.fill}
            strokeWidth={strokeWidth}
            stroke={gradient.allow ? gradient.start : gradient.fill}
          />
        </g>
      </svg>
      <div>
      <h2>Heart</h2>
        <button className="dropdown" onClick={handleCodeClick}>
          View SVG Code
        </button>
      </div>
      {showCode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "20%",
            height: "100%",
            backgroundColor: "#f5f5f5",
            padding: "10px",
            overflowY: "scroll",
          }}
        >
          {/* <h2>Cart</h2> */}
          <button
            className="dropdown"
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleCodeCloseClick}
          >
            Close
          </button>
          <pre className="language-markup">
            <code className="language-markup">
            {
            `
<svg
id="heart-outline-svg"
height="${size}"
width="${size}"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 471.701 471.701"
onClick={handleClick}
style={{ cursor: "pointer" }}
>
<defs>
<linearGradient id="gradient">
<stop offset="0%" stop-color="${gradient.allow ? gradient.start : ''}" />
<stop offset="100%" stop-color="${gradient.allow ? gradient.end : ''}" />
</linearGradient>
</defs>
<g>
<path
d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
C444.801,187.101,434.001,213.101,414.401,232.701z"
fill="${gradient.allow ? "url(#gradient)" : gradient.fill}"
strokeWidth="${strokeWidth}"
stroke="${gradient.allow ? gradient.start : gradient.fill}"
/>
</g>
</svg>
            `}
                  <div>
        <button className="dropdown1" onClick={downloadAsPng}>Download as PNG</button>
        <button className="dropdown1" onClick={downloadAsSvg}>Download as SVG</button>
      </div>
         </code>
          </pre>
        </div>
      )}
    </div>


  );
};

export default HeartOutline;







