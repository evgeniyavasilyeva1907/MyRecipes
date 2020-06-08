import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MyRecipes from '../components/MyRecipes';
import Actions from '../actions/recipe';

const mapStateToProps = state => {

    return {
        myRecipes: state.recipe.recipeList
    };
};
const mapDispatchToProps = dispatch => {
    return {
        recipeRemove: (id) => dispatch(Actions['RECIPES/FETCH_RECIPE_REMOVE'](id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MyRecipes));