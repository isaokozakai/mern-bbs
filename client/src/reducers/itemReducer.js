
const initialState = {
  items: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        items: action.items,
        loading: false
      };
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.item]
      };
    case 'DELETE_ITEM':
      return {
        items: state.items.filter(item => item._id !== action.id)
      };
    case 'ITEMS_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}