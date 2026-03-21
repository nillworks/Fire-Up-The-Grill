import { Menu, PhoneCall, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../../../assets/images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Menu',
    path: '/menu',
    dropdown: true,
  },
  {
    id: 3,
    name: 'Services',
    path: '/services',
    dropdown: true,
  },
  {
    id: 4,
    name: 'Offers',
    path: '/offers',
  },
];

const Nav = () => {
  // Mobile Menu
  const [open, setOpen] = useState(true);

  // Nav Menu
  const linkItem = navItems.map(item => (
    <li key={item.id}>
      <Link
        onClick={() => setOpen(true)}
        className="hover:text-PrimaryColor duration-200 font-medium"
        to={item.path}
      >
        {item.name}
      </Link>
    </li>
  ));

  // Responsive Menu Toggle
  const menuToggle = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/shop');
  };

  return (
    <nav className="relative flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>

      <ul className="hidden items-center gap-5 md:flex">{linkItem}</ul>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`absolute top-16 left-0 w-full bg-PrimaryColor rounded-4xl text-white shadow-md flex flex-col items-center gap-4 py-5 md:hidden z-50 transition-all duration-300 ${
          !open
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-5 invisible'
        }`}
      >
        {linkItem}

        {/*  Mobile extra items */}
        <div className="flex items-center gap-4 mt-4">
          <Search />

          <div className="relative">
            <div className="absolute -top-3 right-0 bg-white text-black px-1 rounded-full text-xs">
              0
            </div>
            <ShoppingCart
              onClick={() => {
                setOpen(true);
                goToCart();
              }}
              className="cursor-pointer"
            />
          </div>
        </div>

        <button className="flex gap-2 items-center bg-white text-black px-5 py-2 rounded-full font-medium mt-3">
          <PhoneCall />
          Let’s Talk
        </button>
      </ul>

      {/* Mobile Menu  */}
      <div className="md:hidden">
        <span onClick={menuToggle}>
          {open ? (
            <Menu className="cursor-pointer" />
          ) : (
            <X className="cursor-pointer" />
          )}
        </span>
      </div>

      {/* Right Menu items */}
      <div className="hidden items-center gap-4 md:flex">
        {/* Search */}
        <Search />

        {/* Add To Cart */}
        <div className="relative">
          <div
            className="absolute -top-4 right-1 leftPadding bg-PrimaryColor
           text-white  px-1 rounded-full text-sm"
          >
            0
          </div>
          <ShoppingCart className="cursor-pointer" onClick={goToCart} />
        </div>

        {/* Button Lets Talk */}

        <div>
          <button className="flex gap-2 items-center bg-PrimaryColor px-5 py-3 rounded-full text-white font-medium cursor-pointer">
            <PhoneCall />
            Let’s Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
