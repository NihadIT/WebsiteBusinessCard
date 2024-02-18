import './App.css';

function App() {

    const contents =
        <div className="contents">
            <div className="top_content">
                <div className="circle">
                    <button>СМОТРЕТЬ<br/>ПОРТФОЛИО</button>
                </div>
            </div>
            <div className="main_content">
                <div className="wrapper">
                <p className="blog_title">НАПОЛНИМ ВАШЕ ПРОСТРАНСТВО <br/><span>ИНДИВИДУАЛЬНЫМ СМЫСЛОМ</span></p>
                    <div className="blog_context">
                        <div className="blog_info">
                        <p> Каждый наш проект - это уникальное решение и практичность. Все решения 
                            отображают философию хозяев квартир, домов и других зданий</p>
                        <p>Наш многолетний опыт позволяет соединять все пожелания клиента и свое видение.
                                И по итогу результат удовлетворяет даже самого требовательного заказчика.</p>
                        </div>
                        <img src='/images/room.jpg' alt="#"/>
                    </div>
                    <div className="services_info">
                        <p className="blog_title">УСЛУГИ</p>
                        <ul className="list_services">
                            <li>
                                <img src="/images/icons/circle.png" alt="circle"/>
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
                    <div className="portfolio_info">
                        <p className="blog_title">ПОРТФОЛИО</p>
                        <div className="portfolio_desk">
                            <div>
                                <img src="/images/kitchen.jpg" alt="kitchen"/>
                                <span>Интерьер Кухни</span>
                                <a href="#">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/apartament.jpg" alt="apartament"/>
                                <span>Квартира в Баку</span>
                                <a href="#">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/livingroom.png" alt="livingroom" />
                                <span>Гостиная</span>
                                <a href="#">Подробнее +</a>
                            </div>
                            <div>
                                <img src="/images/office.jpg" alt="office" />
                                <span>Интерьер Офисов</span>
                                <a href="#">Подробнее +</a>
                            </div>
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

export default App;