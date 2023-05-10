import {
    GET_PRODUTOS,
    GET_PRODUTOS_SUCCESS,
    GET_PRODUTOS_ERROR,
  } from './action';
  
  const initialState = {
    produtos: [],
    loading: false,
    error: null,
  };
  
  const produtosReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUTOS:
        return {
          ...state,
          loading: true,
        };
      case GET_PRODUTOS_SUCCESS:
        return {
          ...state,
          produtos: action.payload,
          loading: false,
        };
      case GET_PRODUTOS_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default produtosReducer;