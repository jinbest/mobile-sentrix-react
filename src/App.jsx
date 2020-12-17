import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header, Preloader } from './components/'
import { Section1, Section2, Section3, Section4, Section5 } from './pages/home/'
import { Error } from './pages/error'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Switch className='p-0'>
          <Route exact path='/'>
            <React.Fragment>
              <Header />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Footer />
            </React.Fragment>
          </Route>
          <Route path='/error'>
            <Header />
            <Error />
            <Footer />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
