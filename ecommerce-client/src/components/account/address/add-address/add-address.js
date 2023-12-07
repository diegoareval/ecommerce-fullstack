import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './add-address.module.scss';
import { BasicModal } from '@/components/shared/basic-modal';
import {AddressForm} from '../address-form';
export const AddAddress = ({onReload}) => {
  const [show, setShow] = useState(false)
  const onClose = () => setShow(!show)
  return (
    <>
      <Button primary className={styles.addBtn} onClick={() => setShow(!show)}>
        Crear
      </Button>
      <BasicModal show={show} onClose={() => setShow(!show)} title={"Nueva Dirección"}>
          <AddressForm onClose={onClose} onReload={onReload}/>
      </BasicModal>
    </>
  )
}
