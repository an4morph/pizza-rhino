import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { func, object } from 'prop-types'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        // todo
        const currentUser = 'null'
        if (!currentUser) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: func.isRequired,
  location: object,
}

export default PrivateRoute
