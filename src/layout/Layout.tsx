import React from 'react'

import Header from './components/Header/Header'

import s from './Layout.module.scss'

const Layout = ({ children }: any): React.ReactElement => (
    <div className={s.layout}>
        <Header />

        <div className={s.layout__main}>{children}</div>

        <h2 className={s.layout__footer}>Здесь будет footer</h2>
    </div>
)

export default Layout
