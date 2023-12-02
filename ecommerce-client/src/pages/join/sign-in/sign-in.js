import * as React from 'react'
import Link from "next/link"
import { JoinLayout } from '../../../components/layouts'
import styles from './sign-in.module.scss'
import {LoginForm} from "../../../components/auth"

export default function SignUp() {
  return (
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Sign In</h3>
        <LoginForm/>
        <div className={styles.actions}>
          <Link href="/join/sign-up">you don't have an account?</Link>
        </div>
      </div>
    </JoinLayout>
  )
}
