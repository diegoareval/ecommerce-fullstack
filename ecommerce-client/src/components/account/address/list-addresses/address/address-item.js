import { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styles from './address-item.module.scss'
import { BasicModal, Confirm } from '@/components/shared'
import { AddressForm } from '../../address-form'
import { addressInstance } from '@/api'

export const AddressItem = ({ address, addressId, onReload }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const openCloseEdit = () => setShowEdit((prevState) => !prevState)
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  const removeAddress = async () => {
    try {
      addressInstance.removeAddress(addressId)
      onReload()
      openCloseConfirm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}: </p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{' '}
            , {address.postal_code}
          </p>
        </div>
        <div className={styles.actions}>
          <Button primary icon>
            <Icon name="pencil" onClick={openCloseEdit} />
          </Button>
          <Button primary icon>
            <Icon name="delete" onClick={openCloseConfirm} />
          </Button>
        </div>
      </div>
      <Confirm
        content="Estas seguro que deseas eliminar la dirección"
        onConfirm={removeAddress}
        onCancel={openCloseConfirm}
        open={showConfirm}
      />
      <BasicModal
        onReload={onReload}
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar direccion"
      >
        <AddressForm
          address={address}
          addressId={addressId}
          onClose={openCloseEdit}
          onReload={onReload}
        />
      </BasicModal>
    </>
  )
}
