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
            let scrollThreshold = 0;
            let viewportHeight = window.innerHeight;
            let scrollThresholdPercentage = 200; // Adjust this value (e.g., 20%)

            if (window.innerWidth <= 768) {
                // For screens smaller or equal to 768px (typical mobile phones)
                scrollThreshold = 100; // Adjust this value for mobile phones
            } else {
                // For larger screens (e.g., tablets, desktop)
                scrollThreshold = 1500;
                // (viewportHeight * scrollThresholdPercentage) / 100

            }

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
    let grayscale = 50 - scrollValue / 100;
    let scale = scrollValue / 1500;
    let brightness = scrollValue / 10 - 50;
    if (window.innerWidth <= 768) {
        // For screens smaller or equal to 768px (typical mobile phones)
        grayscale = 50 - scrollValue / 100;
        scale = scrollValue / 80;
        brightness = scrollValue / 10 - 50;

    } else {
        // For larger screens (e.g., tablets, desktop)
        grayscale = 50 - scrollValue / 100;
        scale = scrollValue / 1500;
        brightness = scrollValue / 10 - 50;


    }
    // const grayscale = 50 - scrollValue / 100;
    // const scale = scrollValue / 1300; 
    // const brightness = scrollValue / 10 - 50; 
    // const margin = scrollValue / 12 - 80;

    const imageStyles = {
        filter: isSticky ? `grayscale(${grayscale}%) brightness(${brightness}%)` : `grayscale(${0}%) brightness(${100}%)`,
        // top: isSticky ? `${margin}vw` : `45vw`,
        top: isSticky ? `19vw` : `157vw`,
        position: isSticky ? `fixed` : ``,
        // margin-bottom: isSticky?`19vw`:`100vw`,
        scale: isSticky ? `${scale}` : 1.1
    };


    return (
        <>
            <div className='com' >
                <img src={globe} alt="Description of the image" className='globe' style={imageStyles} id='text' />
                {/* <img src={olive} className={`olive  ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-800'}`} /> */}
                <div className={`hd ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-100'}`}>COMMITTEES
                </div>
            </div>
            {/* <div className='divide'></div> */}
        </>)
}
