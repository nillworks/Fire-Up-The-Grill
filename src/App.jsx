import { Fragment, Suspense } from "react";
import Header from "./Components/Pages/Header/Header";
import TopPicks from "./Components/Pages/TopPicks/TopPicks";
import TrendingCategories from "./Components/Pages/TrendingCategories/TrendingCategories";

const TrendingCategoriesPromis = fetch("TrendingCategories.json").then((res) =>
  res.json(),
);

const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main className="containers paddingXCustom">
        <Suspense fallback={<h2>Loading....</h2>}>
          <TrendingCategories
            TrendingCategoriesPromis={TrendingCategoriesPromis}
          />
        </Suspense>
        <TopPicks />
      </main>
    </Fragment>
  );
};

export default App;
