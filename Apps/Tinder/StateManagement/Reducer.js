export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {...state, basket: [...state.basket, action.item]};
    case 'REMOVE_ITEM':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('Cant do this');
      }
      return {...state, basket: newBasket};
    default:
      return state;
  }
}

export default reducer;
