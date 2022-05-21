import React from 'react'
import cn from 'classnames'

import { experience } from './const'

import s from './MyExperience.module.scss'

const MyExperience = () => {
  return (
    <section className={cn(s.experience, 'main-container')}>
      <h1 className={s.experience__title}>Мой опыт работы</h1>
      <div className={s.experience__table}>
        {experience.map((item) => (
          <div className={s.experience__line}>
            <div className={s.experience__data}>
              {item.from} - {item.till}
            </div>
            <div className={s.experience__info}>
              <h3 className={s.experience__subtitle}>{item.company}</h3>
              <h3 className={s.experience__subtitle}>{item.position}</h3>
              <p className={s.experience__text}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyExperience
