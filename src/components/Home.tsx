import * as React from 'react'
import {Container} from 'semantic-ui-react'
import {PersonalLinks} from './PersonalLinks'
import {Projects} from './Projects'
import css from './module.css'

export const Home = props =>
  <Container>
    <PersonalLinks/>
    <div className={css.top_padder} />
    <Projects/>
  </Container>
