import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     products: [
  //       {
  //         price: 500,
  //         title: ' Watch',
  //         qty: 1,
  //         img: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600',
  //         id: 1
  //       },
  //       {
  //         price: 1000,
  //         title: ' Mobile Phone',
  //         qty: 10,
  //         img: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=600',
  //         id: 2

  //       },
  //       {
  //         price: 50000,
  //         title: 'Laptop',
  //         qty: 50,
  //         img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
  //         id: 3
  //       }
  //     ]
  //   }
  // }

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    });
    return cartTotal;
  }

  render() {
    const { products,loading } = this.state;
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
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
