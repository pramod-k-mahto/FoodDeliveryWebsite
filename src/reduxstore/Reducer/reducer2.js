const products = [];
const product = (state = products, action) => {
  switch (action.type) {
    case "add":
      if (!state.includes(action.id)) {
        return [...state, action.id]; // Adds action.id to the end of the array if it's not already in the array
      }
      return state; // If action.id is already in the array, return the current state unchanged
    case "remove":
      return state.filter((item) => item !== action.id); // Removes the specific value from the array
    default:
      return state;
  }
};

export default product;
