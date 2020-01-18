import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
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
  const [data, setData] = useState([]);
  const [articlesCount, setArticlesCount] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const getData = async pageNumber => {
      const {
        data: { articles, articlesCount: Count }
      } = await axios.get(
        `https://conduit.productionready.io/api/articles?limit=10&offset=${pageNumber *
          10}`
      );
      setData(articles);
      setArticlesCount(Count);
      setCurrentPage(pageNumber);
    };
    getData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const onSearchAuthor = async author => {
      const {
        data: { articles, articlesCount }
      } = await axios.get(
        `https://conduit.productionready.io/api/articles?&author=${author}`
      );
      setData(articles);
      setArticlesCount(articlesCount);
      const [
        {
          author: { username }
        }
      ] = articles;
      setAuthor(username);
    };
    if (author.length !== 0) onSearchAuthor(author);
  }, [author]);

  return (
    <>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/introduce" exact component={Introduce} />
      <Route path="/guide" exact component={PriceGuide} />
      <Route path="/contact" exact component={ContactPrice} />
      <Route
        path="/reservation"
        exact
        render={() => (
          <ReservationGuide
            data={data}
            articlesCount={articlesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            author={author}
            setAuthor={setAuthor}
            setData={setData}
            setArticlesCount={setArticlesCount}
          />
        )}
      />
      <Route path="/reservation/view/:id" exact component={View} />
      <Route path="/reservation/form" exact component={ReservationForm} />
      <Route path="/case" exact component={ServiceCase} />
      <Footer />
    </>
  );
}

export default App;
