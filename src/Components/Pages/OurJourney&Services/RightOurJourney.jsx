const RightOurJourney = ({ DataLeftPass }) => {
  return (
    <div className=" shadowLg px-5 py-5 rounded-2xl">
      <div className="">
        {/* item 1 */}
        <div className="text-center text-PrimaryColor space-y-2">
          <img src={DataLeftPass?.image} alt="icons" className="mx-auto" />
          <h2 className="text-lg font-semibold">Catering</h2>
          <p className="text-PrimaryColor">
            Delight your guests <br /> with our flavors and <br /> presentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightOurJourney;
