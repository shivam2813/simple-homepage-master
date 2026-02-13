import { useState, useEffect } from "react";
import moonImg from "../../resources/Moon_fill_light.svg";
import sunImg from "../../resources/Sun_fill.svg";
import darkmMooniNG from "../../resources/Moon_fill.svg";

const ModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const handleModeSwitch = () => {
    try {
      setIsDark((prevState) => !prevState);
    } catch (e) {
      console.log("Error occured in handlemODESWITCH", e);
    }
  };

  useEffect(() => {
    if (isDark) {
      console.log("adding");
      document.body.classList.add("dark-mode");
    } else {
      console.log("removing");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <div
      className={`custom-switch ${isDark ? "dark-mode" : ""}`}
      onClick={() => {
        handleModeSwitch();
      }}
    >
      <div className="switch-icons">
        <img src={isDark === true ? moonImg : darkmMooniNG} alt="moon" />
        <img src={sunImg} alt="sun" />
      </div>
      <div className="switch-thumb"></div>
    </div>
  );
};
export default ModeSwitch;
