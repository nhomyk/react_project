import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ux08B6U6upw?si=stTo7IzhUZHV-G40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ask me anything <code></code>
        </p>        
        <a
          className="App-link"
          href="https://google.com/test"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHATBOT
        </a>
      </header>
    </div>
  );
}

export default App;
