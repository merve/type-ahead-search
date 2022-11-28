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
        fill={color}
        d="M26.706 9.022c.188.187.294.44.294.706V29c0 .553-.447 1-1 1H6c-.553 0-1-.447-1-1V3c0-.553.447-1 1-1h13.272c.266 0 .522.106.71.294l6.724 6.728zm-2.012 1.165l-5.881-5.88v5.88h5.88zM10 15.064a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25h12a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H10zm0 4.25a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25h5.75a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H10z"
      ></path>
    </svg>
  );
}

export default IconAt;
