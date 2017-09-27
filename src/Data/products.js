import React from 'react';
import {connect} from 'react-redux'

import product from "../components/product";

const ProductList = ({product}) => {
    return (
      <ul className="ProductList">
        {products.map(element => (<Product product={element}/>))}
      </ul>
    );

}
const mapStateToProps = function(state) {
    let products;

    if (state.filter === 'overTwenty') {
      products = state.products.filter( element => element.price>20);
} else if (state.filter === 'underTwenty') {
  products = state.products.filter( element => element.price<20);
    } else {
      products = state.products
    }
    return {products}
}

export default connect(mapStateToProps)(ProductList);
