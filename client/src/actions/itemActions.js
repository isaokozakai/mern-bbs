import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => async dispatch => {
  dispatch(setItemsLoading);
  try {
    const res = await axios.get('/api/items');
    dispatch({
      type: 'GET_ITEMS',
      items: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }

};

export const addItem = (item) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/items', item, tokenConfig(getState));
    dispatch({
      type: 'ADD_ITEM',
      item: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const deleteItem = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/items/${id}`, tokenConfig(getState));
    dispatch({
      type: 'DELETE_ITEM',
      id
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const setItemsLoading = (item) => {
  return {
    type: 'ITEMS_LOADING'
  };
};