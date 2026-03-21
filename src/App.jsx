import { Outlet } from 'react-router-dom';
import Nav from './Components/HomePages/Header/Nav';

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
