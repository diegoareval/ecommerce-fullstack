import styles from './basic-layout.module.scss'
import { Container } from 'semantic-ui-react'
import classNames from 'classnames'
import { TopBar } from '../tob-bar'
import {Footer} from '../footer'
export const BasicLayout = ({
  children,
  isOpenSearch = false,
  isContainer = true,
  relative = false,
}) => {
  return (
    <>
    <TopBar isOpenSearch={isOpenSearch}/>
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>
      <Footer/>
    </>
  )
}
