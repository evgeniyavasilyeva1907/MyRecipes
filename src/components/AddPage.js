import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import BasicFormSchema from './BasicFormSchema';
import Modal from 'react-modal'


function AddPage(props) {
  const { saveRecipe, match, myRecipes, editRecipe, history } = props;
  const id = + match.params.recipeId;
  const recipe = myRecipes.find((elem) => elem.id === id);

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

  const submitAdd = (values) => {
    saveRecipe(values);
    history.push("/showAllRecipes")
  }

  const submitEdit = (values) => {
    editRecipe({ ...values, id })
    history.push("/showAllRecipes")
  }
  const submit = (values, methods) => {
    if (match.params.hasOwnProperty('recipeId')) submitEdit(values)
    else submitAdd(values)
    methods.resetForm();
  }
  const reset =() => {
    if (match.params.hasOwnProperty('recipeId')) resetEdit()
    else resetAdd()
  }
  const  resetAdd = () =>{
    history.push("/")
  }
  const resetEdit = (clean) => {
    openModal()
  }
  const cleanForm = (clean) => {
    clean();
    history.push("/showAllRecipes")
  }

  return (
    <div>

      <Formik
        initialValues={{
          title: (recipe && recipe.title) || '',
          description: (recipe && recipe.description) || ''
        }}
        validationSchema={BasicFormSchema}
        onSubmit={submit}>

        {({ isSubmitting, errors, touched, resetForm }) =>
          (
            <Form className='AddForm'>
              <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                ariaHideApp={false}>
                <div className='modal'>
                  <div className="recipeTitle">Вы уверены, что хотите отменить редактирование?</div>
                  <button className='recipeButton' onClick={cleanForm.bind(this, resetForm)} >Да, уверен</button>
                  <button className='recipeButton' onClick={closeModal}>Отмена</button>
                </div>
              </Modal>
              <label htmlFor="title">Название рецепта</label>
              <Field name="title" type='text' placeholder='Название рецепта' />
              {errors.title && touched.title ? (<div className="error">{errors.title}</div>) : null}
              <label htmlFor='description'>Описание рецепта </label>
              <Field component='textarea' name="description" placeholder='Описание рецепта' />
              {errors.description && touched.description ? (<div className="error">{errors.description}</div>) : null}
              <button className='recipeButton' type="submit" disabled={isSubmitting}>Сохранить</button>
              <button className='recipeButton' type='button' onClick={reset}>Отменить</button>
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default AddPage;