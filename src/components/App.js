import logo from '../images/logo.svg';
import './App.css';
import Banner from './Banner';
import ProjectBlock from './ProjectBlock';

function App() {
  return (
    <div className="App">
      <Banner />
      <ProjectBlock projId="test" projName="test" description="This is a test project." materials={["mud", "water", "clay"]} date={"2022"}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
