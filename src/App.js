
import React, {Component} from 'react';
import './App.css';
import FilterProducts from "./containers/FilterProducts";
import ProductList from "./container/ProductList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Show "Belt" related items</h2>
                <FilterProducts/>
                <ProductList/>
            </div>
        );
    }
}

export default App;