import React from 'react';
import DisplayClock from './DisplayClock';

class TimeKeeper extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         date: new Date()
      };
   }

   componentDidMount() {
      this.timerID = setInterval(
         () => this.tick(),
         1000
      );
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      return (

         <DisplayClock />
         // <div className="container mx-auto text-center mt-5">
         //    <h1 className="display-4 mb-0">{this.state.date.toLocaleTimeString()}
         //    </h1>
         // </div>
      )
   }
}

export default TimeKeeper;