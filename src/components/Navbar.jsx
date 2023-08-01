import  { useState } from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <header>
                <nav className="Navbar">
                    <div className="logo">
                        <img src={Logo} alt="logo"  className='Logo'/>
                    </div>
                    <ul className={`navlinks ${menuOpen ? 'nav-active' : ''}`}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Reservation</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <div className="menu-icon"  onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="40px" height="40px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
                        </svg>
                    </div>
                    {menuOpen && (
                        <button className="close-menu-btn" onClick={closeMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </button>
                        )}
                </nav>
            </header>
        </div>
        );
};

export default Navbar;
