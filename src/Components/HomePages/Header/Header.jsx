import { use } from 'react';
import HeroHeader from './HeroHeader';

const Header = ({ HeroDataPromise }) => {
  const heroData = use(HeroDataPromise);
  // console.log(heroData);

  return (
    <header className="containers paddingXCustom">
      <HeroHeader heroData={heroData} />
    </header>
  );
};

export default Header;
