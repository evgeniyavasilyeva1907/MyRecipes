import React, {useState} from 'react';
import Modal from 'react-modal'

function Recipe({ title, description, index, remove, edit }) {
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
    const openModal = () => {
      setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }
    return (
        <div>
            <Modal
             isOpen={modalOpen}
             onRequestClose={closeModal}
             contentLabel="Example Modal"
             style={customStyles}
             ariaHideApp={false}
         >
             <div className='modal'>
    <div className="recipeTitle">Вы уверены, что хотите удалить рецепт "{title}"?</div>
                <button className="recipeButton" onClick={remove}>Да, уверен</button>
                <button className="recipeButton" onClick={closeModal}>Отмена</button>
            </div>
             </Modal>
            <div className="recipe" key={index}>
                <div className='recipeTitle'>{title}</div>
                <div className='recipeDes'>{description}</div>
                <button className="recipeButton" onClick={openModal}>Удалить рецепт</button>
                <button className="recipeButton" onClick={edit}>Редактировать рецепт</button>
            </div>
        </div>

    )
}

export default Recipe;