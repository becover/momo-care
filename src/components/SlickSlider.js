import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main_cont3_img from "../asset/img/main_img_5.jpg";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="main_service_rolling">
      <div className="slides clfx bxslider">
        <div className="img_area">
          <Link to="#">
            <img src={main_cont3_img} alt="" />
          </Link>
        </div>
        <div className="txt_area">
          <Link to="#">
            <span className="title">여름맞이 준비 필수는 에어컨청소1</span>
            에어컨은 원래 그 형태자체가 곰팡이가 생기기 쉬운 기기래요.
            <br />
            차가운 바람을 만들어내며 습기가 기기 안으로 차기 때문인데요,
            <br />
            이렇게 청소를 해주고 난 다음에, 에어컨을 사용하고 난 뒤에 끄기
            전에...
          </Link>
        </div>
      </div>
      <div className="slides clfx bxslider">
        <div className="img_area">
          <Link to="#">
            <img src={main_cont3_img} alt="" />
          </Link>
        </div>
        <div className="txt_area">
          <Link to="#">
            <span className="title">여름맞이 준비 필수는 에어컨청소2</span>
            에어컨은 원래 그 형태자체가 곰팡이가 생기기 쉬운 기기래요.
            <br />
            차가운 바람을 만들어내며 습기가 기기 안으로 차기 때문인데요,
            <br />
            이렇게 청소를 해주고 난 다음에, 에어컨을 사용하고 난 뒤에 끄기
            전에...
          </Link>
        </div>
      </div>
      <div className="slides clfx bxslider">
        <div className="img_area">
          <Link to="#">
            <img src={main_cont3_img} alt="" />
          </Link>
        </div>
        <div className="txt_area">
          <Link to="#">
            <span className="title">여름맞이 준비 필수는 에어컨청소3</span>
            에어컨은 원래 그 형태자체가 곰팡이가 생기기 쉬운 기기래요.
            <br />
            차가운 바람을 만들어내며 습기가 기기 안으로 차기 때문인데요,
            <br />
            이렇게 청소를 해주고 난 다음에, 에어컨을 사용하고 난 뒤에 끄기
            전에...
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default SlickSlider;
