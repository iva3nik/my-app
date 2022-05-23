import React from 'react'

import { contacts } from './const'

import s from './Contacts.module.scss'

const Contacts: React.FC = () => {
  return (
    <section className={s.contacts}>
      <h1 className={s.contacts__title}>
        Вы можете связаться со мной <br /> одним из нижеперечисленных способов:
      </h1>
      <ul className={s.contacts__list}>
        {contacts.map((contact) => (
          <li className={s.contacts__line} key={contact.nameWay}>
            <h3 className={s.contacts__way}>{contact.nameWay}: </h3>
            <p className={s.contacts__description}>{contact.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contacts
