import React from "react";

class CartItem extends React.Component {

   constructor() {
      super();
      this.state = {
         price: 999,
         title: ' Mobile Phone',
         qty: 5,
         img:''
      }
   }
   render() {

      const { price, title, qty } = this.state;
      return (
         <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}/> 
            </div>
            <div className="right-block">
               <div style={{ fontSize: 25 }}>{title}</div>
               <div style={{ color: '#777' }}>Rs {price}</div>
               <div style={{ color:'#777' }}>Qty:{qty}</div>
               <div className="cart-item-actions">
                  {/* Button */}
                  <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                  <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" />
                  <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1657277847~hmac=28c1d7e13a14e1627287c9c2cc60be09" />
               </div>
            </div>
         </div>
      );
   }
}


const styles = {
   image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background:'#ccc'
   }
}

export default CartItem;