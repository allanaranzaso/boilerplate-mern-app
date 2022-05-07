import { render, screen } from "@testing-library/react"
import Footer from "../components/footer/Footer";

/**
 * Unit test for footer component
 */
test('renders footer component', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId(/footer/i);
    expect(footerElement).toBeInTheDocument();
})

// test that footer links direct to correct page