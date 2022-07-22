import * as React from 'react';
import { ChildrenDefaultType, ButtonElementBaseProps } from '../../../types';
declare type ButtonBaseProps = {
    children?: ChildrenDefaultType;
} & ButtonElementBaseProps;
declare const ButtonBase: React.FC<ButtonBaseProps>;
export type { ButtonBaseProps };
export default ButtonBase;
