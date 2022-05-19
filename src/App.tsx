import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import Works from './pages/Works/Works'
import NotFound from './pages/NotFound/NotFound'

import { appRoutes } from './router'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Layout>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </Layout>
    </div>
  )
}

export default App
