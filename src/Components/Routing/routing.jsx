import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Home';
import Menu from '../Pages/MenuPages/Menu';
import Services from './../Pages/ServicesPages/Services';
import Offers from './../Pages/OffersPages/Offers';
import Shop from '../Pages/ShopPage/Shop';

const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

export default routing;
