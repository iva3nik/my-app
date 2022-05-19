import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import Works from './pages/Works/Works'
import NotFound from './pages/NotFound/NotFound'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Layout>
        <Routes>
          <Route path='/works' element={<Works />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
