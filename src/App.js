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
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getDate = async () => {
      const {
        data: { articles }
      } = await await axios.get(
        "https://conduit.productionready.io/api/articles"
      );
      setDate(articles);
    };
    getDate();
  }, []);
  console.log("date:", date);
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
        render={() => <ReservationGuide state={date} />}
      />
      <Route path="/reservation/view/:id" exact component={View} />
      <Route path="/reservation/form" exact component={ReservationForm} />
      <Route path="/case" exact component={ServiceCase} />
      <Footer />
    </>
  );
}

export default App;
