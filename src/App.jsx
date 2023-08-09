import Header from "./components/Header";
import Hero from "./components/Hero";
import './index.css'


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#A5D7E8] vai-[#000000] to-[#1F6E8C] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
