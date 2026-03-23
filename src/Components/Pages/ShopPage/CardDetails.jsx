import { Trash2 } from 'lucide-react';

const CardDetails = ({ ShopItemData }) => {
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
            <p className="text-sm font-medium text-gray-700 mt-1">
              {ShopItemData?.price}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-1 bg-gray-100 rounded-lg text-sm font-medium">
            1
          </div>

          <button className="text-gray-400 hover:text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
