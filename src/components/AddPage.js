import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BasicFormSchema from './BasicFormSchema';


function AddPage(props) {
  const { saveRecipe, match, myRecipes, editRecipe, history } = props;
  const id = + match.params.recipeId;
  const recipe = myRecipes.find((elem) => elem.id === id);

  const submitAdd = (values) => {
    saveRecipe(values);
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

  return (


    <Formik
      initialValues={{
        title: (recipe && recipe.title) || '',
        description: (recipe && recipe.description) || ''
      }}
      validationSchema={BasicFormSchema}
      onSubmit={submit}>

      {({ isSubmitting, errors, touched }) => (
        <Form className='AddForm'>
          <label htmlFor="title">Название рецепта</label>
          <Field name="title" type='text' placeholder='Название рецепта' />
          {errors.title && touched.title ? (<div className="error">{errors.title}</div>) : null}
          <label htmlFor='description'>Описание рецепта </label>
          <Field component='textarea' name="description" placeholder='Описание рецепта' />
          {errors.description && touched.description ? (<div className="error">{errors.description}</div>) : null}
          <button className='recipeButton' type="submit" disabled={isSubmitting}>Сохранить</button>
          <button className='recipeButton' type='reset'>Отменить</button>
        </Form>
      )}
    </Formik>


  )
}

export default AddPage;