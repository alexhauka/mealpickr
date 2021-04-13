import IRoute from '../interfaces/route';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: 'Picker',
    exact: true
  },
  {
    path: '/about',
    name: 'About Page',
    component: 'About',
    exact: true
  },
  {
    path: '/contact',
    name: 'Contact Page',
    component: 'Contact',
    exact: true
  }
]

export default routes;