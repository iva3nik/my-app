import React, { useState } from 'react'
import cn from 'classnames'

import { Button } from '../../../../components/Button/Button'

import { TWorksExample } from '../../../../const/type'

import s from './Work.module.scss'

interface TItem {
  item: TWorksExample
}

const Work: React.FC<TItem> = (props) => {
  const [isShowedInfo, setIsShowedInfo] = useState<boolean>(false)

  const handleButton = () => {
    setIsShowedInfo(!isShowedInfo)
  }

  return (
    <>
      {isShowedInfo ? (
        <section className={cn(s.work, s.work_back, s.work_border)}>
          <div className={s.work__content}>
            <div className={s.work__text}>
              <p>
                Название проекта: <span>{props.item.name}</span>
              </p>
              <p>Описание проекта: {props.item.description}</p>
              <p>Стэк проекта: {props.item.stack}</p>
              <a href={props.item.linkGP} target='_blank'>
                Переход к проекту на Github Pages
              </a>
              <a href={props.item.linkGithub} target='_blank'>
                Переход к проекту на Github
              </a>
            </div>
            <Button onClick={handleButton} type={'naked'} fullWidth={false} customClassName={s.work__button}>
              Назад
            </Button>
          </div>
        </section>
      ) : (
        <section className={s.work} style={{ backgroundImage: `url(${props.item.photo})` }}>
          <div className={s.work__content}>
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
