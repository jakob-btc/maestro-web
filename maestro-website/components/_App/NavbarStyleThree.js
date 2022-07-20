// Navbar Component Style File Path: styles/navbar/navbar.css

import React, { useState } from "react"
import Link from '@/utils/ActiveLink'

const NavbarStyleThree = () => {
    const [menu, setMenu] = React.useState(true)
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
        window.scrollTo(0, 0); 
    }) 

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two fixed-top">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img
                                        src="/images/logo.png"
                                        alt="Site Logo"
                                    />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Home <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 1</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 2</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 3</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Pages <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={toggleNavbar}>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pricing" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Pricing</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Team</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Gallery</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/appointment" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Appointment</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Testimonials</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar}>FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                        Career <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/career" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Career</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/career-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Career Details</a>
                                                        </Link>
                                                    </li> 
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                        User Pages <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/sign-in" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                                        </Link>
                                                    </li> 
                                                    <li className="nav-item">
                                                        <Link href="/sign-up" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                        </Link>
                                                    </li> 
                                                    <li className="nav-item">
                                                        <Link href="/forgot-password" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Forgot Password</a>
                                                        </Link>
                                                    </li> 
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Terms of Service</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Privacy Policy</a>
                                                </Link>
                                            </li> 
                                            <li>
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar}>Coming Soon</a>
                                                </Link>
                                            </li>
                                        </ul>   
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Services <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/services-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Case Studies <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/case-studies" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies</a>
                                                </Link>
                                            </li> 
                                            <li className="nav-item">
                                                <Link href="/case-studies-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Blog <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="ri-search-line"></i>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <a href="tel:15143125678" className="default-btn rounded-pill">
                                        +1 (514) 312-5678
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input 
                                    type="text" 
                                    className="input-search" 
                                    placeholder="Search here..." 
                                />
                                <button type="submit">
                                    <i className="ri-search-2-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default NavbarStyleThree;