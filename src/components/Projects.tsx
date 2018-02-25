import * as React from 'react'
import {Container, Header} from 'semantic-ui-react'
import {Project} from './Project'

export const Projects = props =>
  <Container>
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
  </Container>
