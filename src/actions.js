
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const filterProducts = function (filterType) {
  return {
    type: FILTER_PRODUCTS,
    payload: filterType
  }
}
