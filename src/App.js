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
import SignHome from './components/SignHome'
import "./App.css"


const App = () => {
  return (
    <div className='app'>
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Coach-Me" component={Home} />
          <Route  path='/Coach-Me/features' component={SpecialFeatures} />
          <Route  path='/Coach-Me/about' component={AboutUs} />
          <Route  path='/Coach-Me/contactus' component={ContactUs} />
          <Route path='/Coach-Me/signHome' component={SignHome} />
          <Route path='/Coach-Me/signIn' component={SignIn} />
          <Route path='/Coach-Me/signUp' component={SignUp} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
      </div>
  )
}

export default App
