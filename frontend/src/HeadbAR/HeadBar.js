import { useState } from "react";
import lightlOGO from "../../src/resources/logo-light.svg";
import ModeSwitch from "./modeSwitch/ModeSwitch";
import darklOGO from "../resources/logo-dark.svg";

const HeadBar = () => {
  const options = ["About", "Product", "Resources", "Contact"];
  const [active, setActive] = useState({ value: "" });

  const handleStateActive = (item) => {
    try {
      console.log(item);
      setActive((prevState) => ({
        ...prevState,
        value: item,
      }));
    } catch (e) {
      console.log("Error occured in handleStateActive", e);
    }
  };
  return (
    <div className="headbar-wrapper">
      <div className="headbarLogo-wrapper">
        <img
          src={lightlOGO}
          alt="Alvardo lOGO"
          className="theme-img light-img"
        />
        <img
          src={darklOGO}
          alt="Alvardo lOGO DARK"
          className="theme-img dark-img"
        />
      </div>
      <div className="headbar-linkwrapper">
        {options.map((item) => (
          <h4
            key={item}
            onClick={() => {
              handleStateActive(item);
            }}
            className={
              active.value === item
                ? "headbarnav-item active"
                : "headbarnav-item"
            }
          >
            {item}
          </h4>
        ))}
      </div>
      <div className="headbar-uiModeChanfeWrapper">
        <ModeSwitch />
      </div>
    </div>
  );
};

export default HeadBar;
