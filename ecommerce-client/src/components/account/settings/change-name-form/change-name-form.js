import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './change-name-form.form'
import { useAuth } from '@/hooks';
import {userInstance} from '@/api'
import styles from './change-name-form.module.scss'

export const ChangeNameForm = () => {
  const { user } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(user.firstname || '', user.lastname || ''),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        console.log(formValues)
        const response = await userInstance.updateMe(user.id, formValues)
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombres y apellidos</label>
      <div className={styles.content}>
        <Form.Input
          error={formik.errors.firstname}
          onChange={formik.handleChange}
          value={formik.values.firstname}
          name="firstname"
          placeholder="name"
        />
         <Form.Input
          error={formik.errors.lastname}
          onChange={formik.handleChange}
          value={formik.values.lastname}
          name="lastname"
          placeholder="Lastname"
        />
        <Form.Button loading={formik.isSubmitting} type="submit">
          Enviar
        </Form.Button>
      </div>
    </Form>
  )
}
