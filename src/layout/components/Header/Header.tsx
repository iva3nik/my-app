import React from 'react'
import cn from 'classnames'

import Navigation from './components/Navigation/Navigation'

import logo from '../../../assets/svg/Ivan_Nikitin.svg'

import s from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={cn(s.header, 'main-container')}>
      <div className={s.header__container}>
        <img src={logo} alt='Ivan Nikitin' className={s.header__logo} />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
