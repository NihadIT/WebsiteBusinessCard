import './MainPage.css';

function MainPage() {

    const contents =
        <div className="contents">
            <div className="top_content">
                <div className="circle">
                    <button>СМОТРЕТЬ<br />ПОРТФОЛИО</button>
                </div>
            </div>
            <div className="main_content">
                <div className="wrapper">
                    <div className="about_us section" id="about_us">
                    <p className="blog_title">НАПОЛНИМ ВАШЕ ПРОСТРАНСТВО <br /><span>ИНДИВИДУАЛЬНЫМ СМЫСЛОМ</span></p>
                    <div className="blog_context">
                        <div className="blog_info">
                            <p> Каждый наш проект - это уникальное решение и практичность. Все решения
                                отображают философию хозяев квартир, домов и других зданий</p>
                            <p>Наш многолетний опыт позволяет соединять все пожелания клиента и свое видение.
                                И по итогу результат удовлетворяет даже самого требовательного заказчика.</p>
                        </div>
                        <img src='/images/room.jpg' alt="#" />
                        </div>
                    </div>
                    <div className="services_info section" id="services_info">
                        <p className="blog_title">УСЛУГИ</p>
                        <ul className="list_services">
                            <li>
                                <img src="/images/icons/circle.png" alt="circle" />
                                <span>ДИЗАЙН ИНТЕРЬЕРА</span>
                                <div className="list_circle">
                                    <button>ЗАКАЗАТЬ<br />УСЛУГУ</button>
                                </div>
                            </li>
                            <li>
                                <img src="/images/icons/circle.png" alt="circle" />
                                <span>АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ</span>
                                <div className="list_circle">
                                    <button>ЗАКАЗАТЬ<br />УСЛУГУ</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio_info section" id="portfolio_info">
                        <p className="blog_title">ПОРТФОЛИО</p>
                        <div className="portfolio_desk">
                            <div>
                                <img src="/images/kitchen.jpg" alt="kitchen" />
                                <span>Интерьер Кухни</span>
                                <a href="/portfolio">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/apartament.jpg" alt="apartament" />
                                <span>Квартира в Баку</span>
                                <a href="/portfolio">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/livingroom.png" alt="livingroom" />
                                <span>Гостиная</span>
                                <a href="/portfolio">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/office.jpg" alt="office" />
                                <span>Интерьер Офисов</span>
                                <a href="/portfolio">Подробнее +</a>
                            </div>
                        </div>
                        <div className="circle_portfolio">
                            <button>ВСЕ<br />ПОРТФОЛИО</button>
                        </div>
                    </div>
                    <div className="contacts section" id="contacts">
                        <div className="left_block">
                            <span>СВЯЖИТЕСЬ С НАМИ</span>
                            <div className="phone">
                                +994 50 572 52 94
                                <div className="social">
                                    <a href="#"><img src="images/icons/telegram.png" alt="telegram" /></a>
                                    <a href="#"><img src="images/icons/whatsapp.png" alt="whatsapp" /></a>
                                </div>
                            </div>
                            <span>nihatus353@gmail.com</span>
                        </div>
                        <div className="right_block">
                            <p>ОСТАВЬТЕ ЗАЯВКУ<br /><span>НА БЕСПЛАТНУЮ</span><span>КОНСУЛЬТАЦИЮ</span></p>
                            <input type="text" placeholder="Ваше имя" />
                            <input type="text" placeholder="Ваш телефон" />
                            <input type="text" placeholder="Ваша почта" />
                            <input type="checkbox" />
                            <span>Соглашаюсь с политикой обработки персональных данных</span>
                            <input type="submit" content="ОТПРАВИТЬ" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    return (
        <div>
            {contents}
        </div>
    );
}

export default MainPage;