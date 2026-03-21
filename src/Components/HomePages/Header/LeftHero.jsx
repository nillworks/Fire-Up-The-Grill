import { Play } from 'lucide-react';

const LeftHero = ({ HeroLeftData }) => {
  return (
    <div className="space-y-5 sm:basis-[50%]">
      {/* left Details */}
      <div className="space-y-10">
        <h1 className="text-4xl sm:text-4xl  lg:text-5xl xl:text-6xl font-extrabold">
          {HeroLeftData?.hero?.title[0]} <br />{' '}
          <span className="text-PrimaryColor">
            {HeroLeftData?.hero?.title[1]}
          </span>
        </h1>
        <p className="text-lg sm:text-2xl font-medium">
          {/* Where Culinary Expertise and <br /> Heartfelt Craftsmanship Come
          Together */}
          {HeroLeftData?.hero?.subtitle}
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <button className="oderShadow px-5 py-3 rounded-full bg-PrimaryColor text-white cursor-pointer">
          {HeroLeftData?.hero?.buttonText}
        </button>
        <button className="px-1 py-3 rounded-full  cursor-pointer sm:px-5 hover:bg-PrimaryColor hover:text-white duration-300">
          {HeroLeftData?.hero?.watchVideoText}
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
