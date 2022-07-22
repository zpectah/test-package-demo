import * as React from 'react';

import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';

type TextFieldProps = {} & TextFieldBaseProps;

const TextField = (props: TextFieldProps) => {
	const { ...rest } = props;

	return (
		<TextFieldBase
			{...rest}
		/>
	);
};

export type { TextFieldProps };
export default TextField;
