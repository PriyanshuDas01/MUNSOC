import React from 'react'
import './count2.css';
import $ from 'jquery';

import { useEffect } from 'react';

const CountdownComponent = () => {
  // function calculateResponsiveValue(valueInPx) {
  //   var viewportWidth = window.innerWidth;
  //   return (valueInPx / viewportWidth) * 100 + 'vw';
  // }
  function calculatePixelValue(valueInVw) {
    var viewportWidth = window.innerWidth;
    return (valueInVw * viewportWidth) / 100 ;
  }
  
 

  useEffect(() => {

    var ringer = {
        //countdown_to: "10/31/2014",
        countdown_to: "1/6/2024",
        rings: {
          'DAYS': { 
            s: 86400000, // mseconds in a day,
            max: 100
          },
          'HOURS': {
            s: 3600000, // mseconds per hour,
            max: 24
          },
          'MINUTES': {
            s: 60000, // mseconds per minute
            max: 60
          },
          'SECONDS': {
            s: 1000,
            max: 60
          },
        //   'MICROSEC': {
        //     s: 10,
        //     max: 100
        //   }
         },
  
        r_count: '4',
        r_spacing: calculatePixelValue(1), // px
        r_size: calculatePixelValue(13), // px
        r_thickness:calculatePixelValue(0.5), // px
        update_interval: 11, // ms
        // r_count: 4,
        // r_spacing: calculateResponsiveValue(10), // Responsive calculation for spacing
        // r_size: calculateResponsiveValue(100), // Responsive calculation for size
        // r_thickness: calculateResponsiveValue(2), // Responsive calculation for thickness
        // update_interval: 11, // ms (can be fixed)
          
        init: function(){
         
        //   ringer = ringer;
        //   ringer.cvs = document.createElement('canvas'); 
        ringer.cvs = document.getElementById('countdown-canvas');
      

          
          ringer.size = { 
            w: (ringer.r_size + ringer.r_thickness) * ringer.r_count + (ringer.r_spacing*(ringer.r_count-1)), 
            h: (ringer.r_size + ringer.r_thickness) 
          };
          
          ringer.cvs.setAttribute('width',ringer.size.w);           
          ringer.cvs.setAttribute('height',ringer.size.h);
          ringer.ctx = ringer.cvs.getContext('2d');
        //   $(document.body).append(ringer.cvs);
          ringer.cvs = $(ringer.cvs);    
          ringer.ctx.textAlign = 'center';
          ringer.actual_size = ringer.r_size + ringer.r_thickness;
          ringer.countdown_to_time = new Date(ringer.countdown_to).getTime();
          // ringer.cvs.css({ width: ringer.size.w+"px", height: ringer.size.h+"px" });
          ringer.go();
        },
        ctx: null,
        go: function(){
          var idx=0;
          
          ringer.time = (new Date().getTime()) - ringer.countdown_to_time;
          
          
          for(var r_key in ringer.rings) ringer.unit(idx++,r_key,ringer.rings[r_key]);      
          
          setTimeout(ringer.go,ringer.update_interval);
        },
        unit: function(idx,label,ring) {
          var x,y, value, ring_secs = ring.s;
          value = parseFloat(ringer.time/ring_secs);
          ringer.time-=Math.round(parseInt(value)) * ring_secs;
          value = Math.abs(value);
          
          x = (ringer.r_size*.5 + ringer.r_thickness*.5);
          x +=+(idx*(ringer.r_size+ringer.r_spacing+ringer.r_thickness));
          y = ringer.r_size*.5;
          y += ringer.r_thickness*.5;
      
          
          // calculate arc end angle
          var degrees = 360-(value / ring.max) * 360.0;
          var endAngle = degrees * (Math.PI / 180);
          
          ringer.ctx.save();
      
          ringer.ctx.translate(x,y);
          ringer.ctx.clearRect(ringer.actual_size*-0.5,ringer.actual_size*-0.5,ringer.actual_size,ringer.actual_size);
      
          // first circle
          ringer.ctx.strokeStyle = "rgba(128,128,128,0.2)";
          ringer.ctx.beginPath();
          ringer.ctx.arc(0,0,ringer.r_size/2,0,2 * Math.PI, 2);
          ringer.ctx.lineWidth =ringer.r_thickness;
          ringer.ctx.stroke();
         
          // second circle
          ringer.ctx.strokeStyle = "#e0c00b";
          ringer.ctx.beginPath();
          ringer.ctx.arc(0,0,ringer.r_size/2,0,endAngle, 1);
          ringer.ctx.lineWidth =ringer.r_thickness;
          ringer.ctx.stroke();
          
          // label
          ringer.ctx.fillStyle = "#ffffff";
         
          ringer.ctx.font = '1.8vw Helvetica';
          ringer.ctx.fillText(label, 0, 2 + ringer.actual_size * 0.2);
          ringer.ctx.fillText(label, 0,  2 + ringer.actual_size * 0.2);   
          
          ringer.ctx.font = 'bold 4vw Helvetica';
          ringer.ctx.fillText(Math.floor(value), 0,0 + ringer.actual_size * 0.1);
          
          ringer.ctx.restore();
        }
      }

    ringer.init(); // Initialize the countdown

    // return () => {
    //   // Cleanup when the component unmounts (clear any timeouts or intervals if necessary)
    // };
  }, []); // Empty dependency array to run the effect once after initial render

  return (<div className='c1'>
    <div className="countdown-container">
        <div className='counthead'>CONFERENCE BEGINS IN</div>
      <canvas id="countdown-canvas"></canvas>
    </div>
    </div>
  );
};

export default CountdownComponent;
