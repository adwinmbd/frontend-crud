import React from 'react'
import Home from './Home'
import About from './About'
import Navigation from './Navigation'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Router>
  )
}

export default App