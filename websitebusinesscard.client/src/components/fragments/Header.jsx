import React from "react";
import "./Header.css";
function Header() {

    const logoUrl = '/images/logo.png';

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 logo">
                    <img src={logoUrl} alt="Logo" />
                    </div>
                    <div className="col-md-8 top_menu">
                        <a href="#" className="topnav_link">УСЛУГИ</a>
                        <a href="#" className="topnav_link">ОТЗЫВЫ</a>
                        <a href="#" className="topnav_link">ПОРТФОЛИО</a>
                        <a href="#" className="topnav_link">КОНТАКТЫ</a>
                        <a href="tel:+994505725294" className="header__tel">+994 50 572 52 94</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;