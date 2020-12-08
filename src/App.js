import './App.css';
import landingPage from './components/landingPage'


import {Route} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      

      <Route exact path='/' component={landingPage} />



    </div>
  );
}

export default App;
