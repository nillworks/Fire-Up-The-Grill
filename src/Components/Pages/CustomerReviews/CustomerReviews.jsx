import { use } from 'react';
import LeftCustomerReview from './LeftCustomerReview';
import RightCustomerReview from './RightCustomerReview';

const CustomerReviews = ({ customerReviewData }) => {
  const useDataCustomerReview = use(customerReviewData);
  // console.log(useDataCustomerReview);

  return (
    <section className="flex flex-col items-center justify-between sm:flex-row md:py-20 ">
      <LeftCustomerReview leftDataCustomerImage={useDataCustomerReview} />
      <RightCustomerReview rightDataCustomerData={useDataCustomerReview} />
    </section>
  );
};

export default CustomerReviews;
