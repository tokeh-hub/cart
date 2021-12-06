import React from 'react'
import { useGlobalContext } from './context'

export default function Cartitem({id,title,price,img,amount}) {
    const{removeItem,toggle} = useGlobalContext()
    return (
        <article className='cartItem'>
            <img src={img} alt={title}></img>
            <div className='title-container'>
                <h4>{title}</h4>
                <p className='price'>${parseFloat((price*amount).toFixed(2))}</p>
                <p className='remove' onClick={()=>removeItem(id)}>remove</p>
            </div>
            <div>
                <button className='amount-btn' onClick={()=>toggle(id,'inc')}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
               </svg>
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={()=>toggle(id,'dec')}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
               </svg>
                </button>
            </div>

        </article>
    )
}
