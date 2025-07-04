import type { IconProps } from "@/Types/IconProps";

export const CardScheme: React.FC<IconProps> = ({ color = "#D0D5DD" }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666504 6.99984C0.666504 4.01428 0.666504 2.52149 1.594 1.594C2.52149 0.666504 4.01428 0.666504 6.99984 0.666504C9.9854 0.666504 11.4782 0.666504 12.4057 1.594C13.3332 2.52149 13.3332 4.01428 13.3332 6.99984C13.3332 9.9854 13.3332 11.4782 12.4057 12.4057C11.4782 13.3332 9.9854 13.3332 6.99984 13.3332C4.01428 13.3332 2.52149 13.3332 1.594 12.4057C0.666504 11.4782 0.666504 9.9854 0.666504 6.99984Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M4.6665 5.6665C4.11422 5.6665 3.6665 5.21879 3.6665 4.6665C3.6665 4.11422 4.11422 3.6665 4.6665 3.6665C5.21879 3.6665 5.6665 4.11422 5.6665 4.6665C5.6665 5.21879 5.21879 5.6665 4.6665 5.6665Z"
        stroke={color}
      />
      <path
        d="M9.33301 10.333C9.88529 10.333 10.333 9.88529 10.333 9.33301C10.333 8.78072 9.88529 8.33301 9.33301 8.33301C8.78072 8.33301 8.33301 8.78072 8.33301 9.33301C8.33301 9.88529 8.78072 10.333 9.33301 10.333Z"
        stroke={color}
      />
      <path
        d="M5.66634 4.6665L10.333 4.6665"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M8.33317 9.33301L3.6665 9.33301"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};
