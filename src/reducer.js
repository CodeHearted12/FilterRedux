import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "./actions";
import products from './Data/products';

const initialState = {
  products: products,
  filter: "all"
}

const reducer = function(state = initialState, action) {
    switch(action.type){
      case FILTER_PRODUCTS:
      return update(state,{filter:{$set:action.payload}});
        default: return state;
    }

}

export default reducer;
