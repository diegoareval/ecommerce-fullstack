import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './login-form.form'
import {useRouter} from "next/router"
import {Auth} from "@/api";
import {useAuth} from "@/hooks"

const authHandler = new Auth();

export const LoginForm = () => {
    const {login, accessToken, user} = useAuth();
    console.log(accessToken)
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const result = await authHandler.login(formData);
        login(result.jwt)
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="identifier"
          type="text"
          placeholder="Add your username or email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
       <Form.Input
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          error={formik.errors.password}
          type="password"
          placeholder="Password"
        />
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Sign In
      </Form.Button>
    </Form>
  )
}
