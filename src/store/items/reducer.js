import { ITEM_ADDED, ITEM_DELETED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED } from './actions'
import produce from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Spicy Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch(action.type) {
    // case ITEM_ADDED:
    //   const item = { uuid: id++, quantity: 1, ...action.payload};
    //   return [...state, item];

    // refactor of the above, using `produce` from immer
    case ITEM_ADDED:
      produce(state, (draftState) => {
        const item = { uuid: id ++, quantity: 1, ...action.payload};
        draftState.push(item);
      });

    case ITEM_DELETED:
      // filters everything that is not what is being
      return state.filter((item) => item.uuid !== action.payload.uuid);

    // case ITEM_PRICE_UPDATED:
    //   return state.map((item) => {
    //     if (item.uuid === action.payload.uuid) {
    //       return {...item, price: action.payload.price}
    //     }
    //     return item;
    //   });

    case ITEM_PRICE_UPDATED:
      return produce(state, (draftState) => {
        const item = draftState.find((item) => item.uuid === action.payload.uuid);
        item.price = parseInt(action.payload.price, 10);
      })

      // case ITEM_QUANTITY_UPDATED:
      //   return state.map((item) => {
      //     if (item.uuid === action.payload.uuid) {
      //       return {...item, quantity: action.payload.quantity}
      //     }
      //     return item;
      //   })

    case ITEM_QUANTITY_UPDATED:
      return produce(state, (draftState) => {
        const item = draftState.find((item) => item.uuid === action.payload.uuid);
        item.quantity = parseInt(action.payload.quantity, 10);
      });


    default:
      return state
  }
};

export default reducer;
