import Works from '../pages/Works/Works'

export interface TRouteExample {
  path: string
  element: React.FC
}

export const appRoutes: Array<TRouteExample> = [{ path: '/works', element: Works }]
