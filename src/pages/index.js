import React from "react";
import "./index.scss";
import Greet from "../components/Greet/Greet";
import SectionCards from "../components/SectionCards/SectionCards";
import SectionCategory from "../components/SectionCategory/SectionCategory";
import NavbarCustom from "../components/Navbar/Navbar";

function Home() {
  const [products, SetProducts] = React.useState([]);
  const [categories, SetCategories] = React.useState([]);

  React.useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products").then(
        (response) => response.json()
      );
      SetProducts(response);
    }

    getProducts();
  }, []);

  React.useEffect(() => {
    async function getCategories() {
      const respCategories = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((respCategories) => respCategories.json());
      console.log(respCategories);
      SetCategories(respCategories);
    }

    getCategories();
  }, []);

  return (
    <>
      <header>
        <NavbarCustom />
      </header>
      <main>
        <Greet />
        <SectionCategory categories={categories} />
        <SectionCards products={products} />
      </main>
    </>
  );
}

export default Home;
