import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './image.css';

const VideoCarousel = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: videos.length,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentVideoIndex(next),
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <div
              className={`video-thumbnail ${
                index === currentVideoIndex ? 'active' : ''
              }`}
            >
              {/* <img
                // src={`thumbnail-url-for-video-${index + 1}`} // Replace with the actual thumbnail URL or generate it from the video
                // alt={`Video ${index + 1}`}
              /> */}
            </div>
            <ReactPlayer
              url={video}
              playing={index === currentVideoIndex}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </Slider>
      <div id="imgcrousal">
        <button onClick={handlePrevious} className="btn">
          &larr;
        </button>
        <button onClick={handleNext} className="btn">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
