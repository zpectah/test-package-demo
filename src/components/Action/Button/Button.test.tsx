import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from './Button';

describe("Running Test for Button", () => {

    test("Check Button Present", () => {
        render(<Button />)
        expect(screen.getByRole('button',{ name:"Button default" })).toBeInTheDocument();
    });

});