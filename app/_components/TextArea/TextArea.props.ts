import { DetailedHTMLProps, TextareaHTMLAttributes, ForwardedRef } from 'react';
import { FieldError } from 'react-hook-form';
export interface TextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}
