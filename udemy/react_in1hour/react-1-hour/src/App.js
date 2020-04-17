import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {quantity: 0};

    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }

  buy(){
    this.setState({quantity: this.state.quantity + 1});
    this.props.handleTotal(this.props.price);
  }

  show(){
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div>      
        <p className="App-intro"> {this.props.name} - ${this.props.price} </p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <h3>Quantity: {this.state.quantity} item(s)</h3>
        <hr />
      </div>
    );
  }
}

class Total extends Component{
  render() {
    return (
      <div>
        <h3>Total Cash: {this.props.total}</h3>
      </div>
    );
  }
}

class ProductList extends Component{

  constructor(props){
    super(props);
    this.state = {
      total: 0,
      productList: [
        {name: "Samsung", price: 500},
        {name: "iPhone", price: 700},
        {name: "Motorola", price: 400},
      ]
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(price){
    this.setState({total: this.state.total + price});
  }

  showProduct(name){  
    alert("You selected " + name);
  }

  render() {

    const component = this;
    const products = component.state.productList.map(function(product){
      return(
        <App name={product.name} price={product.price} 
        handleShow={component.showProduct} 
        handleTotal={component.calculateTotal} />
      );
    });

    return (
      <div  className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Store</h2>
        </div>       
        {products} 
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
