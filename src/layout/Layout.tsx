import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import s from './Layout.module.scss'

const Layout = ({ children }: any): React.ReactElement => (
    <div className={s.layout}>
        <Header />

        <div className={s.layout__main}>{children}</div>

        <Footer />
    </div>
)

export default Layout
