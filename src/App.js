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
  useEffect(() => {
    const getData = async pageNumber => {
      const {
        data: { articles, articlesCount: Count }
      } = await axios.get(
        `https://conduit.productionready.io/api/articles?limit=10&offset=${pageNumber}`
      );
      setData(articles);
      setArticlesCount(Count);
      setCurrentPage(pageNumber);
    };
    getData(currentPage);
  }, [currentPage]);

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
            articles={data}
            articlesCount={articlesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
