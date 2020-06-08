import React from 'react';

function Recipe({ title, description, index, remove, edit }) {
    return (
        <div className="recipe" key={index}>
            <div className='recipeTitle'>{title}</div>
            <div className='recipeDes'>{description}</div>
            <button className="recipeButton" onClick={remove}>Удалить рецепт</button>
            <button className="recipeButton" onClick={edit}>Редактировать рецепт</button>
        </div>
    )
}

export default Recipe;