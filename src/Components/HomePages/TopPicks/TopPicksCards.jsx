import { Heart, Star } from 'lucide-react';
import { useState } from 'react';
import CardHooks from '../../Hooks/CardHooks';

const TopPicksCards = ({ cardsDetails }) => {
  // Order Now Button handle
  const { handleOrderNow } = CardHooks();

  const [favoriteItem, setFavorite] = useState(cardsDetails);
  const isFavoriteCards = () => {
    setFavorite(prev => ({ ...prev, isFavorite: !prev.isFavorite }));
  };

  return (
    <div
      className="relative bg-white shadow py-4 px-3 space-y-8 shadowLg
     rounded-[40px] transition duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* favorite Item */}
      <div
        className="absolute right-0 top-0 bg-PrimaryColor max-w-max p-5 rounded-bl-[40px] 
                rounded-tr-[40px] 
                rounded-tl-none 
                rounded-br-none"
      >
        <Heart
          onClick={isFavoriteCards}
          className={`cursor-pointer ${
            favoriteItem.isFavorite ? 'text-white fill-white' : 'text-white'
          }`}
        />
      </div>

      {/* Images Cards */}
      <div className=" mx-auto ">
        <img
          src={cardsDetails?.image}
          alt=""
          className=" mx-auto w-50 h-50 rounded-full"
        />
      </div>

      {/* Card details */}
      <div className="space-y-4 px-4">
        <div className="space-y-2 ">
          <h2 className="text-2xl font-semibold">{cardsDetails?.name}</h2>
          <p className="text-sm">{cardsDetails?.description}</p>
        </div>

        {/* Price and rating */}
        <div className="flex items-center justify-between">
          <h2>
            <span className="text-lg text-[#FF6868]">$</span>{' '}
            <span className="text-lg font-semibold">{cardsDetails?.price}</span>
          </h2>
          <p className="flex items-center gap-3 text-lg font-semibold">
            {cardsDetails?.rating}
            <span>
              <Star className="text-[#FFE605] fill-[#FFE605]" />
            </span>{' '}
          </p>
        </div>

        {/* button Order Now */}
        <div>
          <button
            onClick={() => handleOrderNow(cardsDetails)}
            className="btn bg-PrimaryColor text-white border-none rounded-lg w-full"
          >
            {cardsDetails?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPicksCards;
