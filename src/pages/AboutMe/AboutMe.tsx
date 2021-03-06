import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import my_photo from '../../assets/images/AboutMe/my_photo.png'
import my_photo_big from '../../assets/images/AboutMe/my_photo_big.jpeg'

import s from './AboutMe.module.scss'

const AboutMe: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  const updateWidth = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section className={cn(s.about, 'main-container')}>
      <div className={s.about__container}>
        <img className={s.about__photo} src={width >= 768 ? my_photo : my_photo_big} alt='My photo' />
        <div className={s.about__content}>
          <div className={s.about__info}>
            <p>Всем привет! Меня зовут Иван и я Frontend разработчик.</p>
            <p>
              Мне 29 лет. Я родился в Обнинске и с 17 лет живу на два города, Москва и Обнинск. Закончил факультет
              специального машиностроения в МГТУ им. Н.Э.Баумана в 2018 году.
            </p>
            <p>С 2018 по 2021 год работал конструктором-макетчиком в компании «3Д Дисплей».</p>
            <p>
              Прошел обучение в Яндекс.Практикум по направлению "Веб-разработчик" и сейчас нахожусь в активном поиске
              работы!
            </p>
            <p>Люблю природу, игровые виды спорта и кататься на разных досках.</p>
            <p>
              <span>Hard skills:</span>
              <br />
              ReactJS , JavaScript , TypeScript , Git ,<br />
              HTML , CSS , SCSS , Figma
              <br />
              <br />
              <span>Soft skills:</span>
              <br />
              Пунктуальность , Позитивный настрой , Ответственность
              <br />
              <br />
              <span>Other skills:</span>
              <br />
              AutoCad , SolidWorks , Английский язык - B1
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
