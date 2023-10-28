import React, { Component } from 'react'
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


export default class Card extends Component {

    render() {
        return (
            <>

                <div className='card'>
                <img src={combg} className="bgg" alt='combg'/>
                <div className="com1 'visible transition duration-1000 delay-800'">
        <div className="circle">
            <img src={disecl} className="logo1" alt="disecl"/>
            <img src={disecb} className="logo2" alt="disecb"/>
            <p className="agenda">
                <b>Disarmament and International Security Committee (DISEC)</b>
            </p>
            <div className="agendatext">
                The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                <div>
                    <button className="button1">
                       <b className="btext">EB & Agenda</b>
                    </button>
                </div>
            
            </div>


        </div>
        <div className="comImg">
             
        </div>
    </div>


    <div className="com2">
        <div className="circle2" >
            <img src={whol} className="logo12" alt="whol"/>
            <img src={whob} className="logo22" alt="whob"/>
            <p className="agenda2">
                <b>World Health Organization (WHO)</b>
            </p>
            <div className="agendatext2">
                The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                <div>
                    <button className="button12">
                       <b className="btext">EB & Agenda</b>
                    </button>
                </div>
            </div>


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
                    The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                    <div>
                        <button className="button1">
                            <b className="btext">EB & Agenda</b>
                        </button>
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
                        The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                        <div>
                            <button className="button12">
                                <b className="btext">EB & Agenda</b>
                            </button>
                        </div>
                    </div>


                </div>
                <div className="comImg">

                </div>
            </div>
                </div>
                
                

            </>
            

            )
            }}
