import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';
export interface HtagProps
  extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}
