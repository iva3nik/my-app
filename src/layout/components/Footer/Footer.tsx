import React from 'react'
import cn from 'classnames'

import instagram from '../../../assets/icons/instagram_icon.png'
import github from '../../../assets/icons/github_icon.png'
import linkedin from '../../../assets/icons/linkedin_icon.png'

import s from './Footer.module.scss'

export interface TSocialLinks {
  name: string
  link: string
  icon: string
}

const socialLinks: Array<TSocialLinks> = [
  { name: 'Github', link: 'https://github.com/iva3nik', icon: github },
  { name: 'Linkedin', link: 'https://www.linkedin.com/in/ivan-nikitin-71b038230/', icon: linkedin },
  { name: 'Instagram', link: 'https://www.instagram.com/iva3nik/', icon: instagram },
]

const Footer: React.FC = () => {
  return (
    <div className={cn(s.footer, 'main-container')}>
      <div className={s.footer__container}>
        <p className={s.footer__copyrights}>&copy; 2022 - Иван Никитин</p>
        <ul className={s.footer__links}>
          {socialLinks.map((item, index) => (
            <li key={item.name + index} className={s.footer__link}>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img src={item.icon} alt={item.name} className={s.footer__icon} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
