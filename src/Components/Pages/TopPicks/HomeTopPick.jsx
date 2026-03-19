import React, { use } from 'react';
import TopPicksCards from './TopPicksCards';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomeTopPick = ({ dataTopPickCard }) => {
  const topPickAllCardData = use(dataTopPickCard);
  // console.log(topPickAllCardData);

  return (
    <div className="paddingXl">
      {/* Top Picks Cards Title and subtitle */}
      <div className="space-y-4">
        <h6 className="uppercase text-md text-[#FF6868]">
          {topPickAllCardData?.section?.subtitle}
        </h6>

        {/* title and Slide Button 2 */}
        <div className="space-y-5 flex items-center justify-between pb-10">
          {/* title */}
          <h2 className="text-lg font-bold sm:text-3xl lg:text-4xl">
            {topPickAllCardData?.section?.title}
          </h2>

          {/* Slide Button */}
          <div className="flex items-center gap-5">
            <div className="bg-[#EFEFEF] text-[#6F6E6E] p-3 rounded-full cursor-pointer duration-300 hover:bg-PrimaryColor hover:text-white">
              <ChevronLeft />
            </div>
            <div className="bg-PrimaryColor text-white p-3 rounded-full cursor-pointer">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
      {/* Top Picks from Our Menu Cards */}
      <div className="grid items-stretch grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {topPickAllCardData.items.map(item => (
          <TopPicksCards key={item.id} cardsDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeTopPick;
