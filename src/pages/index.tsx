import * as React from 'react'

export const config = {amp: true}

export default () => {
  return (
    <div className="pa3">

      <h4>contact</h4>
      <ul className="list pl0">
        <li>
          <a href="http://twitter.com/@deptno" target="_blank">twitter</a>
        </li>
        <li>
          <a href="mailto:deptno@gmail.com" target="_blank">email</a>
        </li>
        <li>
          <a href="http://deptno.slack.com" target="_blank">slack</a>
        </li>
      </ul>
      <h4>as developer</h4>
      <ul className="list pl0">
        <li>
          <a href="https://github.com/deptno" target="_blank">github</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~deptno" target="_blank">npm</a>
        </li>
        <li>
          <a href="https://deptno.github.io" target="_blank">blog</a>
        </li>
        <li>
          <a href="http://medium.com/@deptno" target="_blank">medium</a>
        </li>
      </ul>
      <h4>project</h4>
      <ul className="list pl0">
        <li>
          <a href="https://googit.io" target="_blank">googit.io</a>
        </li>
        <li>
          <a href="https://tubemon.io" target="_blank">tubemon.io</a>
        </li>
      </ul>
      <h4>pet</h4>
      <ul className="list pl0">
        <li>
          <a href="https://deptno.github.io/abandoned-animals" target="_blank">deptno.github.io/abandoned-animals</a>
        </li>
        <li>
          <a href="https://deptno.github.io/map-subway-storage" target="_blank">deptno.github.io/map-subway-storage</a>
        </li>
      </ul>
    </div>
  )
}


