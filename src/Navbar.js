import React, {useState} from 'react';
import './Navbar.css'; 

const Navbar = ({searchTerm, setSearchTerm}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <nav className="navbar">
        <a className='navbar-logo'>Movie Search</a>
        <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleSearch}
        />
        </nav>
    );
}

export default Navbar;

