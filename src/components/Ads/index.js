import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ad1 from "../../assets/ufc_fight_1.png";
import Ad2 from "../../assets/ufc_fight_2.png";

const data = [{ Ad1 }, { Ad2 }];

export default class Ads extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={Ad1} />
        </div>
        <div>
          <img src={Ad1} />
        </div>
        <div>
          <img src={Ad1} />
        </div>
        <div>
          <img src={Ad1} />
        </div>
        <div>
          <img src={Ad1} />
        </div>
        <div>
          <img src={Ad1} />
        </div>
      </Slider>
    );
  }
}