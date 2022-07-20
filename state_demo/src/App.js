import { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Game></Game>
//     </div>
//   );
// }

export default App;
