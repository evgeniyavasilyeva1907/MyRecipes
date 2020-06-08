import * as Yup from 'yup';
const BasicFormSchema = Yup.object().shape({
    title: Yup.string()
        .required('Введите название рецепта'),
    description: Yup.string()
        .required('Введите описание рецепта')
})
export default BasicFormSchema;