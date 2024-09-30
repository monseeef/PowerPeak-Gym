import React from "react";
import { Offers } from "../offers";
import Header from "../layout/Header";
import TrainersProfile from "../TrainersProfile";

const Home = () => {
  return (
    <div>
      <Header />
      {/* ----------------------- Offers ----------------------------------- */}
      <section className="bg-primary">
        <div className=""><Offers /></div>
      </section>
      <TrainersProfile />
    </div>
  );
};

export default Home;
