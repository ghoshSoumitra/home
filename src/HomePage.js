import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, Skeleton } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import AstrologerCards from './components/AstrologerCards';
import Chackra from './components/Chackra'
import Footer from './components/Footer'
//importing the styles
import './homepage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//importing the images
import tw from './assets/tw.png';
import satisfaction from './assets/satisfaction.png';
import confidential from './assets/confidential.jpg';
import verified from './assets/verified.png';
import secure from './assets/secure.avif';
import sun from './assets/sun.png';
import star from './assets/star.png';
import banner from './assets/banner.png';
import fillstar from './assets/starfill.png'
import smallimage1 from './assets/small-image1.jpeg'
import smallimage2 from './assets/small-image2.jpeg'
import smallimage3 from './assets/small-image3.jpeg'
import smallimage4 from './assets/small-image4.jpeg'
import smallimage5 from './assets/small-image5.jpeg'
import smallimage6 from './assets/small-image6.jpeg'
import smallimage7 from './assets/small-image7.jpeg'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

 

  const services = [
    { name: '24 X 7 Customer Support', image: tw },
    { name: '100% Refund if Unsatisfied', image: satisfaction },
    { name: 'Private & Confidential', image: confidential },
    { name: 'Verified Astrologer', image: verified },
    { name: 'Secure Payment', image: secure },
  ];
  const videoUrls = [
   'https://www.youtube.com/watch?v=USfAGDUutOQ',
    'https://www.youtube.com/watch?v=9D4kHs5mQzU',
    'https://www.youtube.com/watch?v=CpqQFCIQURY',
    'https://www.youtube.com/watch?v=qtYGCrOOuOg',
    'https://www.youtube.com/watch?v=uRExi4h2jVQ'
  ];
  
  
  return (
    <div>
    <div id='main'>
    <Box p={4} maxW="600px" mx="auto">
      <Navbar />
    
      <p id="welcome">
      "Astrology For Clarity"
      </p>
      <br />
     <p id='subpara'>   Your Name is a Vedic Astrologer and has expertise in Vaastu<br/></p><p id='sub'> and Mantra
        Therapy</p>
     
    
      <br />
      <button id='btn'>Consult Now</button>

      <VStack spacing={25} className="vstack"> 
        {services.map((service, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            textAlign="center" 
            className="box"
          >
            <img src={service.image} alt={service.name} />
            <Text>{service.name}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
   
    </div>
    <div id='main2'>
    <div id='sun'>
    <img src= {sun} alt='sun' />
    <div className='star'>
        <img src={star} alt='star' />
    <p>User Testimonial</p>
    <img src={star} alt='star' />
    </div>
    </div>
    <div id='images'>
        <VideoCarousel videos={videoUrls} />
      </div>
      <div >
        <img src={banner} alt='banner' id='banner' />
      </div>
      <div className='star star2'>
        <img src={star} alt='star' />
    <p>Premium Astrologers</p>
    <img src={star} alt='star' />
    </div>
    <div>
    <AstrologerCards /> 
    </div>
   
    <Chackra/>
    <div>
    <div className='star star2'>
        <img src={star} alt='star' />
    <p>User Review</p>
    <img src={star} alt='star' />
    </div>
    <div id='color'>
    <div id='fill'>
        <img src={fillstar} alt='fill'/>
        <img src={fillstar} alt='fill'/>
        <img src={fillstar} alt='fill'/>
        <img src={fillstar} alt='fill'/>
        <img src={star} alt='star' />

    </div>
    <div id='para'>
    <p id='para1'>
    Explore the Mysteries of the Universe with Our Expert Astrology Services Explore  
    </p>
    <p id='para2'>
    the Mysteries of the Universe with Our Expert Astrology ServicesExplore the
    </p>
    <p id='para3'>
     Mysteries of the Universe with 
    </p>
    </div>
    <div id='smallimg'>
        <img src={smallimage1} alt='' className='small'/>
        <img src={smallimage2} alt='' className='small' />
        <img src={smallimage3}alt='' className='small' />
        <div id='bigimg'>
        <img src={smallimage4}alt='' className='big'/><p id='name'>Catherine Dsuza</p>
        </div>
        
        <img src={smallimage5} alt='' className='small'/>
        <img src={smallimage6} alt='' className='small'/>
        <img src={smallimage7} alt=''className='small' />
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  
    </div>
  );
};

export default HomePage;
