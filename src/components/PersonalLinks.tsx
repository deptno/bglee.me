import * as React from 'react'
import {Container, Segment, List, Image, Header} from 'semantic-ui-react'

export const PersonalLinks = props =>
  <Container>
    <Segment>
      <List>
        <List.Item>
          <Image avatar src="https://avatars1.githubusercontent.com/u/1223020?s=460&v=4"/>
          <List.Content>
            <List.Header as="a" href="https://resume.bglee.me" target="_blank">Resume</List.Header>
            <List.Description>이력서 - 개인 관리용</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
          <List.Content>
            <List.Header as="a" href="https://github.com/deptno" target="_blank">Github</List.Header>
            <List.Description>개인 레포지터리</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"/>
          <List.Content>
            <List.Header as="a" href="https://medium.com/@deptno" target="_blank">Medium</List.Header>
            <List.Description>블로그 (2018 ~)</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src="https://avatars1.githubusercontent.com/u/1223020?s=460&v=4"/>
          <List.Content>
            <List.Header as="a" href="https://deptno.github.io" target="_blank">봉로그</List.Header>
            <List.Description>블로그 (~ 2017)</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src="/static/image/slack.png"/>
          <List.Content>
            <List.Header as="a" href="https://deptno.slack.com/messages/C0GLRR5BM" target="_blank">Slack</List.Header>
            <List.Description>채팅 (2016 ~)</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </Container>
