import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
class ShopPage extends React.Component {
  unsubscribe = null;
  componentDidMount() {
    console.log(this.props);
    const { dispatch, fetchCollectionsAsync } = this.props;
    // const collectionRef = firestore.collection("collections");
    // this.unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
    //   dispatch(fetchShopData(collectionMap(snapshot)));

    // });
    // this.unsubscribe = collectionRef.get().then((snapshot) => {
    //   dispatch(fetchShopData(collectionMap(snapshot)));
    // });
    fetchCollectionsAsync();
    //this.unsubscribe = () => fetchCollectionsAsync();
  }

  render() {
    return (
      <div className="shop-page">
        <CollectionsOverviewWithSpinner
          isLoading={this.props.isCollectionsFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isCollectionsFetching: selectIsFetching,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSpinner(ShopPage));
