import { DetailedHTMLProps, SVGProps, HTMLAttributes } from 'react';
interface SortSvgProps extends SVGProps<SVGSVGElement> {
  color: string;
}
export const SortSvg: React.FC<SortSvgProps> = ({ color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill={color}
      {...props}
    >
      <rect width="20" height="3" rx="1.5" fill="none" />
      <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
      <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
    </svg>
  );
};
