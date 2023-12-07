import { Confirm as ConfirmSU } from 'semantic-ui-react'
export const Confirm = ({ ...rest }) => {
  return <ConfirmSU className="confirm" size="mini" {...rest} />
}
