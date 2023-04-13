import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import { LocationProvider } from "./context/LocationContext";

function App() {
  return (
    <LocationProvider>
      <br />
      <Header />
      <br />

      <Weather />
      <br />
      <br />
      <Dropdown />
      <Footer />
    </LocationProvider>
  );
}

export default App;
