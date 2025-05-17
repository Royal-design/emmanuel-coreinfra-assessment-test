import type { IconProps } from "@/Types/IconProps";
import React from "react";

export const Chevron: React.FC<IconProps> = ({ color = "#808080" }) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
