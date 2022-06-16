import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {firebase} from './config';



class App extends React.Component {

  constructor(){
    super();
    this.state={
       products: [],
       loading : true,
    }
}

componentDidMount(){
/*firebase
.firestore()
.collection('products')
.get()
.then((snapshot)=>{
  console.log(snapshot);

  snapshot.docs.map((doc)=>{
    console.log(doc.data())
  });
  const products= snapshot.docs.map((doc)=>{
    const data=doc.data();
    data['id']= doc.id;
    return data;
  })
  this.setState({
    products,
    loading: false
  })
})*/

firebase
.firestore()
.collection('products')
.onSnapshot((snapshot)=>{
  console.log(snapshot);

  snapshot.docs.map((doc)=>{
    console.log(doc.data())
  });
  const products= snapshot.docs.map((doc)=>{
    const data=doc.data();
    data['id']= doc.id;
    return data;
  })
  this.setState({
    products,
    loading: false
  })
})
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
    const {products,loading}=this.state;
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
     {loading &&<h1>Loading Products</h1>}
     <div style={{fontSize:30 ,color:'blue', padding:10}}>Total: {this.getcarttotal()}</div>
    </div>
  );
}
}

export default App;
