const products = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'ADD_CART':
     
      const existingItem = state.cart.find(
        item => item.product.id === action.payload.id
      );

      if (existingItem) {
        
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        
        return {
          ...state,
          cart: [...state.cart, { product: action.payload, quantity: 1 }],
        };
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE_CART_ITEM': 
      return {
        ...state,
        cart: state.cart.filter(
          item => item.product.id !== action.payload
        ),
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? {
                ...item,
                quantity: Math.max(1, action.payload.quantity), 
              }
            : item
        ),
      };

    default:
      return state;
  }
};

export default products;
