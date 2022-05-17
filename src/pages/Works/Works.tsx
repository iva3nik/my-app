import React from 'react'

import Work from './components/Work/Work'

import { worksExample } from './const'

import s from './Works.module.scss'

const Works: React.FC = () => {
  return (
    <section className={s.works}>
      {worksExample.map((work, index) => (
        <div className={s.works__item} key={work.name + index}>
          <Work item={work} />
        </div>
      ))}
    </section>
  )
}

export default Works
