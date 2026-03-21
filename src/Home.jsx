import { Fragment, Suspense } from 'react';
import Header from './Components/HomePages/Header/Header';
import TrendingCategories from './Components/HomePages/TrendingCategories/TrendingCategories';
import AllCards from './Components/HomePages/TopPicks/AllCards';
import CustomerReviews from './Components/HomePages/CustomerReviews/CustomerReviews';
import OurJourneyServices from './Components/HomePages/OurJourney&Services/OurJourneyServices';
import Footer from './Components/HomePages/Footer/Footer';

// all data fetch same থাকবে
const HeroDataPromise = fetch('HeroData.json').then(res => res.json());
const TrendingCategoriesPromis = fetch('TrendingCategories.json').then(res =>
  res.json(),
);
const cardDataJson = fetch('CardData.json').then(res => res.json());
const customerReviewData = fetch('CustomerReview.json').then(res => res.json());
const OurJourneyServicesData = fetch('OurJourneyServicesData.json').then(res =>
  res.json(),
);

const Home = () => {
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

        <Suspense fallback={<p>Loading ....</p>}>
          <AllCards cardDataJson={cardDataJson} />
        </Suspense>

        <Suspense fallback={<p>Loading ....</p>}>
          <CustomerReviews customerReviewData={customerReviewData} />
        </Suspense>

        <Suspense fallback={<p>loading ...</p>}>
          <OurJourneyServices OurJourneyServicesData={OurJourneyServicesData} />
        </Suspense>

        <Suspense fallback={<p>loading ....</p>}>
          <Footer />
        </Suspense>
      </main>
    </Fragment>
  );
};

export default Home;
