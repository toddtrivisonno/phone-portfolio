import React from 'react';
import DisplayClock from './DisplayClock';
import CountdownTimer from './CountdownTimer';

class TimeKeeper extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         date: new Date(),
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
         <React.Fragment>
            <DisplayClock time={this.state.date} />
            <CountdownTimer time={this.state.date} />
         </React.Fragment>
      )
   }
}

export default TimeKeeper;