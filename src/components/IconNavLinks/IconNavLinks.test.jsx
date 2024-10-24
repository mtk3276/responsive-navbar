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

        // Expect icons to be in the document]
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

describe("Icons call closeMobileMenu when clicked:", () => {
    let closeMobileMenu;

    beforeEach(() => {
        closeMobileMenu = jest.fn();

        renderLinksList(false, closeMobileMenu);
    });

    it("Home Link", () => {
        const homeLink = screen.getByRole("link", { name: /home/i });
        fireEvent.click(homeLink);

        expect(closeMobileMenu).toHaveBeenCalled();
    })

    it("Settings Link", () => {
        const settingsLink = screen.getByRole("link", { name: /settings/i });
        fireEvent.click(settingsLink);

        expect(closeMobileMenu).toHaveBeenCalled();
    })

    it("Worksheet Link", () => {
        const worksheetLink = screen.getByRole("link", { name: /worksheet/i });
        fireEvent.click(worksheetLink);

        expect(closeMobileMenu).toHaveBeenCalled();
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

describe("Navigation", () => {
    const otherRoute = "/other";
    const homeRoute = "/";
    const worksheetRoute = "/worksheet";
    const settingsRoute = "/settings";

    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={[otherRoute]}>
                <IconNavLinks isMobile={false} closeMobileMenu={() => {}}/>
                <Routes>
                    <Route path={homeRoute} element={<div data-testid="home-page">Home Page</div>} />
                    <Route path={worksheetRoute} element={<div data-testid="worksheet-page">Worksheet Page</div>} />
                    <Route path={settingsRoute} element={<div data-testid="settings-page">Settings Page</div>} />
                </Routes>
            </MemoryRouter>
        );
    });

    it("navigates to home when home link is clicked", () => {
        const homeLink = screen.getByRole("link", { name: "home" });
        fireEvent.click(homeLink);

        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    })
    
    it("navigates to worksheet when worksheet link is clicked", () => {
        const worksheetLink = screen.getByRole("link", { name: "worksheet" });
        fireEvent.click(worksheetLink);

        expect(screen.getByText(/Worksheet Page/i)).toBeInTheDocument();
    })
    
    it("navigates to settings when settings link is clicked", () => {
        const settingsLink = screen.getByRole("link", { name: "settings" });
        fireEvent.click(settingsLink);

        expect(screen.getByText(/Settings Page/i)).toBeInTheDocument();
    })
})
