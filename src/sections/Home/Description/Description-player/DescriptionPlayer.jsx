import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./DescriptionPlayer.module.css";
import Button from "../../../../components/Button/Button";
import { useSelector } from "react-redux";
import { playersData } from "../../../../utils/dummyData";

const DescriptionPlayer = () => {
  const players = useSelector((state) => state.players.players);

  function slidesToShowCounter() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  }

  function centerModeCounter() {
    if (window.innerWidth < 768) {
      return true;
    } else if (window.innerWidth < 1024) {
      return false;
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      return true;
    } else {
      return false;
    }
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowCounter(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: centerModeCounter(),
    centerPadding: "0px",
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    touchThreshold: 10,
  };

  const nameDividder = (name) => {
    return name.split(" ");
  };

  return (
    <>
      <div className={classes.descriptionPlayer}>
        <div className={classes.heading}>
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className={`fadeDown10`}
          >
            Players
          </h1>
        </div>
        <div className={classes.sliderDiv}>
          <Slider {...settings}>
            {((players.length && players) || playersData).map((player) => (
              <div className={classes.player} key={player.id}>
                <img src={player.profile_image} alt="player" />
                <div className={classes.name}>
                  <h1>{nameDividder(player.name)[0]}</h1>
                  <h1>{nameDividder(player.name)[1]}</h1>
                  <p>{player.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={classes.btnDiv}>
        <Button navigateTo={"/players"}/>
      </div>
    </>
  );
};

export default DescriptionPlayer;
