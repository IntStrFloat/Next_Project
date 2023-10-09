import { DetailedHTMLProps, SVGProps, HTMLAttributes } from 'react';
interface SortSvgProps extends SVGProps<SVGSVGElement> {}
export const MenuSvg: React.FC<SortSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="20" height="3" rx="1.5" fill="#7653FC" />
      <rect y="7" width="20" height="3" rx="1.5" fill="#7653FC" />
      <rect y="14" width="20" height="3" rx="1.5" fill="#7653FC" />
    </svg>
  );
};
