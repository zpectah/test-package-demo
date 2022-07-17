/// <reference types="react" />
declare module 'test-package-rollup' {
    type someType = {};
}

declare type TestComponentProps = {};
declare const TestComponent: () => JSX.Element;

declare const test: {};

export { TestComponent, TestComponentProps, test };
