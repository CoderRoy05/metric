import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Customers() {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  return (
    <div>
      <div id="customers" className="section">
        <div className="w-container">
          <h2>What People Say About Us</h2>
          <Slider {...sliderSettings}>
            <div className="testimony-slide w-slide">
            <p className="testimony-text">
                            “I've been using their web application for my business, and I'm amazed at how it has transformed the way I manage my metrics. The real-time insights and interactive dashboards have made decision-making so much easier, 
                            and the mobile app keeps me connected even when I'm on the move. ”
                        </p><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed78514d7460_04f14af5199093cdd29a89eb295febf5.jpeg"
                            width="64" alt="" className="person" />
                        <div className="name">Kyle Killit</div>
                        <div className="title">CEO of San Francs Enterprises.</div>
            </div>
            <div className="testimony-slide w-slide">
            <p className="testimony-text">
                            “ince implementing their dashboard and custom rules feature, our business has experienced a significant boost in productivity and growth. The preset settings made the onboarding process seamless, and the comprehensive metrics 
                            suite has provided us with invaluable data to make strategic decisions.”
                        </p><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed86384d7487_sergie-square.jpg"
                            width="100" alt="" className="person" />
                        <div className="name">Sergie Kalashnikov</div>
                        <div className="title">CEO at BentoBox</div>
            </div>
            <div className="testimony-slide w-slide">
            <p className="testimony-text">
                            “Using their web application has been a game-changer for our business. The dashboard and metrics they provide have given us a clear view of our performance, helping 
                            us identify areas for improvement and capitalize on opportunities.”
                        </p><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edf4be4d7485_bryant-square.jpg"
                            width="100" alt="" className="person" />
                        <div className="name">Bryant Chou</div>
                        <div className="title">President at Slapper Labs</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Customers;
