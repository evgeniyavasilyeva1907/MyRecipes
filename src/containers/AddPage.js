import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AddPage from '../components/AddPage';
import Actions from '../actions/recipe';

const mapStateToProps = state => {

  return {
    myRecipes: state.recipe.recipeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveRecipe: (params) => dispatch(Actions["RECIPES/FETCH_RECIPE_ADD"](params)),
    editRecipe: (params) => dispatch(Actions['RECIPES/FETCH_RECIPE_EDIT'](params))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(AddPage));