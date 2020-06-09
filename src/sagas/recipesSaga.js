import { call, put, takeLatest, all, select, takeEvery } from 'redux-saga/effects';
import Actions from '../actions/recipe';
import recipesService from '../service/recipesService';

export const getRecepties = (state) => state.recipeList;


function* loadFromLocal() {
  let new_data = JSON.parse(localStorage.getItem("recipes"));
  if (new_data == null) {
    new_data = [];
  }

  yield put({
    type: 'RECIPES/FETCH_SET_RECIPES',
    payload: new_data,
  });
}

export function* sagaWatcher() {
  yield takeEvery(Actions['RECIPES/FETCH_LOAD_DATA'], loadFromLocal);
 }

