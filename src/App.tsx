import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import Works from './pages/Works/Works'

import { appRoutes } from './router'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Layout>
        <Routes>
          <Route path='/works' element={<Works />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
