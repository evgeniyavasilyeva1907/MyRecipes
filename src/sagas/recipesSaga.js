import { call, put, takeLatest, all } from 'redux-saga/effects';
import Actions from '../actions/recipe';
import recipesService from '../service/recipesService';

function* addRecipe(action) {
  try {
   // let recipe = yield call(recipesService.addRecipe, action.payload);
    yield put(Actions['RECIPES/FETCH_RECIPES_ADD_SUCCESSFULLY'](action.payload))
  }
  catch ({ message }) {

  }
}

function* addRecipeSaga() {

  yield takeLatest('RECIPES/FETCH_RECIPE_ADD', addRecipe);
  debugger
}

export default function* recipesSaga() {
  yield all([addRecipeSaga()]);
}