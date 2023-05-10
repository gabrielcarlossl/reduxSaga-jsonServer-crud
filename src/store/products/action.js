export const GET_PRODUTOS = 'GET_PRODUTOS';
export const GET_PRODUTOS_SUCCESS = 'GET_PRODUTOS_SUCCESS';
export const GET_PRODUTOS_ERROR = 'GET_PRODUTOS_ERROR';

export const getProdutos = () => ({
    type: GET_PRODUTOS,
  });
  
  export const getProdutosSuccess = (produtos) => ({
    type: GET_PRODUTOS_SUCCESS,
    payload: produtos,
  });
  
  export const getProdutosError = (error) => ({
    type: GET_PRODUTOS_ERROR,
    payload: error,
  });