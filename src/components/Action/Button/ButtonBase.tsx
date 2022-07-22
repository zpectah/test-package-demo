import * as React from 'react';

import { ChildrenDefaultType, ButtonElementBaseProps } from '../../../types';

type ButtonBaseProps = {
	children?: ChildrenDefaultType,
} & ButtonElementBaseProps;

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
	const {
		children,
		type = 'button',
		...rest
	} = props;

	return (
		<button
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export type { ButtonBaseProps };
export default ButtonBase;
