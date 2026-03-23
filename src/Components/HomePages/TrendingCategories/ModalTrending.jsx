import { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import CardHooks from '../../Hooks/CardHooks';

const ModalTrending = ({ selectedData }) => {
  // Order Now Button Handle
  const { handleOrderNow } = CardHooks();

  const [favoriteItem, setFavorite] = useState(false);
  const isFavoriteCards = () => {
    setFavorite(!favoriteItem);
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div
            className="relative bg-white shadow py-4 px-3 space-y-8 shadowLg
     rounded-[40px] transition duration-300 hover:-translate-y-1 cursor-pointer"
          >
            {/* favorite Item */}
            <div
              className="absolute right-0 top-0 bg-ThirdColor max-w-max p-5 rounded-bl-[40px] 
                rounded-tr-[40px] 
                rounded-tl-none 
                rounded-br-none"
            >
              <Heart
                onClick={isFavoriteCards}
                className={`cursor-pointer ${
                  favoriteItem ? 'text-white fill-white' : 'text-white'
                }`}
              />
            </div>

            {/* Images Cards */}
            <div className=" mx-auto ">
              <img
                src={selectedData?.image}
                alt=""
                className=" mx-auto w-50 h-50 rounded-full bg-[#DE7E55] p-5"
              />
            </div>

            {/* Card details */}
            <div className="space-y-4 px-4">
              <div className="space-y-2 ">
                <h2 className="text-2xl font-semibold">{selectedData?.name}</h2>
                <p className="text-sm">{selectedData?.totalItems}</p>
              </div>

              {/* Price and rating */}
              <div className="flex items-center justify-between">
                <h2>
                  <span className="text-lg text-[#FF6868]">$</span>{' '}
                  <span className="text-lg font-semibold">
                    {selectedData?.price}
                  </span>
                </h2>
                <p className="flex items-center gap-3 text-lg font-semibold">
                  {selectedData?.rating}
                  <span>
                    <Star className="text-[#FFE605] fill-[#FFE605]" />
                  </span>{' '}
                </p>
              </div>

              {/* button Order Now */}
              <div>
                <button
                  onClick={() => handleOrderNow(selectedData)}
                  className="btn bg-ThirdColor text-white border-none rounded-lg w-full outline-none"
                >
                  {selectedData?.buttonText}
                </button>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-ThirdColor text-white outline-nones">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalTrending;
