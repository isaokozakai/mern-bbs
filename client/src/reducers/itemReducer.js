
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
    case 'GET_ITEM':
      return {
        ...state,
        item: action.item,
        loading: false
      };
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.item]
      };
    case 'EDIT_ITEM':
      const items = state.items.map((item) => {
        if (item._id === action.item._id) {
          return {
            ...item,
            ...action.item
          };
        } else {
          return item;
        }
      });
      return { ...state, items };
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