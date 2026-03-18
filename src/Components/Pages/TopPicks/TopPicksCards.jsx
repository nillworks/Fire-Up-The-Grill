import { Star } from 'lucide-react';

const TopPicksCards = ({ cardsDetails }) => {
  return (
    <div className="bg-white shadow py-4 px-3 space-y-4 shadowLg rounded-[20px]">
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
          <button className="btn bg-PrimaryColor text-white border-none rounded-lg w-full">
            {cardsDetails?.button?.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPicksCards;
