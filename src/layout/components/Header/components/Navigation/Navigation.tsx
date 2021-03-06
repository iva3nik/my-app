import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { navLinks } from '../../../../../router'

import s from './Navigation.module.scss'

const Navigation: React.FC = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation__menu}>
        {navLinks &&
          navLinks.map((link, index) => (
            <li key={link.title + index}>
              <NavLink
                to={link.to}
                className={(navData) =>
                  navData.isActive ? cn(s.navigation__link, s.navigation__link_active) : s.navigation__link
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation
