const products = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_CART':
      return {
        ...state,
        // El payload ahora es { product, quantity }
        cart: [action.payload, ...state.cart],
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        // El payload es el productId
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case 'UPDATE_CART_QUANTITY': //actualizar cantidad
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default products;