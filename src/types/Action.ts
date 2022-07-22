import React from 'react';

export type ButtonTypeDefaultType = 'button' | 'submit' | 'reset' | undefined;
export type ButtonElementBaseProps = {
	type?: ButtonTypeDefaultType,
} & React.HTMLProps<HTMLButtonElement>;
