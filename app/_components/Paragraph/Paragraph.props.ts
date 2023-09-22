import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;
  size: 's' | 'm' | 'l';
}
