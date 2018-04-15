import * as React from 'react'
import {Container} from 'semantic-ui-react'
import {Project} from './Project'

export const Projects = props =>
  <Container>
    <Project
      header={{
        title: 'Dynamon - 다이나모디비 GUI 클라이언트',
        href: 'https://github.com/deptno/dynamon/release'
      }}
      description="다이나모 디비의 데이터를 편하게 보자."
      repos={[
        {title:'Gihtub',href:'https://github.com/deptno/dynamon'},
      ]}
    />
    <Project
      header={{
        title: 'Clerk - 슬랙 저장소',
        href: 'https://clerk.dev.googit.co'
      }}
      description="흐르는 링크 낚시."
      repos={[
        {title:'프론트엔드',href:'https://github.com/deptno/slack-clerk-fe'},
        {title:'백엔드',href:'https://github.com/deptno/slack-clerk'}
      ]}
    />
    <Project
      header={{
        title: 'Next.js typescript starter kit - Next.js + TypeScript',
        href: '#'
      }}
      description="현재(https://bglee.me)의 시작 템플릿"
      repos={[
        {title:'Gihtub',href:'https://github.com/deptno/next.js-typescript-starter-kit'}
      ]}
    />
  </Container>
