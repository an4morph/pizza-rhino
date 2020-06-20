import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
