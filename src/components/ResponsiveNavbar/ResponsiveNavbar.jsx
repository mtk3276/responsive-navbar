import NavLinks from "../NavLinks/NavLinks";
import "./ResponsiveNavbar.css";

export default function ResponsiveNavbar() {
    return (
        <header className="header">
            <nav aria-label="The Maths Club" className="container nav">
                <NavLinks />
                <a href="/" className="nav__logo" aria-label="Go to the THEMATHSCLUB.COM homepage">
                    <span>THE</span>
                    <span>MATHS</span>
                    <span>CLUB</span>
                </a>
            </nav>
        </header>
    )
}