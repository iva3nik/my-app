export interface TExperience {
  from: string
  till: string
  company: string
  position: string
  description: string
}

export const experience: Array<TExperience> = [
  {
    from: 'Декабрь 2021',
    till: 'Апрель 2022',
    company: 'P.A.Group',
    position: 'Стажёр front-end разработчик',
    description: 'Вёрстка компонентов на React. Интегрирование их в проект. Запрос на сервер и обработка информации.',
  },
  {
    from: 'Октябрь 2020',
    till: 'Октябрь 2021',
    company: 'Яндекс.Практикум',
    position: 'Front-end разработчик(обучение)',
    description:
      'Онлайн курс "Веб-разработчик". В течении года изучали разные технологии, закрепляли полученные знания учебными проектами и написали выпускную работу',
  },
  {
    from: 'Июль 2018',
    till: 'Июль 2021',
    company: 'РА 3Д Дисплей',
    position: 'Конструктор-макетчик',
    description: 'Разработка рекламного оборудования, 3д моделей, КД и файлов для станков.',
  },
]
