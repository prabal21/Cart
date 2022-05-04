import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-items">
                <div className="left">
                <img style={styles.image}></img>
               </div>
               <div className="right">
                   <div>phone</div>
                   <div>Rs9999</div>
                   <div>Qty: 1</div>
                   <div className="action-icon">
                       
                   </div>
               </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
    }
}
export default CartItem;