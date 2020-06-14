import { connect } from 'react-redux';
import Actions from '../actions/recipe';
import React, { useState } from 'react';
import { withRouter } from "react-router";
import Modal from 'react-modal'


function RemoveAll({ remove, history, myRecipes }) {
 
    const [modalOpen, setOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const removeAll = () => {
        remove();
        setOpen(false)
        history.push('/')
    }

    const openModal = () => {
        if (myRecipes.length) setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
        history.push('/')
    }


    return (<div>
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            ariaHideApp={false}
        >   <div className='modal'>
                <div className="recipeTitle">Вы уверены, что хотите удалить все рецепты?</div>
                <button className="recipeButton" onClick={removeAll}>Да, уверен</button>
                <button className="recipeButton" onClick={closeModal}>Отмена</button>
            </div>
        </Modal>
        <button className="menuButton" onClick={openModal}>Удалить все рецепты</button>
    </div>)
}

const mapDispatchToProps = dispatch => {
    return {
        remove: () => dispatch(Actions['RECIPES/FETCH_RECIPES_REMOVE_ALL']())
    }

};
const mapStateToProps = state => {

    return {
        myRecipes: state.recipe.recipeList
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RemoveAll));