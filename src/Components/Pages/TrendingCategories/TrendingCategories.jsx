import { use } from "react";

const TrendingCategories = ({ TrendingCategoriesPromis }) => {
  const TrendingData = use(TrendingCategoriesPromis);

  const TrendingCategoriesData = TrendingData.map((data) => (
    <div
      key={data.id}
      className="card-body flex items-center justify-center shadow-2xl bgbla"
    >
      <img
        src={data.image}
        alt=""
        className="w-70 h-70 md:w-50 md:h-50 rounded-full"
      />
      <div className="pt-5 text-center space-y-2">
        <h2 className="text-3xl font-bold">{data.name}</h2>
        <p className="text-xl">{data.totalItems}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <div className="mb-10 text-center">
          <p className="text-xl font-semibold uppercase text-PrimaryColor">
            Best Sellers
          </p>
          <h2 className="text-5xl font-bold">Trending Categories</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
          {TrendingCategoriesData}
        </div>
      </div>
    </>
  );
};

export default TrendingCategories;
