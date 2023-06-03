import React from 'react';
import './AstrologerCards.css';
import astrloger1 from '../assets/astrologer1.png'
import astrloger2 from '../assets/astrologer2.png'
import astrloger3 from '../assets/astrologer3.png'
import astrloger4 from '../assets/astrologer4.png'
import astrloger5 from '../assets/astrologer5.png'
import astrloger6 from '../assets/astrologer6.png'
import astrloger7 from '../assets/astrologer7.png'
import astrloger8 from '../assets/astrologer8.png'
import astrloger9 from '../assets/astrologer9.png'
const astrologers = [
  { name: 'Astrologer 1', specialty: 'Vedic Astrology', image: astrloger1,}, 
  { name: 'Astrologer 2', specialty: 'Numerology', image: astrloger2 },
  { name: 'Astrologer 3', specialty: 'Tarot Reading', image: astrloger3},
  { name: 'Astrologer 4', specialty: 'Tarot Reading', image: astrloger4 },
  { name: 'Astrologer 5', specialty: 'Tarot Reading', image: astrloger5 },
  { name: 'Astrologer 6', specialty: 'Tarot Reading', image: astrloger6},
  { name: 'Astrologer 7', specialty: 'Tarot Reading', image: astrloger7 },
  { name: 'Astrologer 8', specialty: 'Tarot Reading', image: astrloger8 },
  { name: 'Astrologer 9', specialty: 'Tarot Reading', image: astrloger9 },
  // Add more astrologers as needed
];

const AstrologerCards = () => {
  return (
    <div className="masonry-container">
      {astrologers.map((astrologer, index) => (
        <div className="card" key={index}>
          <img src={astrologer.image} alt={astrologer.name} className="card-image" />
        
         
          <div className="card-content">
            <h3 className="card-title">{astrologer.name}</h3>
            <div className='spcl'>
                <p className='spcl2'>
                Specialties
                </p>
                <p>
                Love, Business, Life 
                </p>
                <p className='spcl2'>
               Skills
                </p>
                <p>
                Vedic Astrology, Kundali,  
                </p>
            </div>
            
            <div id='div'>

</div>
            <img src='https://img.freepik.com/premium-vector/live-streaming-icon-symbol-live-stream-icon-video-broadcasting-tv-news-movie-show-button-sign_659151-929.jpg?w=2000'alt='live' className='live'/><hr/>
         
           <div className='contact'>
            
            <div  className='call'>
            <p>
                Call
            </p>
            <img src='https://play-lh.googleusercontent.com/eQgwLiSCst5HXohkBHjtPxVa9JJhg4z8a3EPDbJU8dDN0pS_Ocvn2s4cVUkEKRXRF6k' alt='' />
            </div>
            <div  className='call'>
            <p>
                Chat
            </p>
            <img src='https://cdn-icons-png.flaticon.com/512/134/134932.png' alt='' />
            </div>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstrologerCards;
