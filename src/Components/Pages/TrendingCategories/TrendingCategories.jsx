import { Fragment, use, useState } from 'react';
import ModalTrending from './ModalTrending';

const TrendingCategories = ({ TrendingCategoriesPromis }) => {
  const TrendingData = use(TrendingCategoriesPromis);

  const [selectedData, setSelectedData] = useState(null);

  const TrendingCategoriesData = TrendingData.map(data => (
    <div
      key={data.id}
      onClick={() => {
        setSelectedData(data);
        document.getElementById('my_modal_5').showModal();
      }}
      className="shadowLg rounded-3xl flex flex-col py-8 items-center justify-center shadow-2xl bgbla transition duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="bg-[#DE7E55] customBorder y-10 flex flex-col items-center justify-center">
        <img src={data.image} alt="" className="rounded-full w-[100px]" />
      </div>
      <div className="pt-5 text-center space-y-2">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-lg">{data.totalItems}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Fragment>
        <div className="mb-10 text-center pt-15">
          <p className="text-lg font-semibold uppercase text-PrimaryColor">
            Best Sellers
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trending Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {TrendingCategoriesData}
        </div>
        <ModalTrending selectedData={selectedData} />
      </Fragment>
    </>
  );
};

export default TrendingCategories;
