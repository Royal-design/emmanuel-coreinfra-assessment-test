import type { IconProps } from "@/Types/IconProps";

export const Logout: React.FC<IconProps> = ({ color = "white" }) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.3335 1L4.89179 1.1559C3.17261 1.76267 2.31302 2.06605 1.82326 2.75828C1.3335 3.45051 1.3335 4.36206 1.3335 6.18518V7.81482C1.3335 9.63794 1.3335 10.5495 1.82326 11.2417C2.31302 11.934 3.17261 12.2373 4.89179 12.8441L5.3335 13"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M12.0002 7.00016L5.3335 7.00016M12.0002 7.00016C12.0002 6.53334 10.6706 5.66118 10.3335 5.3335M12.0002 7.00016C12.0002 7.46698 10.6706 8.33914 10.3335 8.66683"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
