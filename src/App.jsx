import { Fragment, Suspense } from 'react';
import Header from './Components/Pages/Header/Header';
import TrendingCategories from './Components/Pages/TrendingCategories/TrendingCategories';
import AllCards from './Components/Pages/TopPicks/AllCards';
import CustomerReviews from './Components/Pages/CustomerReviews/CustomerReviews';
import OurJourneyServices from './Components/Pages/OurJourney&Services/OurJourneyServices';

// Hero Data
const HeroDataPromise = fetch('HeroData.json').then(res => res.json());

// Trending Categories Data
const TrendingCategoriesPromis = fetch('TrendingCategories.json').then(res =>
  res.json(),
);

// Card Data Top Pick
const cardDataJson = fetch('CardData.json').then(res => res.json());

// Customer Review Data
const customerReviewData = fetch('CustomerReview.json').then(res => res.json());

// Our Journey Services Data
const OurJourneyServicesData = fetch('OurJourneyServicesData.json').then(res =>
  res.json(),
);

const App = () => {
  return (
    <Fragment>
      <header>
        <Suspense fallback={<p>Loading ....</p>}>
          <Header HeroDataPromise={HeroDataPromise} />
        </Suspense>
      </header>

      <main className="containers paddingXCustom">
        <Suspense fallback={<h2>Loading....</h2>}>
          <TrendingCategories
            TrendingCategoriesPromis={TrendingCategoriesPromis}
          />
        </Suspense>

        {/* Top Pricks Card Data Pass */}
        <Suspense fallback={<p>Loading ....</p>}>
          <AllCards cardDataJson={cardDataJson} />
        </Suspense>

        {/* Customer Reviews Section Data Pass */}
        <Suspense fallback={<p>Loading ....</p>}>
          <CustomerReviews customerReviewData={customerReviewData} />
        </Suspense>

        {/* Our Journey Services data Pass */}
        <Suspense fallback={<p>loading ...</p>}>
          <OurJourneyServices OurJourneyServicesData={OurJourneyServicesData} />
        </Suspense>
      </main>
    </Fragment>
  );
};

export default App;
