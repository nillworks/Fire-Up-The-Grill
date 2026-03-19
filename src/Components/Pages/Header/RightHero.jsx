import { Star } from 'lucide-react';
import heroImages from '../../../assets/images/heroImages.png';
import fieryNoodles from '../../../assets/images/fieryNoodles.png';
import fieryImages from '../../../assets/images/fieryImages.png';
import vegetarianSaladImages from '../../../assets/images/Mask group-3.png';

const RightHero = ({ heroRightData }) => {
  return (
    <div className="sm:basis-[50%]">
      {/* images Hero */}
      <div
        id="heroBackgroundImages"
        className=" relative flex flex-col items-center justify-center lg:CustomWidth"
      >
        <img src={heroImages} alt="images" className="w-150" />
        <img
          src={fieryImages}
          alt="img"
          className="absolute -top-10 -left-10 sm:-top-15 sm:-left-30 lg:-top-15 lg:-left-20"
        />
      </div>

      <div className="w-auto absolute bottom-16 right-15 sm:bottom-15 sm:right-15 flex flex-col gap-4 items-center sm:flex-row lg:bottom-25 lg:right-15">
        {/* item 1 */}
        <div className=" items-center gap-4 bg-white shadow px-4 py-2 rounded-lg hidden lg:flex">
          <img src={fieryNoodles} alt="icons" />
          <div>
            <h2 className="text-lg font-semibold">
              {heroRightData?.hero?.featuredDishes[0].name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5  ${
                    index < heroRightData?.hero?.featuredDishes[0].rating
                      ? 'text-[#FFE605] fill-[#FFE605]'
                      : 'text-[#FFE605]'
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <h2 className="text-[#FF7979] text-lg font-semibold">
              ${' '}
              <span className="text-[#515151]">
                {heroRightData?.hero?.featuredDishes[0].price}
              </span>
            </h2>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex items-center gap-4 bg-white shadow px-4 py-2 rounded-lg ">
          <img src={vegetarianSaladImages} alt="icons" />
          <div>
            <h2 className="text-lg font-semibold">
              {heroRightData?.hero?.featuredDishes[1].name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5  ${
                    index < heroRightData?.hero?.featuredDishes[1].rating
                      ? 'text-[#FFE605] fill-[#FFE605]'
                      : 'text-[#FFE605]'
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <h2 className="text-[#FF7979] text-lg font-semibold">
              ${' '}
              <span className="text-[#515151]">
                {heroRightData?.hero?.featuredDishes[1].price}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHero;
