import * as React from 'react'
import {DEV} from '../constants/env'
import * as info from '../../package.json'
import css from './module.css'

export const Footer = props =>
  <footer className={css.footer}>
    <div className="col-12">
      <span>
        <i className="fa fa-code-fork fa-lg"/> v{info.version} {DEV && 'development'} |&nbsp;
      </span>
      © {new Date().getFullYear()} <a href="mailto:deptno@gmail.com">이봉</a>. All rights reserved.
      &nbsp;
      <a target="_blank" href="https://github.com/deptno">
        <i className="fa fa-github fa-lg"/>
      </a>
      &nbsp;
      <a target="_blank" href="https://deptno.slack.com/messages/C587B5X9T">
        <i className="fa fa-slack fa-lg"/>
      </a>
    </div>
  </footer>
