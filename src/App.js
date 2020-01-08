import React from "react";
import { Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/";
import Main from "./routes/Main";
import Introduce from "./routes/Introduce";
import PriceGuide from "./routes/PriceGuide";
import ContactPrice from "./routes/ContactPrice";
import ReservationGuide from "./routes/ReservationGuide";
import ServiceCase from "./routes/ServiceCase";

function App() {
  return (
    <>
      <h1 className="logo">
        <Link to="/">MOMO CARE</Link>
      </h1>
      <Navigation />
      <Route path="/" exact component={Main} />
      <Route path="/introduce" exact component={Introduce} />
      <Route path="/guide" exact component={PriceGuide} />
      <Route path="/contact" exact component={ContactPrice} />
      <Route path="/reservation" exact component={ReservationGuide} />
      <Route path="/case" exact component={ServiceCase} />
    </>
  );
}

export default App;
