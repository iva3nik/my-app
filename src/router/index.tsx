import Works from '../pages/Works/Works'
import NotFound from '../pages/NotFound/NotFound'
import AboutMe from '../pages/AboutMe/AboutMe'

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
  { path: '*', element: NotFound },
]

export const navLinks: Array<TNavLinks> = [
  { to: '/', title: 'Кто я?' },
  { to: '/works', title: 'Примеры работ' },
  { to: '/experience', title: 'Опыт работы' },
  { to: '/contacts', title: 'Контакты' },
  { to: '/places', title: 'NotFound' },
]
