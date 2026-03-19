import { use } from 'react';
import LeftOurJourney from './LeftOurJourney';
import RightOurJourney from './RightOurJourney';

const OurJourneyServices = ({ OurJourneyServicesData }) => {
  const useData = use(OurJourneyServicesData);
  console.log(useData);
  return (
    <section className="flex gap-10 flex-col items-center justify-around paddingCustomerReview sm:flex-row">
      <LeftOurJourney />
      <div className="grid gap-4 grid-cols-2">
        {useData?.services.map(item => (
          <RightOurJourney key={item.id} DataLeftPass={item} />
        ))}
      </div>
    </section>
  );
};

export default OurJourneyServices;
