import React,{useEffect,useReducer,useContext} from 'react'
import cartItems from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const initialCart = {
        loading:false,
        cart: cartItems,
        total:0,
        amount:0
    }
    const [state,dispatch] = useReducer(reducer,initialCart)
    const clearCart = () =>{
        dispatch({type:"CLEAR"})
    }
    const removeItem = (id) => {
        dispatch({type:"REMOVE",payload:id})
    }
    const toggle = (id,type) =>{
        dispatch({type:'TOGGLE',payload:{id,type}})
    }
   
    const fetchApi = async () => {
        dispatch({type:'LOADING'})
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({type:'DISPLAY',payload:cart})
    }
    useEffect(()=>{fetchApi()},[])
    useEffect(()=>{
          dispatch({type:'AMOUNT'})
    },[state.cart])
    return(
        <AppContext.Provider value={{...state,clearCart,removeItem,toggle}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}