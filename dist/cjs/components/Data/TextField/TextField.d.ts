import * as React from 'react';
import { TextFieldBaseProps } from './TextFieldBase';
declare type TextFieldProps = {} & TextFieldBaseProps;
declare const TextField: (props: React.HTMLProps<HTMLInputElement>) => JSX.Element;
export type { TextFieldProps };
export default TextField;
