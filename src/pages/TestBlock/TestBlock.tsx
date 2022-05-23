import React from 'react'
import cn from 'classnames'

import s from './TestBlock.module.scss'

const TestBlock: React.FC = () => {
  return (
    <section className={cn(s.test, 'main-container')}>
      <h1 className={s.test__title}>Блок для теста различных технологий</h1>
    </section>
  )
}

export default TestBlock
