import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './change-password-form.form'
import { useAuth } from '@/hooks'
import { userInstance } from '@/api'
import styles from './change-password-form.module.scss'
export const ChangePasswordForm = () => {
  const { user, logout } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const response = await userInstance.updateMe(user.id, {
          password: formValues.password,
        })
        console.log('response', response)
        logout();
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar contraseña</label>
      <Form.Input
        error={formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        placeholder="Nueva contraseña"
      />
      <Form.Input
        error={formik.errors.repeatPassword}
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        name="repeatPassword"
        placeholder="Repita su contraseña"
      />
      <Form.Button loading={formik.isSubmitting} type="submit">
        Enviar
      </Form.Button>
    </Form>
  )
}
