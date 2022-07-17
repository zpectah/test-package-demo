import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TestComponent from './TestComponent';

describe("Running Test for Marbella Button", () => {

    test("Check Button Disabled", () => {
        render(<TestComponent />)
        expect(screen.getByRole('div',{ name:"Button marbella" })).toBeInTheDocument();
    });

});