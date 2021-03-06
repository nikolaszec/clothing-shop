import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (selectedCollectionId) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[selectedCollectionId]
  );
};

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
