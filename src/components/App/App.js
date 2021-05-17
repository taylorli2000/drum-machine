import { Container } from "react-bootstrap";
import DrumMenu from "../DrumMenu/DrumMenu";
import "./App.css";

function App() {
  return (
    <Container
      id="drum-machine"
      className="d-flex flex-column align-items-center justify-content-center"
      fluid
    >
      <h1 id="title">Drum Machine</h1>
      <div id="display">
        <DrumMenu />
      </div>
      <small id="credit">
        Designed and coded by
        <span> Taylor Li</span>
      </small>
    </Container>
  );
}

export default App;
