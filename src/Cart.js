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
    increasequantity = (product)=>{
      const{products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products
      })
    }

    decreasequantity = (product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }

    deleteproduct = (id)=>{
        const{products}=this.state;
        const items = products.filter((item)=>item.id!=id);
        this.setState({
            products: items
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className='cart'>
           {products.map((product) => {
             return (
             <CartItem 
             product={product} 
             key={product.id}
             onIncreaseQuantity={this.increasequantity}
             onDecreaseQuantity={this.decreasequantity}
             onDelete={this.deleteproduct}
             />
           )})
           }
           </div>
        );
    }
}
export default Cart;