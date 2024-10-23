import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavLinks from "../NavLinks/NavLinks";
import "./ResponsiveNavbar.css";

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMobileMenu = () => {
        if (isMobile) {
          setIsMenuOpen(false);
        }
      };

    return (
        <header className="header">
            <nav aria-label="The Maths Club" className={`container nav ${isMobile ? "nav-mobile" : "nav-web"}`}>
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        MENU
                    </div>
                )}

                {isMobile ? (
                    <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu" onClick={toggleMenu}>
                        {<NavLinks isMobile={isMobile}/>}
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            CLOSE
                        </div>
                    </div>
                ) : (
                    <NavLinks isMobile={isMobile} />
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