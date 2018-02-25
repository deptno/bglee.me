import * as React from 'react'
import {DEV} from '../constants/env'
import * as info from '../../package.json'
import css from './module.css'

export const Footer = props =>
  <footer className={css.footer}>
    <span>
      <i className="fa fa-code-fork fa-lg"/> v{info.version} {DEV && 'development'} |&nbsp;
    </span>
    <a target="_blank" href="https://github.com/deptno/www.bglee.me">
      <i className="fa fa-github fa-lg"/>
    </a>
  </footer>
