import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fightnight1 from "../../assets/ufc_fn_16-4.png";
import fightnight2 from "../../assets/ufc_fn_23-4.png";
import fightnight3 from "../../assets/ufc_fn_30-4.png";
import "./index.scss";

const fightnightLink1 =
  "https://www.ufc.com/event/ufc-fight-night-april-15-2023";
const fightnightLink2 =
  "https://www.ufc.com/event/ufc-fight-night-april-22-2023";
const fightnightLink3 =
  "https://www.ufc.com/event/ufc-fight-night-april-29-2023";

export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 200,
      imageHeight: 200,
    };
  }

  handleImageSizeChange = (e) => {
    const { name, value } = e.target;
    if (name === "width") {
      this.setState({ imageWidth: value });
    } else if (name === "height") {
      this.setState({ imageHeight: value });
    }
  };

  render() {
    const { imageWidth, imageHeight } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
    };

    return (
      <div className="other">
        <br />
        <div className="slider">
          <div className="section">
            <a href={fightnightLink1} className="medialink">
              <img className="mediaimage" src={fightnight1} />
            </a>

            <a href={fightnightLink2} className="medialink">
              <img className="mediaimage" src={fightnight2} />
            </a>

            <a href={fightnightLink3} className="medialink">
              <img className="mediaimage" src={fightnight3} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
