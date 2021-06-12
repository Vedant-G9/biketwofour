import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'

import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'
import User from './components/Layout/Users/User'
import About from './components/Pages/About'

import GithubState from './Context/Github/GithubState'

const App = (props) => {
  const [alert, setAlert] = useState(null)

  // Get user Repos

  //Clear Users

  //Set alert
  const showAlert = (msg) => {
    setAlert({ msg })

    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
      <Router>
        <main className="bg-pink-50">
          <Navbar />
          <section className="pt-5 pb-5">
            <div className="container mx-auto px-4">
              <Route exact path="/" component={Seaction} />
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search setAlert={showAlert} />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    </GithubState>
  )
}

export default App
