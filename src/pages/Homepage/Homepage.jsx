import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <main className="main">
      <Header />
      <About />
      <Projects></Projects>
    </main>
  );
};

export default Homepage;
