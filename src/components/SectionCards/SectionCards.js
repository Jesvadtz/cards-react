import React from "react";
import "./SectionCards.scss";
import Card from "../Card/Card";

function SectionCards(props) {
  const { products } = props;
  return (
    <section className="sectionCards">
      <h5>Products</h5>
      <div className="products-cards">
        {products.map((product) => {
          const { id, title, description, image, price, category } = product;
          return (
            <Card
              key={id}
              title={title}
              description={description}
              image={image}
              price={price}
              category={category}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SectionCards;
