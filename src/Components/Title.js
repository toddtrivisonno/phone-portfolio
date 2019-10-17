import React from 'react';

class Title extends React.Component {

   constructor(props) {
      super(props);

   }

   render() {
      return (
            <div className="container mx-auto text-center">
               <h1 className="display-4">{this.props.header}</h1>
            </div>
      )

   }


}

export default Title;