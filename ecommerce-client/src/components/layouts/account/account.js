import styles from './account.module.scss'
import { Button, Icon, Label } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'
import classNames from "classnames";

//  TODO: it will be dynamic
const total = 5
export const Account = ({}) => {
  const { user } = useAuth()
  const router = useRouter()

  const goToLogin = () => router.push('/join/sign-in')
  const goToAccount = () => router.push('/account')

  const goToCart = () => {
    if (!user) goToLogin()
    else router.push('/cart')
  }
  return (
    <div className={styles.account}>
      <Button icon className={styles.cart}>
        <Icon onClick={goToCart} name="cart" />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>
      <Button icon className={classNames({ [styles.user]: user })}>
        <Icon name="user outline" onClick={user ? goToAccount : goToLogin} />
      </Button>
    </div>
  )
}
