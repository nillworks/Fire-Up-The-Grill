import { use } from 'react';
import HeroHeader from './HeroHeader';
import Nav from './Nav';

const Header = ({ HeroDataPromise }) => {
  const heroData = use(HeroDataPromise);
  console.log(heroData);

  return (
    <header className="containers paddingXCustom">
      <Nav />
      <HeroHeader heroData={heroData} />
    </header>
  );
};

export default Header;
