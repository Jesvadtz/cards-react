import React from "react";
import "./SectionCategory.scss";
import Categories from "../Categories/Categories";

function SectionCategory(props) {
  const { categories } = props;
  return (
    <section className="sectionCategory">
      <h5>Categories</h5>
      <div className="all-categories">
        {categories.map((category) => {
          return <Categories children={category} key={category} />;
        })}
      </div>
    </section>
  );
}

export default SectionCategory;
