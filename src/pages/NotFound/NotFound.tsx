import React from 'react'

import page_not_found from '../../assets/images/NotFound/page_not_found.png'

import s from './NotFound.module.scss'

const NotFound: React.FC = () => {
  return (
    <section className={s.notfound}>
      <img className={s.notfound__image} src={page_not_found} alt='Page not found' />
    </section>
  )
}

export default NotFound
