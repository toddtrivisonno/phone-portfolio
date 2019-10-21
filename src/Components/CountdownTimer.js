import React from 'react';

class CountdownTimer extends React.Component {

   constructor(props) {
      super(props);
      
   }

   msToTime(duration) {
      let milliseconds = parseInt((duration%1000)/100),
         seconds = parseInt((duration/1000)%60),
         minutes = parseInt((duration/(1000*60))%60),
         hours = parseInt((duration/(1000*60*60))%24);
      let days = Math.floor(duration / (1000 * 60 * 60 * 24));
   
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
   
      return days + ":" + hours + ":" + minutes + ":" + seconds;
   }

   render() {
      let futureTime = new Date(2019, 11, 6, 16, 0, 0);
      let diff = futureTime - this.props.time.getTime();
      let str = this.msToTime(diff);
      if(diff <= 0) {
         clearInterval();
      }

      return (

         <div className="container mx-auto text-center mt-5">
            <h1 className="display-4 mb-0">{str}
            </h1>
            <h5>Countdown to end of Bootcamp</h5>      
         </div>
      )
   }
}

export default CountdownTimer;