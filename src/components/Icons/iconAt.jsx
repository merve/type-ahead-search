import React from "react";

function IconAt({ width = "24", height = "24", color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 15.892c-.281 3.187-2.508 5-5.034 5-2.527 0-4.21-2.239-3.966-5 .243-2.761 2.32-5 4.847-5 2.527 0 4.395 2.25 4.153 5v0z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.985 25.986c-1.785.75-2.954.906-4.954.906-6.076 0-10.563-4.925-10.031-11s5.894-11 11.97-11c6.842 0 10.604 4.483 10.076 10.483-.395 4.48-3.257 5.77-4.756 5.504-1.41-.25-2.574-1.526-2.359-3.968l.53-6.016"
      ></path>
    </svg>
  );
}

export default IconAt;
