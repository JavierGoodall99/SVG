import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./app.css";

type PointingFingerProps = {
  gradient:
    | { allow: true; start: string; end: string }
    | { allow: false; fill: string };
  size: string;
  strokeWidth?: number; // strokeWidth prop
  onClick?: () => void; // onClick prop
};

const PointingFinger = ({
  size = "24px",
  gradient = {
    allow: false,
    fill: "#000000",
  },
  strokeWidth = 1, // default strokeWidth value
  onClick,
}: PointingFingerProps) => {
  const [showCode, setShowCode] = useState(false); // Track the state of the code display

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const downloadAsPng = () => {
    const svgElement = document.getElementById("finger-outline-svg"); // Get the SVG element by its ID
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
        a.setAttribute("download", "finger.png"); // Set the download attribute to specify the file name as "heart_outline.png"
        a.style.display = "none"; // Hide the anchor element
        document.body.appendChild(a); // Append the anchor element to the document body
        a.click(); // Simulate a click on the anchor element to trigger the download
        document.body.removeChild(a); // Remove the anchor element from the document body after the download
      };
    }
  };

  const downloadAsSvg = () => {
    const svgElement = document.getElementById("finger-outline-svg"); // Get the SVG element by its ID
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string

      const a = document.createElement("a"); // Create an anchor element
      a.setAttribute(
        "href",
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
      ); // Set the anchor's href attribute to the SVG data encoded as a URI component
      a.setAttribute("download", "finger.svg"); // Set the download attribute to specify the file name as "heart_outline.svg"
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
      <button onClick={handleCodeClick}>
        <div
          className="Container"
          style={{ width: "120px", height: "120px", overflow: "hidden" }}
        >
          <svg
            id="finger-outline-svg" // Add id to the svg element for accessing it in download functions
            height={size}
            width={size}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <defs>
              <linearGradient id="gradient">
                <stop
                  offset="0%"
                  stop-color={gradient.allow && gradient.start}
                />
                <stop
                  offset="100%"
                  stop-color={gradient.allow && gradient.end}
                />
              </linearGradient>
            </defs>
            <g>
              <path
                d="m111.86,59.58c1.62,0,3.13.3,4.55.9s2.65,1.43,3.7,2.47c1.05,1.04,1.88,2.27,2.49,3.67.6,1.4.91,2.91.91,4.52v30.84c0,4.78-.92,9.27-2.76,13.49-1.84,4.21-4.33,7.89-7.49,11.02-3.15,3.13-6.85,5.61-11.09,7.44s-8.77,2.74-13.58,2.74c-5.82,0-11.24-1.1-16.28-3.31-5.03-2.21-9.59-5.34-13.67-9.39l-28.62-28.43c-1.13-1.12-2-2.43-2.61-3.91-.61-1.49-.91-3.01-.91-4.58,0-1.69.32-3.26.97-4.73.65-1.46,1.52-2.74,2.61-3.82s2.37-1.94,3.85-2.56c1.47-.62,3.04-.93,4.7-.93s3.15.31,4.61.93c1.46.62,2.77,1.5,3.94,2.62l6.49,6.38V24.89c0-1.6.3-3.11.91-4.52.61-1.4,1.43-2.63,2.49-3.67s2.28-1.86,3.7-2.47,2.93-.9,4.55-.9,3.13.3,4.55.9c1.41.6,2.65,1.42,3.7,2.47,1.05,1.05,1.88,2.27,2.49,3.67.61,1.41.91,2.91.91,4.52v27.64c1.33-.44,2.63-.66,3.88-.66,2.02,0,3.9.47,5.64,1.41,1.74.94,3.13,2.26,4.18,3.94,1.82-1,3.72-1.51,5.7-1.51s3.9.47,5.64,1.42,3.13,2.26,4.18,3.94c1.82-1,3.72-1.51,5.7-1.51Z"
                strokeMiterlimit={3}
                fill="none"
                strokeWidth={strokeWidth} // strokeWidth prop applied
                stroke={gradient.allow ? "url(#gradient)" : gradient.fill}
              />
            </g>
          </svg>
          {/* <h2>Heart</h2> */}
        </div>
        <div>
          <h2>Pointing Finger</h2>
        </div>
      </button>
      {showCode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "20%",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <pre className="language-markup animate__animated animate__slideInRight">
            <button
              className="dropdown"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={handleCodeCloseClick}
            >
              Close
            </button>
            <code className="language-markup">
              {`
<svg
id="finger-outline-svg"
height="${size}"
width="${size}"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 150 150"
onClick={handleClick}
style={{ cursor: "pointer" }} 
>
<defs>
<linearGradient id="gradient">
<stop offset="0%" stop-color="${gradient.allow ? gradient.start : ""}" />
<stop offset="100%" stop-color="${gradient.allow ? gradient.end : ""}" />
</linearGradient>
</defs>
<g>
<path
d="m111.86,59.58c1.62,0,3.13.3,4.55.9s2.65,1.43,3.7,2.47c1.05,1.04,1.88,2.27,2.49,3.67.6,1.4.91,2.91.91,4.52v30.84c0,4.78-.92,9.27-2.76,13.49-1.84,4.21-4.33,7.89-7.49,11.02-3.15,3.13-6.85,5.61-11.09,7.44s-8.77,2.74-13.58,2.74c-5.82,0-11.24-1.1-16.28-3.31-5.03-2.21-9.59-5.34-13.67-9.39l-28.62-28.43c-1.13-1.12-2-2.43-2.61-3.91-.61-1.49-.91-3.01-.91-4.58,0-1.69.32-3.26.97-4.73.65-1.46,1.52-2.74,2.61-3.82s2.37-1.94,3.85-2.56c1.47-.62,3.04-.93,4.7-.93s3.15.31,4.61.93c1.46.62,2.77,1.5,3.94,2.62l6.49,6.38V24.89c0-1.6.3-3.11.91-4.52.61-1.4,1.43-2.63,2.49-3.67s2.28-1.86,3.7-2.47,2.93-.9,4.55-.9,3.13.3,4.55.9c1.41.6,2.65,1.42,3.7,2.47,1.05,1.05,1.88,2.27,2.49,3.67.61,1.41.91,2.91.91,4.52v27.64c1.33-.44,2.63-.66,3.88-.66,2.02,0,3.9.47,5.64,1.41,1.74.94,3.13,2.26,4.18,3.94,1.82-1,3.72-1.51,5.7-1.51s3.9.47,5.64,1.42,3.13,2.26,4.18,3.94c1.82-1,3.72-1.51,5.7-1.51Z"
strokeMiterlimit=${3}
fill="none"
strokeWidth=${strokeWidth}
stroke=${gradient.allow ? "url(#gradient)" : gradient.fill}
/>
</g>
</svg>
            `}
              <div>
                <button className="dropdown1" onClick={downloadAsPng}>
                  Download as PNG
                </button>
                <button className="dropdown1" onClick={downloadAsSvg}>
                  Download as SVG
                </button>
              </div>
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default PointingFinger;
