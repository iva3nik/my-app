import React from 'react'

import s from './Layout.module.scss'

const Layout = ({ children }: any): React.ReactElement => (
    <div className={s.layout}>
        <h2 className={s.layout__header}>Здесь будет header</h2>

        <div className={s.layout__main}>{children}</div>

        <h2 className={s.layout__footer}>Здесь будет footer</h2>
    </div>
)

export default Layout
