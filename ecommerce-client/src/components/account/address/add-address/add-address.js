import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import styles from './add-address.module.scss'
import { BasicModal } from '@/components/shared/basic-modal'
export const AddAddress = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button primary className={styles.addBtn} onClick={() => setShow(!show)}>
        Crear
      </Button>
      <BasicModal show={show} onClose={() => setShow(!show)} title={"Nueva Dirección"}>
          <div>contenido</div>
      </BasicModal>
    </>
  )
}
