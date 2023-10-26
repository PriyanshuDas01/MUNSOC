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


export default class Card extends Component {

    render() {
        return (
            <>

            <div className='card'>
                <div class="com1 'visible transition duration-1000 delay-800'">
        <div class="circle">
            <img src={disecl} class="logo1" alt="logo"/>
            <img src={disecb} class="logo2" alt="logo"/>
            <p class="agenda">
                <b>Disarmament and International Security Committee (DISEC)</b>
            </p>
            <div class="agendatext">
                The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                <div>
                    <button class="button1">
                       <b class="btext">EB & Agenda</b>
                    </button>
                </div>
            
            </div>


        </div>
        <div class="comImg">
             
        </div>
    </div>


    <div class="com2">
        <div class="circle2" >
            <img src={whol} class="logo12" alt="logo"/>
            <img src={whob} class="logo22" alt="logo"/>
            <p class="agenda2">
                <b>World Health Organization (WHO)</b>
            </p>
            <div class="agendatext2">
                The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                <div>
                    <button class="button12">
                       <b class="btext">EB & Agenda</b>
                    </button>
                </div>
            </div>


        </div>
        <div class="comImg">
             
        </div>
    </div>
    

        <div class="com1">
            <div class="circle" >
                <img src={legall} class="logo1" alt="logo" />
                <img src={legalb} class="logo2" alt="logo" />
                <p class="agenda">
                    <b class="legal">UNGA Sixth Committee-Legal</b>
                </p>
                <div class="agendatext">
                    The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                    <div>
                        <button class="button1">
                            <b class="btext">EB & Agenda</b>
                        </button>
                    </div>
                </div>


            </div>
            <div class="comImg">

            </div>
        </div><div class="com2">
                <div class="circle2" >
                    <img src={unhrcl} class="logo12" alt="logo" />
                    <img src={unhrcb} class="logo22" alt="logo" />
                    <p class="agenda2">
                        <b>United Nations Human Rights Council (UNHRC)</b>
                    </p>
                    <div class="agendatext2">
                        The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the Member States of the United Nations has an equal vote.
                        <div>
                            <button class="button12">
                                <b class="btext">EB & Agenda</b>
                            </button>
                        </div>
                    </div>


                </div>
                <div class="comImg">

                </div>
            </div>
                </div>
                
                

            </>
            

            )
            }}
