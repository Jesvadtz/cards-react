import React from "react";
import "./SectionCards.scss";
import Card from "../Card/Card";
import Button from "../Button/Button";
import tshirtWoman from "../../assets/tshirt-woman.jpg";
import tshirtMan from "../../assets/tshirt-man.jpg";
import tshirtKids from "../../assets/tshirt-kids.jpg";

function SectionCards(props) {
  return (
    <section className="sectionCards">
      <h5>Products</h5>
      <div className="products-cards">
        <Card
          src={tshirtWoman}
          title="CANVOUY Womens T Shirt Casual Cotton"
          price="$12.90"
          category="Women's clothing"
        />
        <Card
          src={tshirtMan}
          title="CANVOUY Mens T Shirt Casual Cotton Short"
          price="$15.80"
          category="Men's clothing"
        />
        <Card
          src={tshirtKids}
          title="CANVOUY Kids T Shirt Casual Cotton Short"
          price="$18.80"
          category="Kids clothing"
        />
      </div>
      <div className="button-cards">
        <Button>Ver todos los productos</Button>
      </div>
    </section>
  );
}

export default SectionCards;
