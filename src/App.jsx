import { Fragment, Suspense } from 'react';
import Header from './Components/Pages/Header/Header';
import TrendingCategories from './Components/Pages/TrendingCategories/TrendingCategories';
import AllCards from './Components/Pages/TopPicks/AllCards';

const HeroDataPromise = fetch('HeroData.json').then(res => res.json());

const TrendingCategoriesPromis = fetch('TrendingCategories.json').then(res =>
  res.json(),
);

const cardDataJson = fetch('CardData.json').then(res => res.json());

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
      </main>
    </Fragment>
  );
};

export default App;
