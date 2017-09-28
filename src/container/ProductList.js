
import {connect} from 'react-redux'
import React, {Component} from 'react'
import Product from "../components/Product";


class ProductList extends Component {

    return () {
      const {products} = this.props;
      return (
      <ul className="ProductList">
        {products.map(element => (<Product product={element}/>))}
      </ul>
    );
  }
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
