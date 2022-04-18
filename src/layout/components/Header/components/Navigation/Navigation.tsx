import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import s from './Navigation.module.scss'

export interface TNavLinks {
  to: string
  title: string
}

const navLinks: Array<TNavLinks> = [
  { to: '/', title: 'About me' },
  { to: '/works', title: 'Works' },
  { to: '/experience', title: 'Experience' },
  { to: '/places', title: 'Places' },
  { to: '/contacts', title: 'Contacts' },
]

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
