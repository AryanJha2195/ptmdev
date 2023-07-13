import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import NavBarr from "./component/NavBarr.jsx";
import HeroSection from "./component/HeroSection.jsx";
import Content from "./component/Content.jsx";
import Carsol from "./component/carsol.jsx";
import Privacy from "./component/Privacy.jsx";
import Schedule from "./component/Schedule.jsx";
import FooterComp from './component/FooterComp';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <HeroSection/>
      <Content/>
      <Carsol/>
      <Privacy/>
      <Schedule/>
      <FooterComp/>
    </div>
  );
}

export default App;
