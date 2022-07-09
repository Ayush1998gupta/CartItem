import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

   constructor() {
      super();
      this.state = {
         products: [
            {
               price: 500,
               title: ' Watch',
               qty: 1,
               img: '',
               id:1
            },
            {
               price: 1000,
               title: ' Mobile Phone',
               qty: 10,
               img: '',
               id:2
            
            },
            {
               price: 50000,
               title: 'Laptop',
               qty: 3,
               img: '',
               id:3
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
      const { products} = this.state;


      const items = products.filter((item) => item.id !== id);

      this.setState({
         products:items
      })
   
   }

   render() {

      const { products } = this.state;

      return (
         <div className="cart">
            {products.map((product) => {
               return (
                  <CartItem
                     product={product}
                     key={product.id}
                     onIncreaseQuantity={this.handelIncreseQuantity}
                     onDecreaseQuantity={this.handelDecreseQuantity}
                     onDeleteProduct={this.handelDeleteProduct}
                  />)
            })}
         </div>
      );
   }

}

export default Cart;