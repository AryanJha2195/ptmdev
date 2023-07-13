import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import NavBarr from "./component/NavBarr.jsx";
import HeroSection from "./component/HeroSection.jsx";
import Content from "./component/Content.jsx";
import Carsol from "./component/carsol.jsx";
import Privacy from "./component/Privacy.jsx";

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <HeroSection/>
      <Content/>
      <Carsol/>
      <Privacy/>
    </div>
  );
}

export default App;
