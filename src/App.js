import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main";
import Introduce from "./routes/Introduce";
import PriceGuide from "./routes/PriceGuide";
import ContactPrice from "./routes/ContactPrice";
import ReservationGuide from "./routes/ReservationGuide";
import ServiceCase from "./routes/ServiceCase";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/introduce" exact component={Introduce} />
      <Route path="/guide" exact component={PriceGuide} />
      <Route path="/contact" exact component={ContactPrice} />
      <Route path="/reservation" exact component={ReservationGuide} />
      <Route path="/case" exact component={ServiceCase} />
      <Footer />
    </>
  );
}

export default App;
