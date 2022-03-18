import React from "react";
import "./index.scss";
// import Greet from "../components/Greet/Greet";
// import SectionCards from "../components/SectionCards/SectionCards";
// import SectionCategory from "../components/SectionCategory/SectionCategory";
import NavbarCustom from "../components/Navbar/Navbar";
import FormCustom from "../components/Form/FormTwo";

function Home() {
  // const [products, setProducts] = React.useState([]);
  // const [categories, setCategories] = React.useState([]);

  // React.useEffect(() => {
  //   async function getProducts() {
  //     const response = await fetch("https://fakestoreapi.com/products").then(
  //       (response) => response.json()
  //     );
  //     setProducts(response);
  //   }

  //   getProducts();
  // }, []);

  // React.useEffect(() => {
  //   async function getCategories() {
  //     const respCategories = await fetch(
  //       "https://fakestoreapi.com/products/categories"
  //     ).then((respCategories) => respCategories.json());
  //     setCategories(respCategories);
  //   }

  //   getCategories();
  // }, []);

  return (
    <>
      <header>
        <NavbarCustom />
      </header>
      <main>
        {/* <Greet />
        <SectionCategory categories={categories} />
        <SectionCards products={products} /> */}
        <FormCustom />
      </main>
    </>
  );
}

export default Home;
