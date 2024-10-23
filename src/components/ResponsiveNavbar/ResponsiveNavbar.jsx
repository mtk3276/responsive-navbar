import { useMediaQuery } from "react-responsive";
import NavLinks from "../NavLinks/NavLinks";
import "./ResponsiveNavbar.css";

export default function ResponsiveNavbar() {
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    return (
        <header className="header">
            <nav aria-label="The Maths Club" className={`container nav ${isMobile ? "nav-mobile" : "nav-web"}`}>
                <NavLinks isMobile={isMobile}/>
                <a href="/" className="nav__logo" aria-label="Go to the THEMATHSCLUB.COM homepage">
                    <span>THE</span>
                    <span>MATHS</span>
                    <span>CLUB</span>
                </a>
            </nav>
        </header>
    )
}