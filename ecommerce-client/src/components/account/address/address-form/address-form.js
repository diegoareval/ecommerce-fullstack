import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './address-form.form'
import { useAuth } from '@/hooks'
import { addressInstance } from '@/api'
export const AddressForm = ({ onClose, onReload, addressId, address }) => {
  const { user } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        if (addressId) {
          await addressInstance.updateAddress(addressId, {
            ...formValues,
            user: user.id,
          })
        } else {
          await addressInstance.createAddress({ ...formValues, user: user.id })
        }
        formik.handleReset()
        onReload()
        onClose()
      } catch (error) {
        console.log(error)
      }
    },
  })
  console.log('addressId', addressId)
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        error={formik.errors.title}
        value={formik.values.title}
        onChange={formik.handleChange}
        name="title"
        placeholder="Agregue un titulo de la direccion"
      />
      <Form.Group widths="equal">
        <Form.Input
          value={formik.values.name}
          error={formik.errors.name}
          name="name"
          placeholder="Agregue su nombre"
          onChange={formik.handleChange}
        />
        <Form.Input
          value={formik.values.address}
          error={formik.errors.address}
          name="address"
          placeholder="Agregue su direccion"
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          value={formik.values.state}
          error={formik.errors.state}
          name="state"
          placeholder="Nombre del departamento"
          onChange={formik.handleChange}
        />
        <Form.Input
          value={formik.values.city}
          error={formik.errors.city}
          name="city"
          placeholder="Ciudad"
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          value={formik.values.postal_code}
          error={formik.errors.postal_code}
          name="postal_code"
          placeholder="Codigo postal"
          onChange={formik.handleChange}
        />
        <Form.Input
          value={formik.values.phone}
          error={formik.errors.phone}
          name="phone"
          placeholder="Telefono"
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Button loading={formik.isSubmitting} type="submit" fluid>
        Enviar
      </Form.Button>
    </Form>
  )
}
