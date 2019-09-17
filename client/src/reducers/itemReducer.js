
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
      return state.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item,
            ...action.item
          };
        } else {
          return item;
        }
      });
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