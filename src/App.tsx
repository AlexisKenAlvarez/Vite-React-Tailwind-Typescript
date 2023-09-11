import Footer from "./components/Footer";
import About from "./views/About";
import Hero from "./views/Hero";
import Tokenomics from "./views/Tokenomics";

const App = () => {
  return (
    <div className="w-full h-auto my-bg bg-bg">
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
