import ShopActionTypes from "./shop.types";
import { firestore, collectionMap } from "../../firebase/firebase.util";
export const fetchShopData = (shopData) => {
  return {
    type: ShopActionTypes.FETCH_SHOP_DATA,
    payload: shopData,
  };
};

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailed = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILED,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    // const response = await
    return collectionRef
      .get()
      .then((snapshot) => {
        dispatch(fetchCollectionsSuccess(collectionMap(snapshot)));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFailed(err));
      });
  };
};
