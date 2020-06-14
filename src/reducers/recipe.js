import update from 'immutability-helper';
import { handleActions } from 'redux-actions';

import Actions from './../actions/recipe';

const recipeList = [
  {
    id: 0,
    title: "Борщ",
    description: "Свекла"
  },
  {
    id: 1,
    title: "Чай",
    description: "Вода"
  }];

let counter = recipeList.length - 1;

const initialState = {
  recipeList,
};

const recipeReducer = handleActions({

  [Actions['RECIPES/FETCH_RECIPES_ADD_SUCCESSFULLY']]: (state, action) => {
    counter++;
    return update(state, {
      recipeList: {
        $push: [{
          id: counter,
          title: action.payload.title,
          description: action.payload.description
        }],
      },


    }, console.log(initialState));
  },
  [Actions['RECIPES/FETCH_RECIPE_REMOVE']]: (state, action) => {
    const fromState = state.recipeList.slice();
    let indexRemove;
    fromState.forEach((recipe, index) => {
      if (recipe.id === action.payload) {
        indexRemove = index;
      }
    });
    fromState.splice(indexRemove, 1);
    return update(
      state, {
      $merge:
        { recipeList: fromState }
    }
    )
  },
  [Actions['RECIPES/FETCH_RECIPES_REMOVE_ALL']]: (state) => {
    const remove = [];
    return update(
      state, {
      $merge: { recipeList: remove }
    }
    )
  },
  [Actions['RECIPES/FETCH_RECIPE_EDIT']]: (state, action) => {
    const fromState = state.recipeList.slice();
    let indexEdit;
    fromState.forEach((recipe, index) => {
      if (recipe.id === action.payload.id) {
        indexEdit = index;
      }
    });
    fromState[indexEdit].title = action.payload.title;
    fromState[indexEdit].description = action.payload.description;
    return update(
      state, {
      $merge:
        { recipeList: fromState }
    }
    )
  },
  [Actions['RECIPES/FETCH_SET_RECIPES']]: (state, action) => {
    const recipes = action.payload;
    return update(
      state, {
      $merge:
        { recipeList: recipes }
    }
    )
  },


}


  , initialState);


export default recipeReducer;