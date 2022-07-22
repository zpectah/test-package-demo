import * as React from 'react';

import ButtonBase, { ButtonBaseProps } from './ButtonBase';

type ButtonProps = {} & ButtonBaseProps;

const Button: React.FC<ButtonProps> = (props) => {
	const {
		...rest
	} = props;

	return (
		<ButtonBase
			{...rest}
		/>
	);
};

export type { ButtonProps };
export default Button;
