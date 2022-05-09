import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products: [
                {
                    title: "Phone",
                    qty: 4,
                    price: 9999,
                    img: '',
                    id:1,
                },
                {
                    title: "Laptop",
                    qty: 1,
                    price: 19999,
                    img:'',
                    id:2,
                },
                {
                    title: "Watch",
                    qty: 10,
                    price: 2999,
                    img:'',
                    id:3,
                }
           ]
        }
    }
    render(){
        const {products}=this.state;
        return(
            <div className='cart'>
           {products.map((product) => {
             return <CartItem product={product} key={product.id}/>
           })
           }
           </div>
        );
    }
}
export default Cart;