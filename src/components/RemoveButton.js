import { connect } from 'react-redux';
import Actions from '../actions/recipe';
import React from 'react';
import { withRouter } from "react-router";

function RemoveAll({ remove, history }) {
    const removeAll = () => {
        remove();
        history.push('/')
    }
    return (<button className="menuButton" onClick={removeAll.bind(this)}>Удалить все рецепты</button>)
}

const mapDispatchToProps = dispatch => {
    return {
        remove: () => dispatch(Actions['RECIPES/FETCH_RECIPES_REMOVE_ALL']())
    }

};
export default connect(
    null,
    mapDispatchToProps
)(withRouter(RemoveAll));