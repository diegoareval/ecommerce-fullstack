import { useState, useEffect } from 'react'
import { addressInstance } from '@/api'
import { useAuth } from '@/hooks'
import { AddressItem } from './address'
import { map } from 'lodash'
import styles from './list-addresses.module.scss'

export const ListAddresses = ({ reload, onReload }) => {
  const [addresses, setAddresses] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    loadData()
  }, [reload])

  const loadData = async () => {
    const addressResult = await addressInstance.getAddress(user.id)
    setAddresses(addressResult.data)
  }
  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <AddressItem
          onReload={onReload}
          key={address.id}
          addressId={address.id}
          address={address?.attributes}
        />
      ))}
    </div>
  )
}
