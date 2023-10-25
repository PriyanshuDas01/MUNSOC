import React, { useRef, useState, useEffect } from 'react'
import './committee.css'
import globe from './globe2.png'; // Replace with the actual path to your image
import olive from './olive2.png'



export default function Com() {
    const [scrollValue, setScrollValue] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
            const currentScrollValue = window.scrollY;
            setScrollValue(currentScrollValue);

            // Set a scroll threshold where you want to stop changing values
            const scrollThreshold = 1490; // Adjust this value

            setIsSticky(currentScrollValue <= scrollThreshold);
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is in the viewport
                    // Trigger your scroll handler
                }
            });
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    console.log(scrollValue);
    const grayscale = 50 - scrollValue / 100; // Adjust as needed
    const scale = scrollValue / 1300; // Adjust as needed
    const brightness = scrollValue / 10 - 50; // Adjust as needed
    const margin = scrollValue / 12 - 80;

    const imageStyles = {
        filter: isSticky ? `grayscale(${grayscale}%) brightness(${brightness}%)` : `grayscale(${0}%) brightness(${100}%)`,
        top: isSticky ? `${margin}vw` : `45vw`,
        scale: isSticky ? `${scale}` : 1.1
    };


    return (
        <>
            <div className='com'>
                <img src={globe} alt="Description of the image" className='globe' style={imageStyles} />
                <img src={olive} className={`olive  ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-800'}`} />
                <div className={`hd ${isSticky ? 'invisible' : 'visible transition duration-1000 delay-100'}`}>COMMITTEES
                </div></div>
        </>)
}
