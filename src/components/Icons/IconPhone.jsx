import React from "react";

function IconPhone({ width = "24", height = "24", color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M8.827 14.387a20.198 20.198 0 008.786 8.786l2.934-2.933c.36-.36.893-.48 1.36-.32a15.21 15.21 0 004.76.76c.733 0 1.333.6 1.333 1.333v4.654C28 27.4 27.4 28 26.667 28 14.147 28 4 17.853 4 5.333 4 4.6 4.6 4 5.333 4H10c.733 0 1.333.6 1.333 1.333 0 1.667.267 3.267.76 4.76.147.467.04.987-.333 1.36l-2.933 2.934z"
      ></path>
    </svg>
  );
}

export default IconPhone;
