import React from 'react';

class Clock extends React.Component {

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
         <div className="container mx-auto text-center">
            <h1 className="display-4">{this.state.date.toLocaleTimeString()}</h1>
            <h5>{this.state.date.toLocaleDateString()}</h5>
         </div>
      )

   }


}

export default Clock;