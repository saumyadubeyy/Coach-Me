import React from 'react'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SpecialFeatures from './components/SpecialFeatures'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import "./App.css"


const App = () => {
  return (
    <div className='app'>
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Coach-Me" component={Home} />
          <Route  path='/features' component={SpecialFeatures} />
          <Route  path='/about' component={AboutUs} />
          <Route  path='/contactus' component={ContactUs} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
      </div>
  )
}

export default App
