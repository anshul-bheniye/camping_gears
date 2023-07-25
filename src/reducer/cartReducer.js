

export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartList: payload.cartList}

        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.cartList}
       
        case "CART_TOTAL":
            return {...state, total: payload.total}
      
        
        default:
            throw new Error('Case not found!')
    }
}
