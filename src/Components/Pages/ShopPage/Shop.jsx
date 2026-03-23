// import { useLocation } from 'react-router';
import CardOrderSummary from './CardOrderSummary';
import CardDetails from './CardDetails';
import CardHooks from '../../Hooks/CardHooks';

const Shop = () => {
  // Order Now Item Render Shop Page
  const { selectedItem } = CardHooks();
  const cartItems = selectedItem;

  return (
    <div className="py-20 space-y-4">
      {/* Title Subtile Menu */}
      <div className="space-y-3">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">
          Your Cart
        </h2>
        <p>Review your selected items and proceed to checkout.</p>
      </div>

      <div className="flex flex-col justify-between gap-5 sm:flex-row">
        {/* Card Details Render Data */}
        <div className=" sm:basis-[55%] space-y-5">
          {cartItems.map(item => (
            <CardDetails key={item.id} ShopItemData={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className=" sm:basis-[45%]">
          <CardOrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Shop;
