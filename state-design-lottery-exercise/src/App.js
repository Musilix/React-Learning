import './App.css';
import Lottery from './components/Lottery/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery lottoName = "THE BIG ONE" lottoBalls = {6} maxBallNum = {10} />
      <Lottery lottoName = "THE small ONE" lottoBalls = {4} maxBallNum = {54} />
    </div>
  );
}

export default App;
