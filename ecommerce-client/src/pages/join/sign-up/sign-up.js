import * as React from 'react'
import Link from "next/link"
import { JoinLayout } from '../../../components/layouts'
import styles from './sign-up.module.scss'
import {RegisterForm} from "../../../components/auth"

export default function SignUp() {
  return (
    <JoinLayout>
      <div className={styles.signUp}>
        <h3>Crear Cuenta</h3>
        <RegisterForm/>
        <div className={styles.actions}>
          <Link href="/join/sign-in">Atras</Link>
        </div>
      </div>
    </JoinLayout>
  )
}
