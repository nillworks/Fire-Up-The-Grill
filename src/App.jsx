import { Outlet } from 'react-router-dom';
import Nav from './Components/HomePages/Header/Nav';
import Footer from './Components/HomePages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="containers paddingXCustom">
      <Nav />
      <ToastContainer position="top-center" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
