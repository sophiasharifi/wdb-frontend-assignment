import Header from './header.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from './booking.js';
import Adoption from './adoption.js'
import HomePage from './homepage.js'

function App() {
  return (
        <Router>
          <Header/>
        <Switch>
          <Route path = '/' exact component = {HomePage}/>
        </Switch>
        
        <Route path="/booking"  component = {Booking} />
        <Route path="/adoption" component = {Adoption}/>
      </Router>
  );
}

export default App;