import "./App.css";
import LandingPage from "./components/landingPage";
import ContactPage from "./components/contactPage";
import PhotosPage from "./components/facilitiesPage";
import ServicesPage from "./components/servicesPage";
import Testimonies from "./components/testimonies";
import LocationsPage from "./components/locationsPage";
import { Route } from "react-router-dom";

function App() {
 return (
  <div className="App">
   <Route exact path="/" component={LandingPage} />
   <Route path="/contact" component={ContactPage} />
   <Route path="/photos" component={PhotosPage} />
   <Route path="/services" component={ServicesPage} />
   <Route path="/testimonies" component={Testimonies} />
   <Route path="/locations" component={LocationsPage} />
  </div>
 );
}

export default App;
