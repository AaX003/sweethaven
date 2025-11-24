import "../css/Nav.css";
import { useState } from "react";

// icons
import { MdMenu } from "react-icons/md";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="container">
            <nav className="main-nav">
                <div className="nav-links">
                    <a href="#featured">Featured</a>
                    <a href="#menu">Menu</a>
                    <a href="#spotlight">Meet the Bakers</a>
                    <a href="#about">Our Story</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
                <div className="hamburger-menu-wrapper">
                    <button 
                        id="menu-btn"
                        className="hamburger-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <MdMenu />
                    </button>
                </div>
            </nav>
            <div 
                id="supple-links" 
                className={`supple-links ${menuOpen ? "is-open" : ""}`}
                aria-hidden={!menuOpen}
                >
                    <a href="#featured">Featured</a>
                    <a href="#menu">Menu</a>
                    <a href="#spotlight">Meet the Bakers</a>
                    <a href="#about">Our Story</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#newsletter">Newsletter</a>
            </div>
        </div>
    );
}

export default Nav