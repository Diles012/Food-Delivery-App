import React, { Profiler, useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.png';
import basketIcon from '../../assets/basket_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = React.useState("menu");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }

  return (
    <div className='navbar'>
        <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            <a href="#footer" onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
        </ul>

        <div className="navbar-right">
            <img src={searchIcon} alt="Search" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={basketIcon} alt="Cart" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)} className='navbar-button'>Sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>}
            
        </div>
    </div>
  );
}

export default Navbar;
