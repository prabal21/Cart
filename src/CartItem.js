import React from 'react';

const CartItem =(props)=>{
   /* constructor(){
        super();
        this.state={
            title: 'Phone',
            qty: 1,
            price: 9999,
        }
    }*/
    //incqty = () =>{
         //set state form 1
        // this.setState({
         //    qty:this.state.qty+1
         //});
         //set state form 2
        // this.setState((prevstate)=>{
         //    return{
         //qty:prevstate.qty+1
         //    }
         //});
   // }
    /*decqty=()=>{
        const{qty}=this.state;
        if(qty==0){
            return;
        }
        this.setState({
            qty:this.state.qty-1
        });
    }*/
        const {title, price, qty}=props.product;
        const {product}=props;
        return(
            <div className="cart-items">
                <div className="left">
                <img style={styles.image} src={product.img} />
               </div>
               <div className="right">
                   <div style={{fontSize:25, color:'green',marginLeft:10}}>{title}</div>
                   <div style={{color:'green',fontSize:25, marginLeft:10}}>Rs {price}</div>
                   <div  style={{color:'green',fontSize:25, marginLeft:10}}>Qty: {qty}</div>
                   <div className="action-icon">
                    {/*Buttons*/}
                    <img style={{marginLeft:10}} alt='increase' 
                    className='action-icon' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                    onClick={() => props.onIncreaseQuantity(props.product)}/>
                    <img alt='decrease' className='action-icon' src='https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1651691449~hmac=3f3695b6933e81e140f897cd65ebf3c6'
                    onClick={() => props.onDecreaseQuantity(props.product)}/> 
                    <img alt='delete' className='action-icon' src='https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1651691529~hmac=cf1d4f701db6eb7b8e6b3f2d0d935a06' 
                    onClick={() => props.onDelete(props.product.id)} 
                    />
                   </div>
               </div>
            </div>
        );
    }

const styles={
    image:{
        height:150,
        width:150,
        borderRadius:4,
        backgroundColor:'grey',
    }
}
export default CartItem;