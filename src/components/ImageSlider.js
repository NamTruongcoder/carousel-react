import { DataSlider } from "./DataSlider";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from "react";
const ImageSlider = () => {
  const length = DataSlider.length;
  const listRef = useRef(null);
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
      });
    }
    console.log(listRef.current);
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
    }
  };
  if (!Array.isArray(DataSlider) || length <= 0) return null;

  return (
    <>
      <div className="slider-container">
        <FaArrowAltCircleLeft className="arrow-left" onClick={scrollLeft} />
        <FaArrowAltCircleRight className="arrow-right" onClick={scrollRight} />
        <div className="items-container" ref={listRef}>
          {DataSlider.map((slider, index) => {
            return (
              <div key={index} className="single-item-container">
                <img
                  src={slider.imageURL}
                  alt="slider food"
                  className="image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
