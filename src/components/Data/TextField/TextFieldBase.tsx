import * as React from 'react';

import { InputElementBaseProps } from '../../../types';

type TextFieldBaseProps = {} & InputElementBaseProps;

const TextFieldBase = (props: TextFieldBaseProps) => {
	const { ...rest } = props;

	return (
		<input
			{...rest}
		/>
	);
};

export type { TextFieldBaseProps };
export default TextFieldBase;
