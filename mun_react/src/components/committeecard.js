import React, { Component, useState, useEffect } from 'react'
import './comcard.css'
import disecb from './dicom.jpg';
import disecl from './disec.png';
import unhrcl from './unhrc.png';
import whol from './who.png';
import whob from './p2.jpg';
import legalb from './p3.jpg';
import unhrcb from './p4.jpg';
import legall from './legal.png';
import combg from './bg1.png';
import Modal from './Modal';

import ag1i from './diseceb.png';
import ag2i from './ebwho.png';
import ag3i from './legaleb.jpeg';
import ag4i from './hrceb.jpeg';


const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}


export default function Card() {
    const [isOpen, setIsOpen] = useState(false)
    let initialData = {
        ag1: "desc",
        ag1i: ag1i,
        ag1n: "ebname",

    }
    const [data, setData] = useState(initialData);
    
    
    // useEffect(() => {
    const c = (newProp) => {
        if (newProp == 1){
            let updatedData = {
                ag1: "Reducing Nuclear Dangers and Nuclear Disarmament in Middle East Asia in accordance to Agenda Item 98 (s) and 98 (y)" ,
                ag1i: ag1i,
                ag1n: "DAVID DAS",
        
            };
            setData(updatedData);
            setIsOpen(true);

        } 
        else if (newProp==2){
            let updatedData = {
                ag1: "Deliberating upon strategies to enhance and achieve universal health coverage with special emphasis to global response to the mental wellness emergencies",
                ag1i: ag2i,
                ag1n: "MUKUNDA NAND DWIVEDI",
        
            }
            setData(updatedData);
            setIsOpen(true);

        }
        else if (newProp==3){
            let updatedData = {
                ag1: "Discussion upon ongoing conflicts in the MENA region with special emphasis on uncontrolled usage of weapons",
                ag1i: ag3i,
                ag1n: "ARNAV SINGLA",
        
            }
            setData(updatedData);
            setIsOpen(true);

        }
        else {
            let updatedData = {
                ag1: "Deliberation on unilateral coercive measures and its impacts on the realization of human rights",
                ag1i: ag4i,
                ag1n: "ROHAN RAO",
        
            }
            setData(updatedData);
            setIsOpen(true);
            
        }
      }; 
    // });
    return (
        <>

            <div className='card'>
                <img src={combg} className="bgg" alt='combg' />
                <div className="com1 'visible transition duration-1000 delay-800'">
                    <div className="circle">
                        <img src={disecl} className="logo1" alt="disecl" />
                        <img src={disecb} className="logo2" alt="disecb" />
                        <p className="agenda">
                            <b>Disarmament and International Security Committee (DISEC)</b>
                        </p>
                        <div className="agendatext">
                            The United Nations General Assembly First Committee, also known as UNGA-DISEC, is crucial for global security. Comprising all UN member states, it addresses disarmament and international security issues.UNGA-DISEC plays a vital role in shaping policies to mitigate threats, prevent conflicts, and promote global stability.
                            <div className='buttons'>
                                <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                                    <button className="button1" onClick={() => {c(1);}
                                    }>
                                        <b className="btext">EB & Agenda</b>
                                    </button>
                                    <Modal ag1={data.ag1} ag1i={data.ag1i} ag1n={data.ag1n} open={isOpen} onClose={() => setIsOpen(false)}>

                                    </Modal>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="comImg">

                    </div>
                </div>


                <div className="com2">
                    <div className="circle2" >
                        <img src={whol} className="logo12" alt="whol" />
                        <img src={whob} className="logo22" alt="whob" />
                        <p className="agenda2">
                            <b>World Health Organization (WHO)</b>
                        </p>
                        <div className="agendatext2">The World Health Organization (WHO) is crucial for global health leadership. It sets international health standards, coordinates responses to pandemics, and provides vital health information. As a specialized agency of the UN, WHO plays a central role in safeguarding public health, preventing diseases, and promoting equitable access to healthcare worldwide.
                            <div className='buttons'>
                                <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                                    <button className="button12" onClick={() => { setIsOpen(true);  c(2);
                                    }}>
                                        <b className="btext">EB & Agenda</b>
                                    </button>
                                    <Modal ag1={data.ag1} ag1i={data.ag1i} ag1n={data.ag1n} open={isOpen} onClose={() => setIsOpen(false)}>

                                    </Modal>
                                </div>
                            </div></div>


                    </div>
                    <div className="comImg">

                    </div>
                </div>


                <div className="com1">
                    <div className="circle" >
                        <img src={legall} className="logo1" alt="legall" />
                        <img src={legalb} className="logo2" alt="legalb" />
                        <p className="agenda">
                            <b className="legal">UNGA Sixth Committee-Legal</b>
                        </p>
                        <div className="agendatext">
                            The United Nations General Assembly Legal Committee (UNGA Legal) is crucial for shaping international law. It reviews legal issues, drafts conventions, and provides a forum for nations to discuss legal matters. UNGA Legal's decisions influence global legal frameworks, fostering cooperation and ensuring the rule of law in the international community.
                            <div className='buttons'>
                                <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                                    <button className="button1" onClick={() => {setIsOpen(true);c(3)}}>
                                        <b className="btext">EB & Agenda</b>
                                    </button>
                                    <Modal ag1={data.ag1} ag1i={data.ag1i} ag1n={data.ag1n} open={isOpen} onClose={() => setIsOpen(false)}>

                                    </Modal>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="comImg">

                    </div>
                </div><div className="com2">
                    <div className="circle2" >
                        <img src={unhrcl} className="logo12" alt="unhrcl" />
                        <img src={unhrcb} className="logo22" alt="unhrcb" />
                        <p className="agenda2">
                            <b>United Nations Human Rights Council (UNHRC)</b>
                        </p>
                        <div className="agendatext2">
                            The United Nations Human Rights Council (UNHRC) plays a pivotal role in promoting and protecting human rights globally. It investigates human rights violations, proposes resolutions, and engages in dialogue with nations to address issues. As a key UN body, the UNHRC contributes significantly to the advancement of human rights and international cooperation.
                            <div className='buttons'>
                                <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                                    <button className="button12" onClick={() => {setIsOpen(true);c(4)}}>
                                        <b className="btext">EB & Agenda</b>
                                    </button>
                                    <Modal ag1={data.ag1} ag1i={data.ag1i} ag1n={data.ag1n} open={isOpen} onClose={() => setIsOpen(false)}>

                                    </Modal>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="comImg">

                    </div>
                </div>
            </div>



        </>


    )
}

