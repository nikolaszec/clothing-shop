import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
