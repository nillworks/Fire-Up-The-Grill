import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Home';
// import { Menu } from 'lucide-react';
import Menu from '../MenuPages/Menu';

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
    ],
  },
]);

export default routing;
