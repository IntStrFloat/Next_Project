import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  color: 'primary' | 'ghost' | 'red' | 'green' | 'gray';
  size: 's' | 'm';
  href?: string;
}
