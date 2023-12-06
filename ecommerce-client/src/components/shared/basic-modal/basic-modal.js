import React from 'react'
import { Modal } from 'semantic-ui-react'
import styles from './basic-modal.module.scss'

export const BasicModal = ({children, show=true, onClose = null, title} )=> {
    return (
        <Modal open={show} onClose={onClose} size="small">
            <Modal.Header>{title}</Modal.Header>
           <Modal.Content>
           {children}
           </Modal.Content>
        </Modal>
    )
}

