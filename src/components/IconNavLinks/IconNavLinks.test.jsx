import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import IconNavLinks from "./IconNavLinks";

const renderLinksList = (isMobile, closeMobileMenu = () => {}) => {
    return render(<IconNavLinks 
        isMobile={isMobile} closeMobileMenu={closeMobileMenu} />, 
        { wrapper: BrowserRouter });
};


/* Unit Tests */

describe('IconNavLinks - Initial Render', () => {
    it('should render a list of links correctly in web view', () => {
        renderLinksList(false);

        const linksList = screen.getByRole('list');

        expect(linksList).toBeInTheDocument();
        expect(linksList).toHaveClass('nav__list__web');

        // Expect icons to be in the document
        expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /worksheet/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /settings/i })).toBeInTheDocument();
    });

    it('should render a list of links correctly in mobile view', () => {
        renderLinksList(true);

        const linksList = screen.getByRole('list');

        expect(linksList).toBeInTheDocument();
        expect(linksList).toHaveClass('nav__list');

        // Expect icons to be in the document
        expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /worksheet/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /settings/i })).toBeInTheDocument();
    });
});

describe("Icons call closeNavMenu when clicked:", () => {
    beforeEach(() => {
        closeNavMenu = jest.fn();

        renderLinksList(false, closeNavMenu);
    });

    it("Home Link", () => {
        const homeLink = screen.getByRole("link", { name: /home/i });
        fireEvent.click(homeLink);

        expect(closeNavMenu).toHaveBeenCalled();
    })

    it("Settings Link", () => {
        const settingsLink = screen.getByRole("link", { name: /settings/i });
        fireEvent.click(settingsLink);

        expect(closeNavMenu).toHaveBeenCalled();
    })

    it("Worksheet Link", () => {
        const worksheetLink = screen.getByRole("link", { name: /worksheet/i });
        fireEvent.click(worksheetLink);

        expect(closeNavMenu).toHaveBeenCalled();
    })
});

describe("Props not passed to IconNavLinks component", () => {
    it("should render correctly in web view", () => {
        render(<IconNavLinks />, { wrapper: BrowserRouter });

        const linksList = screen.getByRole("list");

        expect(linksList).toBeInTheDocument();
        expect(linksList).toHaveClass("nav__list__web");
    });
});