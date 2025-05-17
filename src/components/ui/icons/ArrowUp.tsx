import type { IconProps } from "@/Types/IconProps";
import React from "react";

export const ArrowUp: React.FC<IconProps> = ({ color = "#29A174" }) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7 1M7 1H3M7 1V5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
