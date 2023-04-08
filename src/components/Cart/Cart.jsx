import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Please Add Some Products</p>
    }
    else{
        message= <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue': 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold ${cart.length ==3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>
                        X
                    </button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
        </div>
    );
};

export default Cart;