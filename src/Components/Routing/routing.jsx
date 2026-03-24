import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import App from '../../App';
// import Home from '../../Home';
// import Services from './../Pages/ServicesPages/Services';
// import Offers from './../Pages/OffersPages/Offers';
// import Shop from '../Pages/ShopPage/Shop';
// import Menu from '../Pages/MenuPages/Menu';

const App = lazy(() => import('../../App'));
const Home = lazy(() => import('../../Home'));
const Services = lazy(() => import('../Pages/ServicesPages/Services'));
const Offers = lazy(() => import('../Pages/OffersPages/Offers'));
const Shop = lazy(() => import('../Pages/ShopPage/Shop'));
const Menu = lazy(() => import('../Pages/MenuPages/Menu'));

import LoadingSpinner from '../ReuseComponents/LoadingSpinner';

const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/menu',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: '/offers',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routing;
