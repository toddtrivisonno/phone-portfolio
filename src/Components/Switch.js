import React from 'react';

class Switch extends React.Component {

   constructor(props) {
      super(props);

   }

   render() {
      return (
         <div className="custom-control custom-switch mx-auto">
            <input type="checkbox" className="custom-control-input" id="customSwitch" />
            <label className="custom-control-label" htmlFor="customSwitch">24hr</label>
         </div>
      )
   }
}

export default Switch;