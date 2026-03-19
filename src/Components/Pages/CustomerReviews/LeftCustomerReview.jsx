// import chefImages from '../../../../src/assets/icons/logo.png';
const LeftCustomerReview = ({ leftDataCustomerImage }) => {
  return (
    <div className="sm:basis-[50%]">
      <img src={leftDataCustomerImage.chef.image} alt="" className="w-auto" />
    </div>
  );
};

export default LeftCustomerReview;
