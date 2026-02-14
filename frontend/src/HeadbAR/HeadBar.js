import { useEffect, useState } from "react";
import lightlOGO from "../../src/resources/logo-light.svg";
import ModeSwitch from "./modeSwitch/ModeSwitch";
import darklOGO from "../resources/logo-dark.svg";
import hamburgerIMG from "../resources/hamburger-button.svg";
import closeIcon from "../resources/close-button.svg";

const HeadBar = () => {
  const options = ["About", "Product", "Resources", "Contact"];
  const [active, setActive] = useState({ value: "" });
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);
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
      <img
        src={hamburgerIMG}
        alt="hamburger"
        className="hamburger"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />

      <div className={`mobileMenu ${menuOpen ? "open" : " "}`}>
        <img
          src={closeIcon}
          alt="close"
          className="closeIcon"
          onClick={() => {
            setMenuOpen(false);
          }}
        />
        <div className="mobileMenuItem">About</div>
        <div className="mobileMenuItem">Product</div>
        <div className="mobileMenuItem">Resources</div>
        <div className="mobileMenuItem">Contact</div>
        <div className="mobileMenuItem">
          <ModeSwitch />
        </div>
      </div>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setMenuOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default HeadBar;
