import { Image } from 'semantic-ui-react';
import styles from './top-bar.module.scss';
import Link from 'next/link';
import {Account} from '../account'
import { Menu } from '@/components/menu';
export const TopBar = ({isOpenSearch = false})=>  {
    
    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href='/'>
                    <Image src="/images/logo.png" alt="logo"/>
                </Link>
            </div>
            <div className={styles.center}>
             <Menu isOpenSearch={isOpenSearch}/>
            </div>
            <div className={styles.rigth}>
              <Account/>
            </div>
        </div>
    )
}