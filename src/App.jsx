import { Outlet } from 'react-router-dom';
import Nav from './Components/HomePages/Header/Nav';
import Footer from './Components/HomePages/Footer/Footer';

const App = () => {
  return (
    <div className="containers paddingXCustom">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
