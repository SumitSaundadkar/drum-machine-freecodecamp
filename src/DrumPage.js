import "./drumPage.css";
import { data } from "./drumData";
import { useState } from "react";
const DrumPage = () => {
  const [pad, setPad] = useState(data);
  const [clicked, setCliked] = useState("");
  const soundClick = (link, title) => {
    const audio = new Audio(link);
    audio.play();
    setCliked(title);
  };

  return (
    <div id="drum-machine">
      {clicked && (
        <div className="pad_txt">
          <h1>{clicked}</h1>
        </div>
      )}

      <div id="display">
        {pad.map((item) => {
          return (
            <div
              className="drum-pad"
              onClick={() => soundClick(item.link, item.title)}
            >
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { DrumPage };
