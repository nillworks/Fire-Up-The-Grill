import LeftHero from './LeftHero';
import RightHero from './RightHero';

const HeroHeader = ({ heroData }) => {
  return (
    <div
      className="flex gap-5 flex-col items-center
     justify-around  py-30 px-3 md:flex-row relative"
    >
      <LeftHero HeroLeftData={heroData} />
      <RightHero heroRightData={heroData} />
    </div>
  );
};

export default HeroHeader;
