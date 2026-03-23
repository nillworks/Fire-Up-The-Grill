import { use, useState } from 'react';
import CardItemContext from './CardItemContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// All CardData Fetch
const ShopCardData = fetch('ShopCardData.json').then(res => res.json());

const CardContextDataProvider = ({ children }) => {
  // UseShopCardData
  const useShopCardData = use(ShopCardData);

  // All Data Pass||
  const [menuData, setMenuData] = useState(useShopCardData);

  // Shop Page Data Render Handle Order Now Button
  const [selectedItem, setSelectedItem] = useState([]);

  // Oder Button Click Show Toast Success
  const MoneyAdd = item => toast.success(`${item.name} added to cart!`);

  const handleOrderNow = item => {
    setSelectedItem(prev => {
      // check already exist
      const exists = prev.find(i => i.id === item.id);

      if (exists) {
        return prev;
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
    MoneyAdd(item);
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
