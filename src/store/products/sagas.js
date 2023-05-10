import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_PRODUTOS, getProdutosSuccess, getProdutosError } from './action.js';
import axios from 'axios'

function* fetchProdutos() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/produtos');
    yield put(getProdutosSuccess(response.data));
  } catch (error) {
    yield put(getProdutosError(error.message));
  }
}

function* produtosSaga() {
  yield takeLatest(GET_PRODUTOS, fetchProdutos);
}

export default produtosSaga;