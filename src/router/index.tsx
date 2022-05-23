import Works from '../pages/Works/Works'
import NotFound from '../pages/NotFound/NotFound'
import AboutMe from '../pages/AboutMe/AboutMe'
import MyExperience from '../pages/MyExprerience/MyExperience'
import Contacts from '../pages/Contacts/Contacts'
import TestBlock from '../pages/TestBlock/TestBlock'

export interface TRouteExample {
  path: string
  element: React.FC
}

export interface TNavLinks {
  to: string
  title: string
}

export const appRoutes: Array<TRouteExample> = [
  { path: '/', element: AboutMe },
  { path: '/works', element: Works },
  { path: '/experience', element: MyExperience },
  { path: '/contacts', element: Contacts },
  { path: '/tests', element: TestBlock },
  { path: '*', element: NotFound },
]

export const navLinks: Array<TNavLinks> = [
  { to: '/', title: 'Кто я?' },
  { to: '/works', title: 'Примеры работ' },
  { to: '/experience', title: 'Опыт работы' },
  { to: '/contacts', title: 'Контакты' },
  { to: '/places', title: 'NotFound' },
  { to: '/tests', title: 'Test block' },
]
