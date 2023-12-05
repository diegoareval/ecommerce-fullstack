import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './change-email-form.form'
import { useAuth } from '@/hooks'
import { userInstance } from '@/api'
import styles from './change-email-form.module.scss'

export const ChangeEmailForm = ({}) => {
    const { user } = useAuth()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValues) => {
          try {
           await userInstance.updateMe(user.id, {email: formValues.email});
            formik.handleReset();
          } catch (error) {
            console.log(error)
          }
        },
      })
  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Change Email</label>
      <Form.Input error={formik.errors.email} onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="Nuevo correo Electronico"/>
      <Form.Input error={formik.errors.repeatEmail} onChange={formik.handleChange} value={formik.values.repeatEmail} name="repeatEmail" placeholder="Repita su correo"/>
      <Form.Button loading={formik.isSubmitting} type="submit">
          Enviar
        </Form.Button>
    </Form>
  )
}
