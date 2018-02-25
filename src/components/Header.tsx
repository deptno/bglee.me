import * as React from 'react'
import {Header as H1} from 'semantic-ui-react'

export class Header extends React.Component<undefined, undefined> {
  render() {
    return (
      <header>
        <H1 size="huge">이봉</H1>
      </header>
    )
  }
}
