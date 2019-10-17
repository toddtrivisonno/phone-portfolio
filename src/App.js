import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Title from './Components/Title.js';
import Clock from './Components/Clock.js';


// import all my components

// function App() {
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Clock />
        <div className="App" >
          <img src='Todd_AVATAR_100x100.png' className="App-logo" alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}
// }

export default App;
