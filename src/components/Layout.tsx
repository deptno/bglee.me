import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import Head from 'next/head'
import {Container, Divider} from 'semantic-ui-react'
import css from './module.css'
import './style.css'

export class Layout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props
    return (
      <Container className={css.top_padder}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Header/>
        <Divider/>
        <main className={css.top_padder}>
          {children}
        </main>
        <Footer/>
      </Container>
    )
  }
}
