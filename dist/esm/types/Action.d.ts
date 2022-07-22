import React from 'react';
export declare type ButtonTypeDefaultType = 'button' | 'submit' | 'reset' | undefined;
export declare type ButtonElementBaseProps = {
    type?: ButtonTypeDefaultType;
} & React.HTMLProps<HTMLButtonElement>;
