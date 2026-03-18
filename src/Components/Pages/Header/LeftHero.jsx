import { Play } from 'lucide-react';

const LeftHero = () => {
  return (
    <div className="space-y-10 sm:basis-[50%]">
      {/* left Details */}
      <div className="space-y-10">
        <h1 className="text-2xl sm:text-3xl  lg:text-5xl xl:text-6xl font-extrabold">
          Savor the Taste of <br />{' '}
          <span className="text-PrimaryColor">Exquisite Dishes</span>
        </h1>
        <p className="text-lg sm:text-2xl font-medium">
          Where Culinary Expertise and <br /> Heartfelt Craftsmanship Come
          Together
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <button className="oderShadow px-5 py-3 rounded-full bg-PrimaryColor text-white cursor-pointer">
          Order Now
        </button>
        <button className="  px-5 py-3 rounded-full  cursor-pointer hover:bg-PrimaryColor hover:text-white duration-300">
          Watch Video
        </button>
        <button
          className="px-5 py-3 rounded-full
          cursor-pointer bg-white w-[50px] h-[50px]
           flex flex-col items-center justify-center  playShadow"
        >
          <div className='className="flex items-center justify-center"'>
            <Play />
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeftHero;
