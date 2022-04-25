import { render, screen } from '@testing-library/react';

import Header from "../Header";

describe("Header", () => {
    it('Should render header', async() => {
        render(<Header />)
        const header = await screen.findByTestId("header");
        expect(header).toBeInTheDocument();
    })
})