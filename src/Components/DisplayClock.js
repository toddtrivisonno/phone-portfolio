import React from 'react';
import TimeKeeper from './TimeKeeper';

class DisplayClock extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         date: new Date(),
         isChecked: false
      };
      this.SwitchTime = this.SwitchTime.bind(this);
   }

   SwitchTime() {
      this.setState(state => ({
         isChecked: !state.isChecked
      }));
   }

   render() {

      return (

         <div className="container mx-auto text-center mt-5">
            <h1 className="display-4 mb-0">{this.state.date.toLocaleTimeString(
               this.state.isChecked ? 'it-IT' : 'en-US'
            )}
            </h1>
            <div className="custom-control custom-switch mx-auto">
               <input type="checkbox" className="custom-control-input" id="customSwitch" onClick={this.SwitchTime}/>
               <label className="custom-control-label" htmlFor="customSwitch">24hr</label>
            </div>
            <h5>{this.state.date.toLocaleDateString("en-US", {
               weekday: "long", year: "numeric", month: "short",
               day: "numeric"
            })}</h5>
         </div>
      )
   }
}

export default DisplayClock;