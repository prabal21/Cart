import React from 'react';

const Navbar=(props)=>{
        return(
            <div style={styles.nav}>
                <div style={styles.cartContainer}>
                    <img style={styles.carticon} src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='cart-icon'/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
               
            </div>
        );
    }

const styles={
    carticon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartContainer:{
        position:'relative',
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        top:-9,
        right:0,
    }
};
export default Navbar;