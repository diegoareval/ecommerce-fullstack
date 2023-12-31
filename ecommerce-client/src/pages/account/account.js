import { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { Info, Settings, Address } from '@/components/account'
import { BasicLayout } from '../../components/layouts'
import { Separator } from '@/components/shared'
import { useAuth } from '@/hooks'

import styles from './account.module.scss'

const HomePage = () => {
  const { logout, user } = useAuth()
  const router = useRouter()
  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  if (!user) {
    router.push('/join/sign-in')
    return null
  }
  const panes = [
    {
      menuItem: 'Mis pedidos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Lista de deseos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Mis Direcciones',
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses onReload={onReload} reload={reload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: 'settings',
        content: 'Ajustes',
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: 'log out',
        content: '',
        onClick: logout,
      },
    },
  ]
  return (
    <BasicLayout isContainer={true} relative={true}>
      <Info />
      <Tab
        className={styles.tabs}
        panes={panes}
        menu={{ secondary: true, pointing: true }}
      />
    </BasicLayout>
  )
}
export default HomePage
