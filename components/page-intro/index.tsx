import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/image5.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Welcome to PowerliftinghubBD</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Explore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/image5.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Bangladesh's first powerlifting Assistant</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Explore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <div className="data-item__content">
                <img src='images/image3'></img>
                <h4>IPF Approved Gadgets</h4>
                <p>Singlets , Belts and Many more</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro