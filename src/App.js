import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();
    this.state={
       products: [
            {
                title: "Phone",
                qty: 4,
                price: 9999,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580',
                id:1,
            },
            {
                title: "Laptop",
                qty: 1,
                price: 19999,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171',
                id:2,
            },
            {
                title: "Watch",
                qty: 10,
                price: 2999,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394',
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

getcartcount =()=>{
 const {products}=this.state;
let count =0;
products.forEach((product) =>{
  count+=product.qty;
});
return count;
}
getcarttotal=()=>{
  const {products}=this.state;
  let total=0;
  products.map((product)=>{
    total=total + product.qty * product.price;
  })
  return total;
}

  render(){
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar 
      count={this.getcartcount()}
      />
     <Cart 
     products={products}
     onIncreaseQuantity={this.increasequantity}
     onDecreaseQuantity={ this.decreasequantity}
     onDelete={this.deleteproduct}
     />
     <div style={{fontSize:30 ,color:'blue', padding:10}}>Total: {this.getcarttotal()}</div>
    </div>
  );
}
}

export default App;
