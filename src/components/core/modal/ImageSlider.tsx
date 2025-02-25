import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import slider from "../../../data/Slider.json";
import Item from "./Item";

type imageItem = {
  url: string;
  alt: string;
};

const ImageSlider = () => {
  const [img, setImg] = useState<imageItem[]>([]);

  useEffect(() => {
    return setImg(slider);
  }, []);
  return (
    <Carousel>
      {img.map((item, index: number) => (
        <>
          <Item key={index} item={item} index={0} />
        </>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
