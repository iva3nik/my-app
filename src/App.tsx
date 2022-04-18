import React from 'react'

import Layout from './layout/Layout'
import Works from './pages/Works/Works'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Layout>
        <Works />
      </Layout>
    </div>
  )
}

export default App
