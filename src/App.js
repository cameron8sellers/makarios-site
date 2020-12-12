import './App.css';
import landingPage from './components/landingPage'
import ContactPage from './components/contactPage'

import {Route} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      

      <Route exact path='/' component={landingPage} />
      <Route path='/contact' component={ContactPage} />



    </div>
  );
}

export default App;
