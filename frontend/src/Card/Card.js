import reviewImage from "../resources/hero-image-simple-homepage.png";
import DataCard from "./DataCard/DataCard";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-datawrapper">
        <DataCard />
      </div>
      <div className="card-ImageWrapper">
        <img src={reviewImage} alt="Review imAGE" />
      </div>
    </div>
  );
};

export default Card;
