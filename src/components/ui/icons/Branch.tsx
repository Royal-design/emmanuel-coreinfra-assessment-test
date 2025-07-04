import type { IconProps } from "@/Types/IconProps";

export const Branch: React.FC<IconProps> = ({ color = "#D0D5DD" }) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1.33301L3 1.33301C1.34533 1.33301 1 1.67834 1 3.33301L1 14.6663L9 14.6663L9 3.33301C9 1.67834 8.65467 1.33301 7 1.33301Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M11 5.33301L9 5.33301L9 14.6663L13 14.6663L13 7.33301C13 5.67834 12.6547 5.33301 11 5.33301Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M4.3335 4L5.66683 4M4.3335 6L5.66683 6M4.3335 8L5.66683 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66683 14.6665L6.66683 11.9998C6.66683 11.3713 6.66683 11.057 6.47157 10.8618C6.27631 10.6665 5.96204 10.6665 5.3335 10.6665H4.66683C4.03829 10.6665 3.72402 10.6665 3.52876 10.8618C3.3335 11.057 3.3335 11.3713 3.3335 11.9998L3.3335 14.6665"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};
