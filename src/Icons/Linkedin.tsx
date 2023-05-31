import React from "react";

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
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const downloadAsPng = () => {
    const svgElement = document.getElementById("linkedin-outline-svg"); // Get the SVG element by its ID
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
        a.setAttribute("download", "linkedin.png"); // Set the download attribute to specify the file name as "heart_outline.png"
        a.style.display = "none"; // Hide the anchor element
        document.body.appendChild(a); // Append the anchor element to the document body
        a.click(); // Simulate a click on the anchor element to trigger the download
        document.body.removeChild(a); // Remove the anchor element from the document body after the download
      };
    }
  };
  
  const downloadAsSvg = () => {
    const svgElement = document.getElementById("linkedin-outline-svg"); // Get the SVG element by its ID
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string
  
      const a = document.createElement("a"); // Create an anchor element
      a.setAttribute(
        "href",
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
      ); // Set the anchor's href attribute to the SVG data encoded as a URI component
      a.setAttribute("download", "linkedin.svg"); // Set the download attribute to specify the file name as "heart_outline.svg"
      a.style.display = "none"; // Hide the anchor element
      document.body.appendChild(a); // Append the anchor element to the document body
      a.click(); // Simulate a click on the anchor element to trigger the download
      document.body.removeChild(a); // Remove the anchor element from the document body after the download
    }
  };



  return (
    <div>
    <svg
      id="linkedin-outline-svg" // Add id to the svg element for accessing it in download functions
      height={size}
      width={size}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
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
        <path d="M745.472 352.256c-8.192-4.096-20.48-4.096-28.672 0L462.848 614.4 344.064 491.52c-8.192-8.192-20.48-8.192-28.672 0s-8.192 20.48-4.096 28.672L446.464 655.36h4.096s4.096 0 4.096 4.096h16.384s4.096 0 4.096-4.096h4.096l270.335-274.432c0-8.192 0-20.48-4.096-28.672z"/><path d="M512 1024C229.376 1024 0 794.624 0 512S229.376 0 512 0s512 229.376 512 512-229.376 512-512 512zm0-983.04C253.952 40.96 40.96 253.952 40.96 512S253.952 983.04 512 983.04 983.04 770.048 983.04 512 770.048 40.96 512 40.96z"
            fill={gradient.allow ? "url(#gradient)" : gradient.fill}
            strokeWidth={strokeWidth}
            stroke={gradient.allow ? gradient.start : gradient.fill}
        />
      </g>
    </svg>
    <select className="dropdown" onChange={(e) => e.target.value === "png" ? downloadAsPng() : downloadAsSvg()}>
        <option value="" disabled selected>Download</option>
        <option value="png">Download PNG</option>
        <option value="svg">Download SVG</option>
      </select>
    </div>
    
  );
};

export default Shield;
