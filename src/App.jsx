import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Footer, Header, Preloader } from './components/'
import { Home, PrevHome } from './pages/home'
import { Error } from './pages/error'
import { redirectRouters } from './Database'

const App = () => {

  const BaseRouter = () => {
    return (
      <>
        <Route path='/' exact component={Home} />
        <Route path='/prev' exact component={PrevHome} />
        {redirectRouters.map((item, index) => {
          return (
            <Route path={'/' + item} key={index} render={() => <Redirect to='/error' />} />
          )
        })}
        <Route path='/error' component={Error} />
      </>
    )
  }

  return (
    <div>
      <Preloader />
      <Router>
        <Header />
        <BaseRouter />
        <Footer />
      </Router>
    </div>
  )
  
}

export default App