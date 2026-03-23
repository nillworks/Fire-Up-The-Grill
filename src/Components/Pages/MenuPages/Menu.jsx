import { Suspense } from 'react';
import MenuTopContent from './MenuTopContent';
import CardHooks from '../../Hooks/CardHooks';

const Menu = () => {
  // Card Data Pass
  const { menuData } = CardHooks();
  const useMenuData = menuData;

  return (
    <div>
      <Suspense fallback={<p>Loading ....</p>}>
        <MenuTopContent useMenuData={useMenuData.topPicks.items} />
      </Suspense>
    </div>
  );
};

export default Menu;
