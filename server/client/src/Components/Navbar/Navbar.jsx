import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>MGNzone</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><span className={menu === "shop" ? "active" : ""}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link></span></li>
                <li onClick={() => { setMenu("t-shirts") }}><span className={menu === "t-shirts" ? "active" : ""}><Link style={{ textDecoration: 'none' }} to='/t-shirts'>Tshirts</Link></span></li>
                <li onClick={() => { setMenu("joggers") }}><span className={menu === "joggers" ? "active" : ""}><Link style={{ textDecoration: 'none' }} to='/joggers'>Joggers</Link></span></li>
                <li onClick={() => { setMenu("shoes") }}><span className={menu === "shoes" ? "active" : ""}><Link style={{ textDecoration: 'none' }} to='/shoes'>Shoes</Link></span></li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                    : <Link to='/login'>
                        <button>Login</button>
                    </Link>}

                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;


