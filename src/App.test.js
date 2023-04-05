import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import About from "../src/components/About";
import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";
import Social from "../src/components/Social";
import Footer from "../src/components/Footer";
import SignUpForm from "../src/components/Signup";
import Login from "../src/components/Login";

//Navbar Component Test

describe("Navbar component", () => {
  it("renders a logo", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutUsLink = screen.getByRole("link", { name: /about us/i });
    expect(aboutUsLink).toBeInTheDocument();

    const marketingLink = screen.getByRole("link", { name: /marketing/i });
    expect(marketingLink).toBeInTheDocument();
  });
});

//Main Component Test

describe("Main component", () => {
  it("renders the main component", () => {
    // Render the Main component
    render(<Main />);
  });

  test("renders hero image", () => {
    const { getByAltText } = render(<Main />);
    const heroImage = getByAltText("hero-image");
    expect(heroImage).toBeInTheDocument();
  });

  test("renders local fights images", () => {
    const { getAllByAltText } = render(<Main />);
    const fightImages = getAllByAltText(/fight/i);
    expect(fightImages.length).toBe(3);
  });

  test("renders advertising banner with correct link", () => {
    const { getByText } = render(<Main />);
    const bannerLink = getByText(/x/i).closest("a");
    expect(bannerLink).toHaveAttribute("href", "https://www.xmartial.com/");
  });
});

//About Component Test

describe("About component", () => {
  it("renders the component without errors", () => {
    render(<About />);

    // Test that the component is rendered
    const aboutElement = screen.getByTestId("about");
    expect(aboutElement).toBeInTheDocument();

    // Test that the "About Us" heading is displayed
    const aboutHeading = screen.getByRole("heading", { name: "About Us" });
    expect(aboutHeading).toBeInTheDocument();
  });

  it("renders the video component without errors", () => {
    render(<About />);

    // Test that the embedded video is displayed
    const aboutVideo = screen.getByTitle("BJJ Club Video");
    expect(aboutVideo).toBeInTheDocument();
  });
});

describe("Socials component", () => {
  it("Social component renders correctly", () => {
    render(<Social />);
  });

  it("Renders exposure heading without errors", () => {
    render(<Social />);
    // Assert that the text "Exposure" is rendered
    const exposureElement = screen.getByText(/Exposure/i);
    expect(exposureElement).toBeInTheDocument();
  });

  it("Renders facebook content without errors", () => {
    render(<Social />);
    // Assert that the Facebook statistic is rendered
    const facebookElement = screen.getByText(/Facebook/i);
    expect(facebookElement).toBeInTheDocument();
  });

  it("Renders instagram content without errors", () => {
    render(<Social />);
    // Assert that the Instagram statistic is rendered
    const instagramElement = screen.getByText(/Instagram/i);
    expect(instagramElement).toBeInTheDocument();
  });

  it("Renders snapchat content without errors", () => {
    render(<Social />);
    // Assert that the Snapchat statistic is rendered
    const snapchatElement = screen.getByText(/Snapchat/i);
    expect(snapchatElement).toBeInTheDocument();
  });

  it("Renders tiktok content without errors", () => {
    render(<Social />);
    // Assert that the Tiktok statistic is rendered
    const tiktokElement = screen.getByText(/Tiktok/i);
    expect(tiktokElement).toBeInTheDocument();
  });
});

//Footer

// Mock FontAwesomeIcon to prevent errors
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span data-testid="mock-fontawesome-icon" />,
}));

describe("Footer component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Footer />);
    const facebookLink = getByText("Facebook");
    const snapchatLink = getByText("Snapchat");
    const instagramLink = getByText("Instagram");
    const tiktokLink = getByText("Tiktok");

    expect(facebookLink).toBeInTheDocument();
    expect(snapchatLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(tiktokLink).toBeInTheDocument();
  });

  it("has correct fontawesome icons", () => {
    const { getAllByTestId } = render(<Footer />);
    const mockFontAwesomeIcons = getAllByTestId("mock-fontawesome-icon");

    expect(mockFontAwesomeIcons).toHaveLength(4);
  });
});

//Signup Form

describe("SignUpForm", () => {
  it("renders correctly", () => {
    const onClose = jest.fn();
    const { getByLabelText, getByText } = render(
      <SignUpForm onClose={onClose} />
    );

    // Assert form elements are rendered
    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Email:")).toBeInTheDocument();
    expect(getByLabelText("Password:")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
  });

  it("submits form with valid input and calls onClose", () => {
    const onClose = jest.fn();
    const { getByLabelText, getByText } = render(
      <SignUpForm onClose={onClose} />
    );

    // Fill in form fields
    fireEvent.change(getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.change(getByLabelText("Email:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByLabelText("Password:"), {
      target: { value: "password123" },
    });

    // Submit form
    fireEvent.click(getByText("Sign Up"));

    // Assert that onClose is called
    expect(onClose).toHaveBeenCalled();
  });

  it("displays error messages for invalid input", () => {
    const onClose = jest.fn();
    const { getByLabelText, getByText } = render(
      <SignUpForm onClose={onClose} />
    );

    // Fill in form fields with invalid input
    fireEvent.change(getByLabelText("Name:"), { target: { value: "" } });
    fireEvent.change(getByLabelText("Email:"), { target: { value: "" } });
    fireEvent.change(getByLabelText("Password:"), { target: { value: "" } });

    // Submit form
    fireEvent.click(getByText("Sign Up"));

    // Assert error messages are displayed
    expect(getByText("*Please enter your name")).toBeInTheDocument();
    expect(getByText("*Please enter your email")).toBeInTheDocument();
    expect(getByText("*Please enter a valid password")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(<SignUpForm onClose={onClose} />);

    // Click close button
    fireEvent.click(getByText("Close"));

    // Assert that onClose is called
    expect(onClose).toHaveBeenCalled();
  });
});

//Login Form

// Mock onClose function
const mockOnClose = jest.fn();
describe("LoginForm", () => {
  it("Login component renders correctly", () => {
    render(<Login onClose={mockOnClose} />);

    // Check if email input is rendered
    const emailInput = screen.getByLabelText("Email:");
    expect(emailInput).toBeInTheDocument();

    // Check if password input is rendered
    const passwordInput = screen.getByLabelText("Password:");
    expect(passwordInput).toBeInTheDocument();

    // Check if Login button is rendered
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    // Check if Close button is rendered
    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
  });

  it("Login form submits with valid email and password", () => {
    render(<Login onClose={mockOnClose} />);

    // Enter valid email and password
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Click Login button
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    // Check if onClose function is called
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("Login form shows error messages with invalid email and password", () => {
    render(<Login onClose={mockOnClose} />);

    // Enter invalid email and password
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    // Click Login button
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    // Check if error messages are displayed
    const emailError = screen.getByText(
      "This email is invalid, please try again"
    );
    const passwordError = screen.getByText(
      "*Your password is not correct, please try again."
    );
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("Close button calls onClose function", () => {
    render(<Login onClose={mockOnClose} />);

    // Click Close button
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    // Check if onClose function is called with false argument
    expect(mockOnClose).toHaveBeenCalledWith(false);
  });
});
