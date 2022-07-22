import React from 'react';

declare type ChildrenDefaultType = React.ReactNode;

declare type ButtonTypeDefaultType = 'button' | 'submit' | 'reset' | undefined;
declare type ButtonElementBaseProps = {
    type?: ButtonTypeDefaultType;
} & React.HTMLProps<HTMLButtonElement>;

declare type InputElementBaseProps = {} & React.HTMLProps<HTMLInputElement>;
declare type SelectElementBaseProps = {} & React.HTMLProps<HTMLSelectElement>;
declare type FormElementBaseProps = {} & React.HTMLProps<HTMLFormElement>;
declare type LabelElementBaseProps = {} & React.HTMLProps<HTMLLabelElement>;
declare type TableElementBaseProps = {} & React.HTMLProps<HTMLTableElement>;
declare type TableHeaderElementBaseProps = {} & React.HTMLProps<HTMLTableSectionElement>;
declare type TableBodyElementBaseProps = {} & React.HTMLProps<HTMLTableSectionElement>;
declare type TableFooterElementBaseProps = {} & React.HTMLProps<HTMLTableSectionElement>;
declare type TableRowElementBaseProps = {} & React.HTMLProps<HTMLTableRowElement>;
declare type TableColElementBaseProps = {} & React.HTMLProps<HTMLTableColElement>;

export { ButtonElementBaseProps, ButtonTypeDefaultType, ChildrenDefaultType, FormElementBaseProps, InputElementBaseProps, LabelElementBaseProps, SelectElementBaseProps, TableBodyElementBaseProps, TableColElementBaseProps, TableElementBaseProps, TableFooterElementBaseProps, TableHeaderElementBaseProps, TableRowElementBaseProps };
