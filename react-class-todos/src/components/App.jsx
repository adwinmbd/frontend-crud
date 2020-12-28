import React from 'react'
import Home from './Home'
import About from './About'
import Navigation from './Navigation'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    // activeStyle={{borderBottom:'2px solid orchid'}}
    <Router>
      <section className="section">
        <div className="container">
          <Navigation/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </section>
    </Router>
  )
}

export default App
