import React, { useState, useEffect, cloneElement } from "react";

const Carousel = props => {
  console.log(props);
  const [active, setActive] = useState(0);
  let scrollInterval = null;
  const style = {
    carousel: {
      position: "relative",
      width: "100%",
      height: "148px"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 3500);
    return () => clearTimeout(scrollInterval);
  });
  const { carouselItems, ...rest } = props;
  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
};

export default Carousel;
