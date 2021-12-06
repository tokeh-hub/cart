import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'

export default function CartContainer() {
    const{cart,total,clearCart} = useGlobalContext()
    console.log(cart)
    if(cart.length === 0){
        return(
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h3 className='empty'>is currently empty</h3>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cart.map(item=>{
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className='total'>
                <h4>Total<span>${total}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>
                Clear Cart
            </button>
        </footer>
    </section>
    )
}
