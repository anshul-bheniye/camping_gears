import { useContext, useReducer, createContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
 
 

const initialState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(initialState);


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (gear) => {
       const updatedCartList = state.cartList.concat(gear)
       updateTotal(updatedCartList) 
       dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartList : updatedCartList
            }
        })
    }

    const removeFromCart = (gear) => {
        const updatedCartList = state.cartList.filter(item => item.id !== gear.id)
        updateTotal(updatedCartList) 
        dispatch({
             type: "REMOVE_FROM_CART",
             payload: {
                 cartList : updatedCartList
             }
         })
     }

     const updateTotal = (gears) => {
        let total = 0;
        gears.forEach(gear => total = total + gear.price);
        dispatch({
            type: "CART_TOTAL",
            payload: {
                total
            }
        })

     }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);


