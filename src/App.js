import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './constants/routes'

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map(routeInfo => {
          const { path, exact, Component } = routeInfo

          return (
            <Route
              path={path}
              key={path}
              exact={exact}
              element={<Component />}
            />
          )
        })}
      </Routes>
    </Router>
  )
}
