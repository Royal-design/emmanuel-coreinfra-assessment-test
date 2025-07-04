import type { IconProps } from "@/Types/IconProps";

export const CardRequest: React.FC<IconProps> = ({ color = "#D0D5DD" }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3335 11.3332H7.00016C4.49444 11.3332 3.24159 11.3332 2.40513 10.6726C2.27135 10.5669 2.14762 10.4505 2.03536 10.3246C1.3335 9.53732 1.3335 8.35816 1.3335 5.99984C1.3335 3.64151 1.3335 2.46235 2.03536 1.6751C2.14762 1.54919 2.27135 1.43274 2.40513 1.32708C3.24159 0.666504 4.49444 0.666504 7.00016 0.666504H9.00016C11.5059 0.666504 12.7587 0.666504 13.5952 1.32708C13.729 1.43274 13.8527 1.54919 13.965 1.6751C14.5973 2.3844 14.6599 3.41183 14.6661 5.33317"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1.3335 4H14.6668" stroke={color} strokeLinejoin="round" />
      <path
        d="M9.3335 9.99967C9.3335 9.99967 10.0002 9.99967 10.6668 11.333C10.6668 11.333 12.7845 7.99967 14.6668 7.33301"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
