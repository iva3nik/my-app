import React from 'react'
import cn from 'classnames'

import s from './Footer.module.scss'

const socialLinks = [
    { name: 'Github', link: 'https://github.com/iva3nik' },
    { name: 'Linkedid', link: 'https://www.linkedin.com/in/ivan-nikitin-71b038230/' },
    { name: 'Instagram', link: 'https://www.instagram.com/iva3nik/' },
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
