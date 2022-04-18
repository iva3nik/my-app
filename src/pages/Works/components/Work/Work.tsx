import React, { useState } from 'react'
import cn from 'classnames'

import { Button } from '../../../../components/Button/Button'

import { TWorksExample } from '../../../../const/type'

import s from './Work.module.scss'

interface TItem {
  item: TWorksExample
}

const Work = (props: TItem) => {
  const [isShowedInfo, setIsShowedInfo] = useState(false)

  const handleButton = () => {
    setIsShowedInfo(!isShowedInfo)
  }

  return (
    <>
      {isShowedInfo ? (
        <section className={cn(s.work, s.work_back)}>
          <div className={s.work__content}>
            <div className={s.work__text}>
              <p>Название проекта: {props.item.name}</p>
              <p>Описание проекта: {props.item.description}</p>
              <p>Стэк проекта: {props.item.stack}</p>
            </div>
            <Button onClick={handleButton} type={'naked'} fullWidth={false} customClassName={s.work__button}>
              Назад
            </Button>
          </div>
        </section>
      ) : (
        <section className={s.work} style={{ backgroundImage: `url(${props.item.photo})` }}>
          <div className={s.work__content}>
            <h2>{props.item.name}</h2>
            <Button onClick={handleButton} type={'primary'} fullWidth={false} customClassName={s.work__button}>
              Подробнее
            </Button>
          </div>
        </section>
      )}
    </>
  )
}

export default Work
