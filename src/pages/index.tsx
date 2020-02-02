import * as React from 'react'

export const config = {amp: true}

export default () => {
  return (
    <div className="ph3 black-70">
      <h2>contact</h2>
      <ul className="list pl0">
        <li>
          <a className="link black-70" href="mailto:deptno@gmail.com" target="_blank">email</a>
        </li>
        <li>
          <a className="link black-70" href="http://twitter.com/@deptno" target="_blank">twitter</a>
        </li>
        <li>
          <a className="link black-70" href="http://deptno.slack.com" target="_blank">slack</a>
        </li>
      </ul>
      <h2>writing</h2>
      <ul className="list pl0">
        <li>
          <a className="link black-70" href="https://deptno.github.io" target="_blank">blog</a>
        </li>
        <li>
          <a className="link black-70" href="http://medium.com/@deptno" target="_blank">medium</a>
        </li>
      </ul>
      <h2>code</h2>
      <ul className="list pl0">
        <li>
          <a className="link black-70" href="https://github.com/deptno" target="_blank">github</a>
        </li>
        <li>
          <a className="link black-70" href="https://www.npmjs.com/~deptno" target="_blank">npm</a>
        </li>
      </ul>
      <h2>pet</h2>
      <ul className="list pl0">
        <li id="petitions">
          <a className="link black-70" href="https://deptno.github.io/petitions" target="_blank">deptno.github.io/petitions</a>
        </li>
        <li>
          <a className="link black-70" href="https://deptno.github.io/abandoned-animals" target="_blank">deptno.github.io/abandoned-animals</a>
        </li>
        <li>
          <a className="link black-70" href="https://deptno.github.io/map-subway-storage" target="_blank">deptno.github.io/map-subway-storage</a>
        </li>
      </ul>
      <h2>project</h2>
      <ul className="list pl0">
        <li>
          <a className="link black-70" href="https://googit.io" target="_blank">googit.io</a>
        </li>
        <li>
          <a className="link black-70" href="https://tubemon.io" target="_blank">tubemon.io</a>
        </li>
      </ul>
    </div>
  )
}


