import * as React from 'react'
import {NextSeo} from 'next-seo/lib'
import {seo} from '../constant'

export const config = {amp: true}

export default () => {
  return (
    <div className="ph3 black-70">
      <style jsx>
        {/*language=css*/ `
          li:target {
            background: coral;
          }
        `}
      </style>
      <NextSeo {...seo} />
      <h2>👋 deptno</h2>
      <ul className="list pl0">
        <li>
          <a className="link black-70" href="mailto:deptno@gmail.com" target="_blank">email</a>
        </li>
        <li>
          <a className="link black-70" href="https://github.com/deptno" target="_blank">github</a>
        </li>
        <li>
          <a className="link black-70" href="https://www.npmjs.com/~deptno" target="_blank">npm</a>
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
          <a className="link black-70" href="https://deptno.github.io" target="_blank">deptno.github.io</a>
        </li>
        <li>
          <a className="link black-70" href="http://medium.com/@deptno" target="_blank">medium</a>
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
        <li>
          <a className="link black-70" href="https://googit.co" target="_blank">googit.co</a>
        </li>
      </ul>
      <h2>pet</h2>
      <ul className="list pl0">
        <li id="petitions">
          <a className="link black-70" href="https://github.com/deptno/dynamon" target="_blank">
            dynamon
          </a>
        </li>
        <li id="petitions">
          <a className="link black-70" href="https://deptno.github.io/petitions" target="_blank">
            deptno.github.io/petitions
          </a>
        </li>
        <li id="abandoned-animals">
          <a className="link black-70" href="https://deptno.github.io/abandoned-animals" target="_blank">
            deptno.github.io/abandoned-animals
          </a>
        </li>
        <li id="map-subway-storage">
          <a className="link black-70" href="https://deptno.github.io/map-subway-storage" target="_blank">
            deptno.github.io/map-subway-storage
          </a>
        </li>
      </ul>
      <h2>example</h2>
      <ul className="list pl0">
        <li id="e76d2550cfc0d374899c3e6efe5d7831">
          <a className="link black-70" href="https://gist.github.com/deptno/e76d2550cfc0d374899c3e6efe5d7831"
             target="_blank">
            graphql-tag fragment example
          </a>
        </li>
        <li id="aws-appsync-iam-example">
          <a className="link black-70" href="https://github.com/deptno/aws-appsync-iam-example" target="_blank">
            aws-appsync-iam-example
          </a>
        </li>
        <li id="typescript-monorepo-next-example">
          <a className="link black-70" href="https://github.com/deptno/typescript-monorepo-next-example"
             target="_blank">
            typescript-monorepo-next-example
          </a>
        </li>
        <li id="typescript-monorepo-cra-example">
          <a className="link black-70" href="https://github.com/deptno/typescript-monorepo-cra-example" target="_blank">
            typescript-monorepo-cra-example
          </a>
        </li>
      </ul>
      <h2>boilerplate</h2>
      <ul className="list pl0">
        <li id="boilerplate-dockerizing">
          <a className="link black-70" href="https://github.com/deptno/boilerplate-dockerizing" target="_blank">
            boilerplate-dockerizing
          </a>
        </li>
        <li id="next.js-typescript-starter-kit">
          <a className="link black-70" href="https://github.com/deptno/next.js-typescript-starter-kit" target="_blank">
            next.js-typescript-starter-kit
          </a>
        </li>
        <li id="ts-module-boilerplate">
          <a className="link black-70" href="https://github.com/deptno/ts-module-boilerplate" target="_blank">
            ts-module-boilerplate
          </a>
        </li>
      </ul>

    </div>
  )
}


