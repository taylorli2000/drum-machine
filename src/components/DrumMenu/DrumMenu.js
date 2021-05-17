import { useEffect } from "react";
import drum1 from "../../assets/Cev_H2.mp3";
import drum2 from "../../assets/Dsc_Oh.mp3";
import drum3 from "../../assets/Heater-1.mp3";
import drum4 from "../../assets/Heater-2.mp3";
import drum5 from "../../assets/Heater-3.mp3";
import drum6 from "../../assets/Heater-4_1.mp3";
import drum7 from "../../assets/Heater-6.mp3";
import drum8 from "../../assets/Kick_n_Hat.mp3";
import drum9 from "../../assets/RP4_KICK_1.mp3";
import "./DrumMenu.css";

const KEYS = [
  "q",
  "w",
  "e",
  "a",
  "s",
  "d",
  "z",
  "x",
  "c",
  "Q",
  "W",
  "E",
  "A",
  "S",
  "D",
  "Z",
  "X",
  "C",
];

export default function DrumMenu() {
  function handleClick(event) {
    let clip = document.getElementById(event.target.innerText);
    clip.play();
    document.getElementById("currentClip").innerText = clip.parentElement.id;
  }

  function onKeydown(event) {
    const { key, repeat } = event;
    if (!repeat) {
      if (KEYS.includes(key)) {
        let clip = document.getElementById(key.toUpperCase());
        clip.play();
        document.getElementById("currentClip").innerText =
          clip.parentElement.id;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "100%" }}
      >
        <h2 id="currentClip">Play a clip</h2>
      </div>
      <button id="Closed HH" className="drum-pad" onClick={handleClick}>
        Q<audio id="Q" className="clip" src={drum1}></audio>
      </button>
      <button id="Open HH" className="drum-pad" onClick={handleClick}>
        W<audio id="W" className="clip" src={drum2}></audio>
      </button>
      <button id="Heater-1" className="drum-pad" onClick={handleClick}>
        E<audio id="E" className="clip" src={drum3}></audio>
      </button>
      <button id="Heater-2" className="drum-pad" onClick={handleClick}>
        A<audio id="A" className="clip" src={drum4}></audio>
      </button>
      <button id="Heater-3" className="drum-pad" onClick={handleClick}>
        S<audio id="S" className="clip" src={drum5}></audio>
      </button>
      <button id="Heater-4" className="drum-pad" onClick={handleClick}>
        D<audio id="D" className="clip" src={drum6}></audio>
      </button>
      <button id="Clap" className="drum-pad" onClick={handleClick}>
        Z<audio id="Z" className="clip" src={drum7}></audio>
      </button>
      <button id="Kick n' Hat" className="drum-pad" onClick={handleClick}>
        X<audio id="X" className="clip" src={drum8}></audio>
      </button>
      <button id="Kick" className="drum-pad" onClick={handleClick}>
        C<audio id="C" className="clip" src={drum9}></audio>
      </button>
    </div>
  );
}
