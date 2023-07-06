import { ITEM_ADDED, ITEM_DELETED, ITEM_PRICE_UPDATED } from './actions'

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Spicy Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch(action.type) {
    case ITEM_ADDED:
      const item = { uuid: id++, quantity: 1, ...action.payload};
      return [...state, item];

    case ITEM_DELETED:
      // filters everything that is not what is being
      return state.filter((item) => item.uuid !== action.payload.uuid);

    case ITEM_PRICE_UPDATED:
      return state.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return {...state, price: action.payload.price}
        }
        return item;
      });

    default:
      return state
  }
};

export default reducer;
