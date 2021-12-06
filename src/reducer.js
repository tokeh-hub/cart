
const reducer = (state,action) =>{
    switch(action.type){
        case 'CLEAR': return {...state,cart:[]}
        case 'REMOVE': return {...state,cart:state.cart.filter((item)=> item.id !== action.payload)}
        case 'TOGGLE': 
                let tempXart = state.cart.map(item=>{
                    if(item.id === action.payload.id){
                        if(action.payload.type === 'inc'){return {...item,amount:item.amount + 1}}
                        if(action.payload.type==='dec'){ return {...item,amount:item.amount - 1}}
                    }
                    return item
                }).filter(item=> item.amount !== 0)
                return {...state,cart:tempXart}
        
        case 'AMOUNT': 
               let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
                //    destructure each item in the cart
                   const{price,amount} = cartItem
                   cartTotal.amount+=amount
                //    console.log(cartTotal.amount)
                console.log({price,amount})
                const newPrice = amount * price
                console.log(newPrice)
                cartTotal.total+=newPrice

                   return cartTotal
               },
               {
                   total:0,
                   amount:0
             })
             total = parseFloat(total.toFixed(2))
            //  return the reduced variables while maintaining the state
             return {...state,total,amount} 
        case 'LOADING':
            return {...state,loading:true}
        case 'DISPLAY': 
            return {...state,cart:action.payload,loading:false}
        default: return state  

    }
    
}
export default reducer