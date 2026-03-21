import { Suspense, use } from 'react';
import MenuTopContent from './MenuTopContent';

const MenuDataApi = fetch('ShopCardData.json').then(res => res.json());

const Menu = () => {
  const useMenuData = use(MenuDataApi);
  console.log(useMenuData);
  return (
    <div>
      <Suspense fallback={<p>Loading ....</p>}>
        <MenuTopContent useMenuData={useMenuData.topPicks.items} />
      </Suspense>
    </div>
  );
};

export default Menu;
