import doneImg from "../../resources/Done_ring_round_fill.svg";

const DataCard = () => {
  return (
    <div className="dataCard-wrapper">
      <div className="dataCard-simpleWayText">😎 Simple way to communicate</div>
      <div className="dataCard-mainText">
        Actions for Accessibility in Design
      </div>
      <div className="dataCard-subheading">
        The fastest way to build and deploy websites with reusable components.
      </div>
      <div className="dataCard-btnwrappers">
        <button className="dataCard-completeBtn">Get Started</button>
        <button className="dataCard-underlineBtn"> Get Live Demo</button>
      </div>
      <div className="dataCard-extraData">
        <div className="datacard-extraDataImageWrapper">
          <img src={doneImg} alt="done" />
          <div>No credit card required</div>
        </div>
        <div className="datacard-extraDataImageWrapper">
          <img src={doneImg} alt="done" />
          <div>No software to install</div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
