let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Spicy Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  return state;
};

export default reducer;
