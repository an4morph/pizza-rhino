import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'
import Theme from './Theme'
import { getMeAction } from './store/actions/auth'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMeAction())
  }, [dispatch])
  return (
    <Theme>
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
    </Theme>
  )
}

export default App
