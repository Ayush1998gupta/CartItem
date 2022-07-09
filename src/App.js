import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 500,
          title: ' Watch',
          qty: 1,
          img: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600',
          id: 1
        },
        {
          price: 1000,
          title: ' Mobile Phone',
          qty: 10,
          img: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=600',
          id: 2

        },
        {
          price: 50000,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
          id: 3
        }
      ]
    }
  }

  handelIncreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);


    products[index].qty += 1;

    this.setState({
      // products:products
      // or
      products
    })
  }


  handelDecreseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      // products:products
      // or
      products
    })
  }

  handelDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })

  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })

    return count;

  }

  getCartTotal = () => {
    const { products } = this.state;
    
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handelIncreseQuantity}
          onDecreaseQuantity={this.handelDecreseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        <div style={{ padding:10,fontSize:20 }}>TOTAL: { this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
