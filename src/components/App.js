import logo from "../images/logo.svg";
import "./App.css";
import Banner from "./Banner";
import ProjectBlock from "./ProjectBlock";

import aug23 from "../audio/aug_23_2018.wav";
import nov18 from "../audio/nov_18_2018.wav";
import feb8 from "../audio/feb_8_2023.wav";

function App() {
  return (
    <div className="App">
      <h1>Predicted Poems</h1>
      <div className="audios">
        <div className="audio">
          <h3>August 23, 2018</h3>
          <audio controls src={aug23}></audio>
        </div>
        <div className="audio">
          <h3>November 18, 2018</h3>
          <audio controls src={nov18}></audio>
        </div>
        <div className="audio">
          <h3>February 8, 2023</h3>
          <audio controls src={feb8}></audio>
        </div>
      </div>
    </div>
  );
}

export default App;
