export const addToCart = (pizza, quantity, varient) => (dispatch) => {
  //Creating the object of the cart item

  let cartItem = {
    name: pizza.name,
    id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
};

export const deleteFromCart = (pizza) => (dispatch) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
};
