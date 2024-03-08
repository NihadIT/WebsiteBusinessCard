import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./Header.css";
function Header() {
    const logoUrl = '/images/logo.png';
    const [activeSection, setActiveSection] = useState(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, 
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 logo">
                        <a href="/"><img src={logoUrl} alt="Logo" /></a>
                    </div>
                    <div className="col-md-8 top_menu">
                        <Link to="/#about_us" className={`topnav_link ${activeSection === 'about_us' ? 'active' : ''}`}>О НАС</Link>
                        <Link to="/#services_info" className={`topnav_link ${activeSection === 'services_info' ? 'active' : ''}`}>УСЛУГИ</Link>
                        <Link to="/#portfolio_info" className={`topnav_link ${activeSection === 'portfolio_info' ? 'active' : ''}`}>ПОРТФОЛИО</Link>
                        <Link to="/#contacts" className={`topnav_link ${activeSection === 'contacts' ? 'active' : ''}`}>КОНТАКТЫ</Link>
                        <a href="tel:+994505725294" className="header__tel">+994 50 572 52 94</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;