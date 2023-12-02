import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon, Image } from 'semantic-ui-react'
import styles from './join-layout.module.scss'
import { useAuth } from '@/hooks'
export const JoinLayout = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()
  if (user) {
    router.push('/')
    return;
  }
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo.png" alt="gaming" />
        </Link>
        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight}></div>
    </div>
  )
}
