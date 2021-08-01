import "./App.css";
import LandingPage from "./components/landingPage";
import ContactPage from "./components/contactPage";
import FacilitiesPage from "./components/facilitiesPage";

import { Route } from "react-router-dom";

function App() {
 return (
  <div className="App">
   <Route exact path="/" component={LandingPage} />
   <Route path="/contact" component={ContactPage} />
   <Route path="/facilities" component={FacilitiesPage} />
  </div>
 );
}

export default App;
