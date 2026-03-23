import { use, useState } from 'react';
import CardItemContext from './CardItemContext';

// All CardData Fetch
const ShopCardData = fetch('ShopCardData.json').then(res => res.json());

const CardContextDataProvider = ({ children }) => {
  // UseShopCardData
  const useShopCardData = use(ShopCardData);

  // All Data Pass||
  const [menuData, setMenuData] = useState(useShopCardData);

  // Shop Page Data Render Handle Order Now Button
  const [selectedItem, setSelectedItem] = useState([]);

  const handleOrderNow = item => {
    setSelectedItem(prev => {
      // check already exist
      const exists = prev.find(i => i.id === item.id);

      if (exists) {
        return prev;
      } else {
        return [...prev, item];
      }
    });
  };

  console.log(selectedItem);

  return (
    <CardItemContext.Provider
      value={{
        menuData,
        setMenuData,
        selectedItem,
        setSelectedItem,
        handleOrderNow,
      }}
    >
      {children}
    </CardItemContext.Provider>
  );
};

export default CardContextDataProvider;
