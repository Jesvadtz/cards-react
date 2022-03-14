import React from "react";
import "./index.scss";
import Greet from "../components/Greet/Greet";
import Navbar from "../components/Navbar/Navbar";
import SectionCards from "../components/SectionCards/SectionCards";
import SectionCategory from "../components/SectionCategory/SectionCategory";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Greet />
        <SectionCategory />
        <SectionCards />
      </main>
    </>
  );
}

export default Home;
