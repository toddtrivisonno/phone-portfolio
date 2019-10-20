import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Title from './Components/Title.js';
import TimeKeeper from './Components/TimeKeeper.js';
import DisplayClock from './Components/DisplayClock';


// import all my components

// function App() {
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <DisplayClock />      
        <TimeKeeper />
      </React.Fragment>
    );
  }
}
// }

export default App;
