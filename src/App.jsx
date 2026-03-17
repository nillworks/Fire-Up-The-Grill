import { Fragment } from 'react';
import Header from './Components/Pages/Header/Header';
import TopPicks from './Components/Pages/TopPicks/TopPicks';
import TrendingCategories from './Components/Pages/TrendingCategories/TrendingCategories';

const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main className="containers paddingXCustom">
        <TrendingCategories />
        <TopPicks />
      </main>
    </Fragment>
  );
};

export default App;
