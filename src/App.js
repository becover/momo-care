import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main";
import Introduce from "./routes/Introduce";
import PriceGuide from "./routes/PriceGuide";
import ContactPrice from "./routes/ContactPrice";
import ReservationGuide from "./routes/ReservationGuide";
import ReservationForm from "./routes/ReservationForm";
import View from "./components/revervation/View";
import ServiceCase from "./routes/ServiceCase";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [articlesCount, setArticlesCount] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const onSearchAuthor = async (author, pageNumber) => {
      const {
        data: { articles, articlesCount }
      } = await axios.get(
        `https://conduit.productionready.io/api/articles?limit=10&offset=${pageNumber *
          10}${author ? `&author=${author}` : ""}`
      );
      if (!author) setState(articles);
      if (author) setSearchState(articles);
      setArticlesCount(articlesCount);
      const [
        {
          author: { username }
        }
      ] = articles;
      if (author) setAuthor(username);
    };
    onSearchAuthor(author, currentPage);
  }, [author, currentPage]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/introduce" exact component={Introduce} />
        <Route path="/guide" exact component={PriceGuide} />
        <Route path="/contact" exact component={ContactPrice} />
        <Route
          path="/reservation"
          exact
          render={({ match, location, history }) => (
            <ReservationGuide
              state={state}
              articlesCount={articlesCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              author={author}
              setAuthor={setAuthor}
              setState={setState}
              setArticlesCount={setArticlesCount}
              match={match}
            />
          )}
        />
        <Route
          path="/reservation/searchUser/:author"
          exact
          render={({ match, location, history }) => (
            <ReservationGuide
              state={searchState}
              setState={location.state}
              articlesCount={articlesCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setAuthor={setAuthor}
              author={author}
              setArticlesCount={setArticlesCount}
              match={match}
            />
          )}
        />
        <Route path="/reservation/view/:id" exact component={View} />
        <Route path="/reservation/form" exact component={ReservationForm} />
        <Route path="/case" exact component={ServiceCase} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
