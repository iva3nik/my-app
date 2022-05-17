import { TWorksExample } from '../../const/type'

import diploma from '../../assets/images/Works/diploma.png'
import stat4market from '../../assets/images/Works/stat4market.png'
import mesto from '../../assets/images/Works/mesto.png'
import paraweb from '../../assets/images/Works/paraweb.png'
import russian_travel from '../../assets/images/Works/russian-travel.png'
import krayt from '../../assets/images/Works/krayt.png'
import how_to_learn from '../../assets/images/Works/how-to-learn.png'
import ten_users from '../../assets/images/Works/ten-users.png'
import kaspersky from '../../assets/images/Works/kaspersky.png'
import cubes from '../../assets/images/Works/cubes.png'

export const worksExample: Array<TWorksExample> = [
  {
    name: 'Diploma',
    photo: diploma,
    description:
      'Проект представляет собой одностраничный сайт. Для просмотра основного контента, новым пользователям необходимо зарегестрироваться и авторизоваться. Основной контент представлен в виде карточек c фильмами. Для отображения фильмов, нужно сделать запрос в поиске. Найденные фильмы можно сохранять и удалять(каталог: сохраненные фильмы). Можно произвести фильтрацию по длине фильма(короткометражки =< 40 минут). Также можно обновить данные юзера.',
    stack: 'React.js / JavaScript / HTML / CSS / MongoDB / Node / Git / Figma',
    linkGithub: 'https://github.com/iva3nik/react-movies-explorer-frontend',
    linkGP: 'https://github.com/iva3nik/react-movies-explorer-frontend',
  },
  {
    name: 'Stat4Market',
    photo: stat4market,
    description: 'Проект представляет из себя одностраничный сайт. Свёрстана адаптивная страница.',
    stack: 'HTML / CSS / Git / Figma',
    linkGithub: 'https://github.com/iva3nik/stat4',
    linkGP: 'https://iva3nik.github.io/stat4/',
  },
  {
    name: 'Mesto',
    photo: mesto,
    description:
      'Проект представляет собой одностраничный сайт. В нём предоставляются карточки, с посещенными местами конкретным пользователем. Можно добавлять и удалять созданные карточки. Редактировать имя пользователя',
    stack: 'React.js / JavaScript / HTML / CSS / Git / Figma',
    linkGithub: 'https://github.com/iva3nik/mesto-react',
    linkGP: 'https://iva3nik.github.io/mesto-react/',
  },
  {
    name: 'Paraweb',
    photo: paraweb,
    description:
      'Проект представляет собой одностраничный сайт. Данные для карточек взяты из https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc . Фильтрация карточек осуществляться по автору и дате при изменении соответсвующих контролов фильтра',
    stack: 'React.js / JavaScript / HTML / CSS / Git / Figma',
    linkGithub: 'https://github.com/iva3nik/paraweb-test',
    linkGP: 'https://iva3nik.github.io/paraweb-test/',
  },
  {
    name: 'Russian travel',
    photo: russian_travel,
    description:
      'Проект представляет из себя одностраничный сайт. В нём предоставляются краткие сведения о некоторых регионах России, которые стоило бы посетить. Страница представляет из себя 7 различных блоков(в некоторых местах используется вложенность блоков). Есть ссылки, по которым можно перейти и узнать дополнительную информацию по соответствующим темам.',
    stack: ' HTML / CSS / Figma / Git',
    linkGithub: 'https://github.com/iva3nik/russian-travel',
    linkGP: 'https://iva3nik.github.io/russian-travel/',
  },
  {
    name: 'Krayt',
    photo: krayt,
    description:
      'Проект представляет из себя одностраничный сайт. На странице блоки с информацией о рабочем месте в Frispes.',
    stack: 'HTML / CSS / Figma / Git',
    linkGithub: 'https://github.com/iva3nik/krayt-test',
    linkGP: 'https://iva3nik.github.io/krayt-test/',
  },
  {
    name: 'How to learn',
    photo: how_to_learn,
    description:
      'Проект представляет из себя одностраничный сайт. В нём предоставляются краткие сведения, факты, принципы и немного другой информации по теме "Обучение". Страница представляет из себя 11 различных блоков. В одном из блоков размещены два видеоролика, которые можно просмотреть. Также есть ссылки, по которым можно перейти и узнать дополнительную информацию по соответствующим вопросам.',
    stack: 'HTML / CSS / Figma / Git',
    linkGithub: 'https://github.com/iva3nik/how-to-learn',
    linkGP: 'https://iva3nik.github.io/how-to-learn/index.html',
  },
  {
    name: 'Ten users',
    photo: ten_users,
    description:
      'Проект представляет собой одностраничный сайт. Данные о пользователях приходят https://jsonplaceholder.typicode.com/users и выводятся списком карточек. Можно отфильтровать список "по городу" и "по компании". Нажав на кнопку "подробнее" попадаем на страницу выброннаго юзера. Можно отредактировать информацию о пользователе.',
    stack: 'React.js / JavaScript / TypeScript / HTML / CSS / Git',
    linkGithub: 'https://github.com/iva3nik/ten-users',
    linkGP: 'https://iva3nik.github.io/ten-users/',
  },
  {
    name: 'Kaspersky',
    photo: kaspersky,
    description:
      'Проект представляет из себя одностраничный сайт. Немного вёрстки, работает дропдаун для выбора предложения.',
    stack: 'JavaScript / HTML / CSS / Figma / Git',
    linkGithub: 'https://github.com/iva3nik/kaspersky-test',
    linkGP: 'https://iva3nik.github.io/kaspersky-test/',
  },
  {
    name: 'Cubes',
    photo: cubes,
    description: 'Разработана игра. Нужно абрать как можно больше очков, нажимая на кубики. Можно задавать время игры.',
    stack: 'JavaScript / HTML / CSS / Git',
    linkGithub: 'https://github.com/iva3nik/game-cubes',
    linkGP: 'https://iva3nik.github.io/game-cubes/index.html',
  },
]
