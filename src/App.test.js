import React from "react";
import { render, screen } from "@testing-library/react";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import About from "../src/components/About";
import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";

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

describe("Main", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Main />);
    expect(wrapper.exists()).toBe(true);
  });

  it("contains a hero image", () => {
    const wrapper = mount(<Main />);
    const heroImage = wrapper.find(
      'img[src="../../assets/Takedown_Titans_Cropped_1.png"]'
    );
    expect(heroImage.exists()).toBe(true);
  });

  it("contains links to UFC fights", () => {
    const wrapper = mount(<Main />);
    const fight286Link = wrapper.find(
      'a[href="https://www.ufc.com/event/ufc-286"]'
    );
    const fight287Link = wrapper.find(
      'a[href="https://www.ufc.com/event/ufc-287"]'
    );
    const fight288Link = wrapper.find(
      'a[href="https://www.ufc.com/event/ufc-288"]'
    );
    expect(fight286Link.exists()).toBe(true);
    expect(fight287Link.exists()).toBe(true);
    expect(fight288Link.exists()).toBe(true);
  });

  it("contains a link to xmartial.com", () => {
    const wrapper = mount(<Main />);
    const xmartialLink = wrapper.find('a[href="https://www.xmartial.com/"]');
    expect(xmartialLink.exists()).toBe(true);
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
