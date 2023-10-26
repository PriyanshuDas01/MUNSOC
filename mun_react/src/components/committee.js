import React, { useState, useEffect } from 'react'
import './committee.css'
import globe from './globe2.png';
import olive from './olive2.png'



export default function Com() {
    const [scrollValue, setScrollValue] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
//     const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   const [prevImageBottom, setPrevImageBottom] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
            const currentScrollValue = window.scrollY;
            setScrollValue(currentScrollValue);
            const scrollThreshold = 1490; // Adjust this value

            setIsSticky(currentScrollValue <= scrollThreshold);
            
        };
    //     const calculateBottomMargin = () => {
    //         const container = containerRef.current;
    //         const image = imageRef.current;
      
    //         if (container && image) {
    //           const containerRect = container.getBoundingClientRect();
    //           const imageRect = image.getBoundingClientRect();
      
    //           const imageBottom = imageRect.bottom;
    //           const containerBottom = containerRect.bottom;
      
    //           if (prevImageBottom === null) {
    //             // First iteration, set initial position
    //             setPrevImageBottom(imageBottom);
    //           }
      
    //           const marginBottom = containerBottom - imageBottom;
      
    //           // Update the previous position for the next iteration
    //           setPrevImageBottom(imageBottom);

    //     console.log('Bottom Margin:', marginBottom);
    //   }

    //   // Request the next animation frame
    //   requestAnimationFrame(calculateBottomMargin);
    // };

    // // Start calculating the bottom margin continuously
    // calculateBottomMargin();

    
        


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            
        };
    }, []);
    console.log(scrollValue);
    const grayscale = 50 - scrollValue / 100; // Adjust as needed
    const scale = scrollValue / 1300; // Adjust as needed
    const brightness = scrollValue / 10 - 50; // Adjust as needed
    // const margin = scrollValue / 12 - 80;

    const imageStyles = {
        filter: isSticky ? `grayscale(${grayscale}%) brightness(${brightness}%)` : `grayscale(${0}%) brightness(${100}%)`,
        // top: isSticky ? `${margin}vw` : `45vw`,
        top:isSticky?`19vw`:`132vw`,
        position: isSticky?`fixed`:``,
        // margin-bottom: isSticky?`19vw`:`100vw`,
        scale: isSticky ? `${scale}` : 1.1
    };


    return (
        <>
            <div className='com' >
                <img src={globe}  alt="Description of the image" className='globe' style={imageStyles} id='text' />
                <img src={olive} className={`olive  ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-800'}`} />
                <div className={`hd ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-100'}`}>COMMITTEES
                </div>
                </div>
                {/* <div className='divide'></div> */}
        </>)
}
