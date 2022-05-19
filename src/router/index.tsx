import Works from '../pages/Works/Works'
import NotFound from '../pages/NotFound/NotFound'

export interface TRouteExample {
  path: string
  element: React.FC
}

export const appRoutes: Array<TRouteExample> = [
  { path: '/works', element: Works },
  { path: '*', element: NotFound },
]
