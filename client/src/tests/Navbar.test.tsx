import { render, screen } from "@testing-library/react"
import Navbar from "../components/navbar/Navbar"

/**
 * Unit test for navbar component
 */
test('renders navbar component', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId(/nav/i);
    expect(navbarElement).toBeInTheDocument();
})

// test that navbar links direct to correct page