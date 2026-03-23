import { Trash2 } from 'lucide-react';
import CardHooks from './../../Hooks/CardHooks';

const CardDetails = ({ ShopItemData }) => {
  // context Api Use
  const { setSelectedItem } = CardHooks();

  // Increment Product Quantity
  const incrementQty = id => {
    setSelectedItem(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // decrement Product Quantity
  const decrementQty = id => {
    setSelectedItem(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  // Deletes Function
  const handleDelete = id => {
    setSelectedItem(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* Item 1 */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm ">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src={ShopItemData?.image}
            alt="food"
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">
              {ShopItemData?.name}
            </h3>
            <p className="text-sm text-gray-500">{ShopItemData?.description}</p>
            <p className="text-sm font-medium text-orange-400 mt-1">
              ${ShopItemData?.price}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {/* Quantity */}

          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-max">
            <button
              onClick={() => decrementQty(ShopItemData.id)}
              className="w-8 h-8 flex items-center justify-center cursor-pointer bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              -
            </button>

            <button
              onClick={() => incrementQty(ShopItemData.id)}
              className="w-8 h-8 flex items-center justify-center bg-PrimaryColor text-white rounded-full shadow
            cursor-pointer hover:opacity-80 transition"
            >
              +
            </button>
          </div>

          {/* Total Quantity */}
          <div className="flex items-center gap-4">
            <div className="px-4 py-1 bg-gray-100 rounded-lg text-sm font-medium">
              {ShopItemData.qty}x
            </div>

            <button
              onClick={() => handleDelete(ShopItemData.id)}
              className="text-gray-400 cursor-pointer duration-200 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
