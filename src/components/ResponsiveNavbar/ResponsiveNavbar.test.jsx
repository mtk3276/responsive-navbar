import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ResponsiveNavbar from "./ResponsiveNavbar";

// mock useMediaQuery hook to simulate different screen sizes in tests
jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(),
}));

const renderNavbar = (isMobile = false) => {
    useMediaQuery.mockReturnValue(isMobile);
    render(<ResponsiveNavbar />, { wrapper: BrowserRouter });
    if (isMobile) {
        // Open the mobile menu if it"s a mobile view
        fireEvent.click(screen.getByText(/menu/i));
    };
};

/* Unit Tests */

describe("ResponsiveNavbar - Initial Render", () => {
    it("should render correctly in web view", () => {
        // mock web view
        renderNavbar(false);

        // assert that the navigation is using the web class
        expect(screen.getByRole("navigation")).toHaveClass("nav-web");

        // ensure all expected navlinks are rendered
        expect(screen.getByTestId("the-maths-club-logo")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /^home$/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /worksheet/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /settings/i })).toBeInTheDocument();
    });

    it("should render correctly in mobile view", () => {
        // mock mobile view
        renderNavbar(true);

        // assert that the navigation is using the mobile class
        expect(screen.getByRole("navigation")).toHaveClass("nav-mobile");

        // ensure the menu toggle is rendered
        const toggle = screen.getByText(/menu/i);
        expect(toggle).toBeInTheDocument();
    });
});

describe("Menu", () => {
    beforeEach(() => {
        renderNavbar(true);
    });

    it("opens when MENU is clicked", () => {
        // close the menu
        fireEvent.click(screen.getByText(/close/i));
        const navMenu = screen.getByTestId("nav-menu");
        expect(navMenu).not.toHaveClass("show-menu");
        
        // open the menu
        const toggle = screen.getByText(/menu/i);
        fireEvent.click(toggle);

        // assert that the show-menu class is applied to the nav-menu 
        expect(navMenu).toHaveClass("show-menu");
    });

    it("closes when CLOSE is clicked", () => {
        // close the menu
        const close = screen.getByText(/close/i);
        fireEvent.click(close);

        // assert that the show-menu class is applied to the nav-menu div
        const navMenu = screen.getByTestId("nav-menu");
        expect(navMenu).not.toHaveClass("show-menu");
    })
});

describe("Menu - close on link and background click", () => {
    beforeEach(() => {
        renderNavbar(true);
    });

    it("closes when home link is clicked", () => {
        const homeLink = screen.getByRole("link", { name: /^home$/i });

        fireEvent.click(homeLink);
        expect(screen.getByTestId("nav-menu")).not.toHaveClass("show-menu");
    });
    it("closes when worksheet link is clicked", () => {
        const worksheetLink = screen.getByRole("link", { name: /worksheet/i });

        fireEvent.click(worksheetLink);
        expect(screen.getByTestId("nav-menu")).not.toHaveClass("show-menu");
    });
    it("closes when settings link is clicked", () => {
        const settingsLink = screen.getByRole("link", { name: /settings/i });
        
        fireEvent.click(settingsLink);
        expect(screen.getByTestId("nav-menu")).not.toHaveClass("show-menu");
    });

    it("closes when menu background is clicked", () => {
        const homeLink = screen.getByRole("link", { name: /^home$/i });

        fireEvent.click(menu);
        expect(screen.getByTestId("nav-menu")).not.toHaveClass("show-menu");
    })
})


/* Integration Tests */

describe("Navigation", () => {
    const otherRoute = "/other";
    const homeRoute = "/";
    const settingsRoute = "/settings";
    const worksheetRoute = "/worksheet";

    describe("web view", () => {
        beforeEach(() => {
            useMediaQuery.mockReturnValue(false);
            
            render(
                <MemoryRouter initialEntries={[otherRoute]}>
                    <ResponsiveNavbar />
                    <Routes>
                        <Route path={homeRoute} element={<div data-testid="home-page">Home Page</div>} />
                        <Route path={worksheetRoute} element={<div data-testid="worksheet-page">Worksheet Page</div>} />
                        <Route path={settingsRoute} element={<div data-testid="settings-page">Settings Page</div>} />
                    </Routes>
                </MemoryRouter>
            );
        });

        it("navigates to home when the home link is clicked", () => {
            const homeLink = screen.getByRole("link", { name: /^home$/i });
            fireEvent.click(homeLink);

            expect(screen.getByText("Home Page")).toBeInTheDocument();
        });

        it("navigates to worksheet when the worksheet link is clicked", () => {
            const worksheetLink = screen.getByRole("link", { name: /worksheet/i });
            fireEvent.click(worksheetLink);

            expect(screen.getByText("Worksheet Page")).toBeInTheDocument();
        });

        it("navigates to settings when the settings link is clicked", () => {
            const settingsLink = screen.getByRole('link', { name: /settings/i });
            fireEvent.click(settingsLink);

            expect(screen.getByText("Settings Page")).toBeInTheDocument();
        });
    });

    describe("mobile view", () => {
        beforeEach(() => {
            useMediaQuery.mockReturnValue(true);

            render(
                <MemoryRouter initialEntries={[otherRoute]}>
                    <ResponsiveNavbar />
                    <Routes>
                        <Route path={homeRoute} element={<div data-testid="home-page">Home Page</div>} />
                        <Route path={worksheetRoute} element={<div data-testid="worksheet-page">Worksheet Page</div>} />
                        <Route path={settingsRoute} element={<div data-testid="settings-page">Settings Page</div>} />
                    </Routes>
                </MemoryRouter>
            );

            fireEvent.click(screen.getByText(/menu/i));
            expect(screen.getByTestId("nav-menu")).toHaveClass("show-menu");
        });

        it("navigates to home when the home link is clicked", () => {
            const homeLink = screen.getByRole("link", { name: /^home$/i });
            fireEvent.click(homeLink);

            expect(screen.getByText("Home Page")).toBeInTheDocument();
        });

        it("navigates to worksheet when the worksheet link is clicked", () => {
            const worksheetLink = screen.getByRole('link', { name: /worksheet/i });
            fireEvent.click(worksheetLink);

            expect(screen.getByText("Worksheet Page")).toBeInTheDocument();
        });

        it("navigates to settings when the settings link is clicked", () => {
            const settingsLink = screen.getByRole('link', { name: /settings/i });
            fireEvent.click(settingsLink);

            expect(screen.getByText("Settings Page")).toBeInTheDocument();
        });
    });
})
