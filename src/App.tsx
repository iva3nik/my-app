import React from 'react'

import Layout from './layout/Layout'

import s from './App.module.scss'

function App() {
    return (
        <div className={s.app}>
            <Layout>
                <div className={s.app__content}>Some content</div>
            </Layout>
        </div>
    )
}

export default App
