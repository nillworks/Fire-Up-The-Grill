import { Star } from 'lucide-react';

const RightCustomerReview = ({ rightDataCustomerData }) => {
  return (
    <div className="sm:basis-[50%]">
      {/* Title and Subtitle */}
      <div className="space-y-4">
        <h6 className="text-[#FF6868] font-medium text-sm uppercase">
          {rightDataCustomerData?.section?.subtitle}
        </h6>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          {rightDataCustomerData?.section?.title}
        </h2>
        <p className="font-medium">
          {rightDataCustomerData?.section?.description}
        </p>

        {/* Review section */}
        <div className="flex items-center gap-4">
          <img
            src={rightDataCustomerData?.reviews?.users[0]?.avatar}
            alt="img"
            className="w-24"
          />

          {/* review Rating */}
          <div>
            <h2 className="font-semibold text-lg">
              {' '}
              {rightDataCustomerData?.reviews?.label}
            </h2>
            <h4 className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <Star className="text-[#FFE605] fill-[#FFE605]" />
                <span className="font-semibold text-[#454545]">4.9</span>
              </span>

              {/* review */}
              <span className="text-[#807E7E] font-medium">
                (<span>18.6k Reviews</span>)
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCustomerReview;
