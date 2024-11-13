import HeroConnect from "../../components/HeroConnect/HeroConnect";
import "./ConnectPage.scss";
import liuImg from "../../assets/logos/liu4.png";

import ConnectLinks from "../../components/ConnectLinks/ConnectLinks";

const ConnectPage = () => {
  return (
    <section className="connect">
      <HeroConnect />
      <ConnectLinks />
    </section>
  );
};

export default ConnectPage;
