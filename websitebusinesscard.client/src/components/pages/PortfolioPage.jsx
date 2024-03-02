import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PortfolioPage.css';
import { Fade } from "react-awesome-reveal";

function PortfolioPage() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slider = 
    <Slider {...settings}>
        <div>
            <img src="/images/kitchen.jpg" alt="Slide 1" />
        </div>
        <div>
            <img src="/images/apartament.jpg" alt="Slide 2" />
        </div>
        <div>
            <img src="/images/livingroom.png" alt="Slide 3" />
        </div>
        <div>
            <img src="/images/office.jpg" alt="Slide 4" />
        </div>
        <div>
            <img src="/images/office.jpg" alt="Slide 5" />
            </div>
    </Slider>

    return (
        <div className="portfolio-content">
            <div className="slider">
                {slider}
            </div>
            <div className="wrapper">
             <Fade>
            <div className="description">
                Мы - команда талантливых архитекторов и дизайнеров интерьера, представляем вам наши работы,
                воплощающие в себе искусство и инновационный подход к созданию пространств. Вдохновленные
                современными тенденциями и уникальными предпочтениями каждого клиента, мы стремимся к созданию уникальных,
                функциональных и вдохновляющих интерьеров. Наши работы отражают наше стремление к гармонии, стилю и комфорту,
                придавая каждому пространству индивидуальность и уют. Погрузитесь в мир наших творений и дайте своим мечтам
                о идеальном интерьере стать реальностью с нами.
                    </div>
            </Fade>
            <Fade>
            <div className="work-process">
                <h2 className="process-title">Этапы нашей работы</h2>
                <ol className="process-list">
                    <li className="process-item">
                        <div className="process-icon">1</div>
                        <div className="process-description">Индивидуальная консультация и анализ ваших потребностей</div>
                    </li>
                    <li className="process-item">
                        <div className="process-icon">2</div>
                        <div className="process-description">Создание концепции дизайна интерьера, включая планирование и визуализацию</div>
                    </li>
                    <li className="process-item">
                        <div className="process-icon">3</div>
                        <div className="process-description">Выбор материалов, мебели и декора в соответствии с вашим стилем и предпочтениями</div>
                    </li>
                    <li className="process-item">
                        <div className="process-icon">4</div>
                        <div className="process-description">Разработка детальных чертежей и технических спецификаций</div>
                    </li>
                    <li className="process-item">
                        <div className="process-icon">5</div>
                        <div className="process-description">Организация и координация строительства или ремонта</div>
                    </li>
                    <li className="process-item">
                        <div className="process-icon">6</div>
                        <div className="process-description">Финальное оформление и декорирование интерьера</div>
                    </li>
                </ol>
                    </div>
            </Fade>
            <Fade>
            <div className="advantages">
                <h2 className="advantages-title">Преимущества работы с нами</h2>
                <div className="advantages-content">
                    <div className="advantages-image">
                        <img src="/images/advantages.jpg" alt="Преимущества работы с нами" />
                    </div>
                    <div className="advantages-description">
                        <p>1. Высокий профессионализм и опыт наших специалистов.</p>
                        <p>2. Индивидуальный подход к каждому клиенту и учет всех пожеланий и требований.</p>
                        <p>3. Использование только качественных и экологически чистых материалов.</p>
                        <p>4. Соблюдение сроков и гарантия качества выполненных работ.</p>
                        <p>5. Постоянная связь с клиентом на всех этапах проекта.</p>
                    </div>
                </div>
                    </div>
             </Fade>
            <div className="contacts" id="contacts">
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
    );
}

export default PortfolioPage;