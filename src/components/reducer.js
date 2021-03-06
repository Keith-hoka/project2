import { UsbOutlined } from "@material-ui/icons";
import { v1 } from "uuid";

export const initialState = {
  cart: [],
  user: null,
  products: []
};

export const getCartTotal = (cart) =>
  (cart?.reduce((amount, item) => item.price + amount, 0));

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case "CREATE_PRODUCT":
      // Grabs everything from the designated array
      return [...state, {
        title: action.product.title,
        image: action.product.image,
        price: action.product.price,
        rating: action.product.rating,
      }];
    case "REMOVE_PRODUCT":
      return {
        
      }
    case "SET_USER":
     return {
       ...state,
       user: action.user,
     };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item]
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_FROM_CART":
      // copy the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id );

      if (index >= 0){
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it is not in the Cart!`);
      }

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}

export default reducer;
