import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <PrivateRoute path="/profile" component={Profile} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
