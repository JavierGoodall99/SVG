import React from "react";
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
const CartOutline = ({
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
        const svgElement = document.getElementById("cart-outline-svg"); // Get the SVG element by its ID
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
            a.setAttribute("download", "cart.png"); // Set the download attribute to specify the file name as "heart_outline.png"
            a.style.display = "none"; // Hide the anchor element
            document.body.appendChild(a); // Append the anchor element to the document body
            a.click(); // Simulate a click on the anchor element to trigger the download
            document.body.removeChild(a); // Remove the anchor element from the document body after the download
          };
        }
      };
      
      const downloadAsSvg = () => {
        const svgElement = document.getElementById("cart-outline-svg"); // Get the SVG element by its ID
        if (svgElement) {
          const svgData = new XMLSerializer().serializeToString(svgElement); // Convert the SVG element to a string
      
          const a = document.createElement("a"); // Create an anchor element
          a.setAttribute(
            "href",
            "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
          ); // Set the anchor's href attribute to the SVG data encoded as a URI component
          a.setAttribute("download", "cart.svg"); // Set the download attribute to specify the file name as "heart_outline.svg"
          a.style.display = "none"; // Hide the anchor element
          document.body.appendChild(a); // Append the anchor element to the document body
          a.click(); // Simulate a click on the anchor element to trigger the download
          document.body.removeChild(a); // Remove the anchor element from the document body after the download
        }
      };



    return (
      <div>
    <svg
    id="cart-outline-svg" // Add id to the svg element for accessing it in download functions
      height={size}
      width={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 486.569 486.569"
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
          d="M146.069,320.369h268.1c30.4,0,55.2-24.8,55.2-55.2v-112.8c0-0.1,0-0.3,0-0.4c0-0.3,0-0.5,0-0.8c0-0.2,0-0.4-0.1-0.6
		c0-0.2-0.1-0.5-0.1-0.7s-0.1-0.4-0.1-0.6c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6
		c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6
		c-0.1-0.2-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.4c-0.2-0.2-0.3-0.3-0.5-0.5
		c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.3-0.2-0.5-0.3s-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.3
		s-0.4-0.2-0.6-0.3s-0.4-0.2-0.6-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.2-0.7-0.2s-0.4-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.8-0.1
		c-0.1,0-0.2-0.1-0.4-0.1l-339.8-46.9v-47.4c0-0.5,0-1-0.1-1.4c0-0.1,0-0.2-0.1-0.4c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8
		c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.1-0.3-0.2-0.4
		c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.5s-0.2-0.3-0.3-0.5s-0.3-0.4-0.4-0.6c-0.1-0.1-0.2-0.2-0.3-0.3
		c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5
		c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-73.7-31c-6.9-2.9-14.8,0.3-17.7,7.2
		s0.3,14.8,7.2,17.7l65.4,27.6v61.2v9.7v74.4v66.5v84c0,28,21,51.2,48.1,54.7c-4.9,8.2-7.8,17.8-7.8,28c0,30.1,24.5,54.5,54.5,54.5
		s54.5-24.5,54.5-54.5c0-10-2.7-19.5-7.5-27.5h121.4c-4.8,8.1-7.5,17.5-7.5,27.5c0,30.1,24.5,54.5,54.5,54.5s54.5-24.5,54.5-54.5
		s-24.5-54.5-54.5-54.5h-255c-15.6,0-28.2-12.7-28.2-28.2v-36.6C126.069,317.569,135.769,320.369,146.069,320.369z M213.269,431.969
		c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S213.269,416.769,213.269,431.969z M428.669,431.969
		c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S428.669,416.769,428.669,431.969z M414.169,293.369h-268.1
		c-15.6,0-28.2-12.7-28.2-28.2v-66.5v-74.4v-5l324.5,44.7v101.1C442.369,280.769,429.669,293.369,414.169,293.369z"
        fill={gradient.allow ? `url(#gradient)` : gradient.fill} // gradientId for the fill
        strokeWidth={strokeWidth} // strokeWidth prop applied
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

export default CartOutline;
