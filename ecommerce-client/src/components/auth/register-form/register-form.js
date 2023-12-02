import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './register-form.form'
import {useRouter} from "next/router"
import {Auth} from "@/api" 

const authHandler = new Auth();

export const RegisterForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const result = await authHandler.register(formData);
        console.log(result)
        router.push("/join/sign-in")
      } catch (error) {
        console.log(error);
      }
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="text"
          placeholder="Add your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="username"
          value={formik.values.username}
          type="text"
          placeholder="Add your user name"
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          type="text"
          error={formik.errors.name}
          placeholder="Add your name and lastname"
        />
        <Form.Input
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          error={formik.errors.password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Create Account
      </Form.Button>
    </Form>
  )
}
