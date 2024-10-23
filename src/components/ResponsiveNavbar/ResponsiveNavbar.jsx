import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavbarState } from "../../hooks/useNavbarState";
import NavLinks from "../NavLinks/NavLinks";
import "./ResponsiveNavbar.css";

export default function ResponsiveNavbar() {
    const { isMenuOpen, isMobile, toggleMenu, closeMobileMenu } = useNavbarState();

    return (
        <header className="header">
            <nav aria-label="The Maths Club" className={`container nav ${isMobile ? "nav-mobile" : "nav-web"}`}>
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        MENU
                    </div>
                )}

                {isMobile ? (
                    <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu" onClick={closeMobileMenu}>
                        {<NavLinks isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>}
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            CLOSE
                        </div>
                    </div>
                ) : (
                    <NavLinks isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                )}
                <a href="/" className="nav__logo" aria-label="Go to the THEMATHSCLUB.COM homepage">
                    <span>THE</span>
                    <span>MATHS</span>
                    <span>CLUB</span>
                </a>
            </nav>
        </header>
    )
}