import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeSlider = () => {
  const [data, setData] = useState([]);
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/sliders`;
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        // Check if responseData has a 'data' property which is an array
        if (responseData && Array.isArray(responseData.data)) {
          setData(responseData.data);
        } else {
          // Handle the case when the API response is not as expected
          setData([]);
        }
      } catch (error) {
        // Handle any errors from the API call
        setData([]);
      }
    };

    fetchData();
  }, []); 
  if (data.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img className="slider_image" src={item.slider_image} alt={`Slider Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
