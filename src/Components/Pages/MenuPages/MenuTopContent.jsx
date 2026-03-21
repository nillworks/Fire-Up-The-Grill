import MenuCard from './MenuCard';

const MenuTopContent = ({ useMenuData }) => {
  return (
    <section className="py-16 space-y-4">
      {/* Title Subtile Menu */}
      <div className="space-y-3">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">
          Our Menu
        </h2>
        <p>
          Discover our handcrafted dishes made with <br /> fresh, locally
          sourced ingredients to satisfy your <br /> every craving.
        </p>
      </div>

      {/* Menu Filter Button */}
      <div className="space-x-4">
        <button className="btn text-white bg-PrimaryColor border-PrimaryColor">
          Main Dish
        </button>
        <button className="btn text-white bg-PrimaryColor border-PrimaryColor">
          Main Dish
        </button>
        <button className="btn text-white bg-PrimaryColor border-PrimaryColor">
          Main Dish
        </button>
      </div>

      {/* All Card Items */}
      <div className="grid items-stretch grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {useMenuData.map(data => (
          <MenuCard key={data.id} menuData={data} />
        ))}
      </div>
    </section>
  );
};

export default MenuTopContent;
