import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./app.css";

type CartOutlineProps = {
  gradient:
    | { allow: true; start: string; end: string }
    | { allow: false; fill: string };
  size: string;
  secondaryColor?: string;
  strokeWidth?: number; // strokeWidth prop
  onClick?: () => void; // Add onClick prop
};

// Define the Heart component as a function component
const Shield = ({
  size = "24px",
  gradient = {
    allow: false,
    fill: "#000000",
  },
  strokeWidth = 1, // default strokeWidth value
  onClick,
}: CartOutlineProps) => {
  const [showCode, setShowCode] = useState(false); // Track the state of the code display

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const downloadAsPng = () => {
    const svgElement = document.getElementById("shield-outline-svg"); // Get the SVG element by its ID
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
        a.setAttribute("download", "shield.png"); // Set the download attribute to specify the file name as "heart_outline.png"
        a.style.display = "none"; // Hide the anchor element
        document.body.appendChild(a); // Append the anchor element to the document body
        a.click(); // Simulate a click on the anchor element to trigger the download
        document.body.removeChild(a); // Remove the anchor element from the document body after the download
      };
    }
  };
  
  const downloadAsSvg = () => {
    const svgElement = document.getElementById("shield-outline-svg"); // Get the SVG element by its ID
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string
  
      const a = document.createElement("a"); // Create an anchor element
      a.setAttribute(
        "href",
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
      ); // Set the anchor's href attribute to the SVG data encoded as a URI component
      a.setAttribute("download", "shield.svg"); // Set the download attribute to specify the file name as "heart_outline.svg"
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
      <div className="Container" style={{ width: "120px", height: "120px", overflow: "hidden" }}>
      <svg
      id="shield-outline-svg" // Add id to the svg element for accessing it in download functions
      height={size}
      width={size}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <defs>
        <linearGradient id={"gradient"}>
          <stop offset="0%" stop-color={gradient.allow && gradient.start} />
          <stop offset="100%" stop-color={gradient.allow && gradient.end} />
        </linearGradient>
      </defs>
      <g>
        <path
          d="m75,132.75c-4.77-2.67-9.25-5.35-14.02-8.56-4.77-2.94-8.97-6.15-13.18-9.63-4.21-3.48-8.13-7.22-11.78-10.96-3.65-4.01-6.73-8.02-9.25-12.57-2.52-4.55-4.77-9.36-6.17-14.17-1.4-5.08-2.24-10.43-2.24-16.04v-29.14c3.36,0,6.45,0,9.53-.27,2.8-.27,5.89-.8,8.69-1.34,2.8-.53,5.89-1.34,8.69-2.67,2.8-1.07,5.61-2.41,8.41-4.28,3.36-2.14,6.73-3.48,10.09-4.55,3.36-.8,7.01-1.34,11.22-1.34,1.96,0,3.93,0,5.61.27,1.68.27,3.65.53,5.33,1.07,1.68.8,3.36,1.34,5.05,2.14,1.68.8,3.36,1.6,5.05,2.67,2.8,1.6,5.61,3.21,8.41,4.28,2.8,1.07,5.61,1.87,8.69,2.67,2.8.53,5.89,1.07,8.97,1.34,3.08.27,6.17.27,9.53.27v28.88c0,5.61-.84,10.96-2.24,16.04-1.4,5.08-3.65,9.89-6.17,14.17-2.52,4.55-5.89,8.56-9.25,12.57-3.65,4.01-7.57,7.49-11.78,10.96-4.21,3.48-8.69,6.68-13.18,9.63-4.77,3.21-9.25,5.88-14.02,8.56Z" 
          strokeMiterlimit={3}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={gradient.allow ? "url(#gradient)" : gradient.fill}
        />
      </g>
      </svg>
        {/* <h2>Heart</h2> */}
        </div>
      <div>
      <h2>Cart</h2>
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
            backgroundColor: "#f5f5f5",
            padding: "10px",
            overflowY: "scroll",
          }}
        >
          <button
            className="dropdown"
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleCodeCloseClick}
          >
            Close
          </button>
          <pre className="language-markup">
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
d="m75,132.75c-4.77-2.67-9.25-5.35-14.02-8.56-4.77-2.94-8.97-6.15-13.18-9.63-4.21-3.48-8.13-7.22-11.78-10.96-3.65-4.01-6.73-8.02-9.25-12.57-2.52-4.55-4.77-9.36-6.17-14.17-1.4-5.08-2.24-10.43-2.24-16.04v-29.14c3.36,0,6.45,0,9.53-.27,2.8-.27,5.89-.8,8.69-1.34,2.8-.53,5.89-1.34,8.69-2.67,2.8-1.07,5.61-2.41,8.41-4.28,3.36-2.14,6.73-3.48,10.09-4.55,3.36-.8,7.01-1.34,11.22-1.34,1.96,0,3.93,0,5.61.27,1.68.27,3.65.53,5.33,1.07,1.68.8,3.36,1.34,5.05,2.14,1.68.8,3.36,1.6,5.05,2.67,2.8,1.6,5.61,3.21,8.41,4.28,2.8,1.07,5.61,1.87,8.69,2.67,2.8.53,5.89,1.07,8.97,1.34,3.08.27,6.17.27,9.53.27v28.88c0,5.61-.84,10.96-2.24,16.04-1.4,5.08-3.65,9.89-6.17,14.17-2.52,4.55-5.89,8.56-9.25,12.57-3.65,4.01-7.57,7.49-11.78,10.96-4.21,3.48-8.69,6.68-13.18,9.63-4.77,3.21-9.25,5.88-14.02,8.56Z" 
strokeMiterlimit=${3}
fill="none"
strokeWidth=${strokeWidth}
stroke=${gradient.allow ? "url(#gradient)" : gradient.fill}
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

export default Shield;
