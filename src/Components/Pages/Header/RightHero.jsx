import { Star } from 'lucide-react';
import heroImages from '../../../assets/images/heroImages.png';
import fieryNoodles from '../../../assets/images/fieryNoodles.png';
import fieryImages from '../../../assets/images/fieryImages.png';

const RightHero = () => {
  const rating = 3;
  return (
    <div className="">
      {/* images Hero */}
      <div
        id="heroBackgroundImages"
        className=" relative flex flex-col items-center justify-center lg:CustomWidth"
      >
        <img src={heroImages} alt="images" className="w-150" />
        <img
          src={fieryImages}
          alt="img"
          className="absolute -top-10 -left-10 sm:-top-10 sm:-left-40 lg:-top-2"
        />
      </div>

      <div className="w-auto absolute -bottom-14 right-15 sm:bottom-15 sm:right-0 flex flex-col gap-4 items-center sm:flex-row lg:bottom-25 lg:right-15">
        {/* item 1 */}
        <div className="flex items-center gap-4 bg-white shadow px-4 py-2 rounded-lg ">
          <img src={fieryNoodles} alt="icons" />
          <div>
            <h2 className="text-lg font-semibold">Fiery Noodles</h2>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5  ${
                    index < rating
                      ? 'text-[#FFE605] fill-[#FFE605]'
                      : 'text-[#FFE605]'
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <h2 className="text-[#FF7979] text-lg font-semibold">
              $ <span className="text-[#515151]">20</span>
            </h2>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex items-center gap-4 bg-white shadow px-4 py-2 rounded-lg ">
          <img src={fieryNoodles} alt="icons" />
          <div>
            <h2 className="text-lg font-semibold">Fiery Noodles</h2>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5  ${
                    index < rating
                      ? 'text-[#FFE605] fill-[#FFE605]'
                      : 'text-[#FFE605]'
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <h2 className="text-[#FF7979] text-lg font-semibold">
              $ <span className="text-[#515151]">20</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHero;
