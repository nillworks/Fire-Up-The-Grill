import HomeTopPick from './HomeTopPick';

const AllCards = ({ cardDataJson }) => {
  return (
    <div>
      <HomeTopPick dataTopPickCard={cardDataJson} />
    </div>
  );
};

export default AllCards;
