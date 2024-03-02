import "./Footer.css";
function Footer() {

    const logoUrl = '/images/logo.png';

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 logo">
                        <img src={logoUrl} alt="Logo" />
                    </div>
                    <div className="col-md-9 footer_menu">
                        <a href="/#about_us">О нас</a>
                        <a href="/#services_info">УСЛУГИ</a>
                        <a href="/#portfolio_info">ПОРТФОЛИО</a>
                        <a href="/#">БЛОГ</a>
                        <a href="/#">БРИФ</a>
                        <a href="/#contacts">КОНТАКТЫ</a>
                        <a href="tel:+994505725294" className="header_tel">+994 50 572 52 94</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;