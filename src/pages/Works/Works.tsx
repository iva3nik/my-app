import React from 'react'

import Work from './components/Work/Work'

import diploma from '../../assets/images/Works/diploma.png'

import s from './Works.module.scss'

import { TWorksExample } from '../../const/type'

const worksExample: Array<TWorksExample> = [
  {
    name: 'Diploma',
    photo: diploma,
    description: 'diploma work',
    stack: 'React.js / JavaScript / HTML / CSS / MongoDB / Node',
  },
]

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
