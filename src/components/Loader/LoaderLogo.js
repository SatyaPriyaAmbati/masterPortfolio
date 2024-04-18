import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <svg width="600" height="200">
        <defs>
          <style>
            {`
              .signature1 {
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: dash 1s linear forwards 0.5s;
              }
              .letter {
                opacity: 0;
                animation: fadein 2s linear forwards 1.5s;
              }
              @keyframes fadein {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @keyframes dash {
                from {
                  stroke-dashoffset: 800;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}
          </style>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontFamily="cursive"
          fontStyle="Brush Script MT bold"
          fontSize="45"
          fill="white"
          className="signature1 letter"
        >
          Satya Priya
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
