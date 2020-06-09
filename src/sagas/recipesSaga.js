import { call, put, takeLatest, all } from 'redux-saga/effects';
import Actions from '../actions/recipe';
import recipesService from '../service/recipesService';

function* addRecipe(action) {
    try {
      debugger
        let recipe = yield call(recipesService.save, action.payload);
        
        yield put (Actions['RECIPES/FETCH_RECIPES_ADD_SUCCESSFULLY']({recipe}))}
        catch ({ message }) {
           debugger;
      
  }}

  function* addRecipeSaga() {
    
    yield takeLatest('RECIPES/FETCH_RECIPES_ADD', addRecipe);
    debugger
  }

  export default function* recipesSaga() {
    yield all([addRecipeSaga()]);
  }