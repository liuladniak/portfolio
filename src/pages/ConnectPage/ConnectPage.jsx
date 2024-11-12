import HeroConnect from "../../components/HeroConnect/HeroConnect";
import "./ConnectPage.scss";
import liuImg from "../../assets/logos/liu4.png";

import ConnectLinks from "../../components/ConnectLinks/ConnectLinks";

const ConnectPage = () => {
  return (
    <section className="connect">
      <HeroConnect />
      <ConnectLinks />
      <div className="liu-icon--connect-mobile">
        <img className="liu-icon" src={liuImg} alt="Liu's icon" />
      </div>
    </section>
  );
};

export default ConnectPage;
