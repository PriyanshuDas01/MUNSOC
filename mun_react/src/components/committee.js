import React, { useState,useEffect} from 'react'
import './committee.css'
import globe from './globe.png'; // Replace with the actual path to your image
import olive from './olive.png'



export default function Com() {
    const [scrollValue, setScrollValue] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
      const currentScrollValue = window.scrollY;
      setScrollValue(currentScrollValue);

      // Set a scroll threshold where you want to stop changing values
      const scrollThreshold = 1490; // Adjust this value

      setIsSticky(currentScrollValue <= scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollValue);
  const grayscale = 50 -scrollValue / 100; // Adjust as needed
  const scale = scrollValue / 1300; // Adjust as needed
  const brightness = scrollValue/10-50; // Adjust as needed
  const margin = scrollValue/12-80;

  const imageStyles = {
    filter: isSticky?`grayscale(${grayscale}%) brightness(${brightness}%)`:`grayscale(${0}%) brightness(${100}%)`,
    top:isSticky?`${margin}vw`:`45vw`,
    scale:isSticky?`${scale}`:1.1
  };

    
        return (
            <>
            <div className='com'><img src={globe} alt="Description of the image" className='globe' style={imageStyles}/>
            <img src={olive} className='olive'/></div>
            </>)}


{/* <div className='com'><img src={myImage} alt="Description of the image" className='globe'/></div> */}