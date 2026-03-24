import CardHooks from '../../Hooks/CardHooks';

const CardOrderSummary = () => {
  const { selectedItem } = CardHooks();

  // Sub total Price
  const subtotal = selectedItem.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  let delivery = 0;

  if (selectedItem.length === 0) {
    delivery = 0;
  } else if (subtotal < 100) {
    delivery = 1.3;
  } else {
    delivery = -1.4;
  }

  // Text count
  let tax = 0;
  if (selectedItem.length === 0) {
    tax = 0;
  } else if (subtotal < 100) {
    tax = 1.1;
  } else {
    tax = 2.5;
  }
  const total = subtotal + delivery + tax;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Order Summary
      </h2>

      {/* Price Details */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-gray-800">${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="font-medium text-gray-800">
            {selectedItem.length === 0
              ? '$0'
              : subtotal >= 100
                ? '$1.4'
                : '$1.3'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Taxes</span>
          <span className="font-medium text-gray-800">${tax}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-t-gray-300 my-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700 font-medium">Total</span>
        <span className="text-PrimaryColor font-bold text-lg">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Promo Code */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Promo code..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 "
        />
        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-PrimaryColor hover:text-white duration-300 cursor-pointer">
          Apply
        </button>
      </div>

      {/* Button */}
      <button className="w-full bg-PrimaryColor hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-200 flex items-center justify-center gap-2 cursor-pointer">
        Proceed to Checkout →
      </button>
    </div>
  );
};

export default CardOrderSummary;
