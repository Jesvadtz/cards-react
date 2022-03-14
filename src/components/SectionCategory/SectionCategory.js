import React from "react";
import "./SectionCategory.scss";
import Categories from "../Categories/Categories";

function SectionCategory() {
  return (
    <section className="sectionCategory">
      <h5>Categories</h5>
      <div className="all-categories">
        <Categories children="Men's clothing" />
        <Categories children="Jewelery" />
        <Categories children="Electronics" />
        <Categories children="Women's clothing" />
      </div>
    </section>
  );
}

export default SectionCategory;
