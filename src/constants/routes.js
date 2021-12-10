import Home from '../pages/Home'
import Youtube from '../pages/Youtube'

export const routes = [
  { path: '/', exact: true, Component: Home },
  { path: '/youtube', Component: Youtube },
]
