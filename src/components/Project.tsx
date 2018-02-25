import * as React from 'react'
import {Icon, Image, List, Segment} from 'semantic-ui-react'

export class Project extends React.Component<Props, {}> {
  render() {
    const {header, description, repos} = this.props
    return (
      <Segment>
        <List>
          <List.Item>
            <Image avatar src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
            <List.Content>
              <List.Header as="a" href={header.href} target="_blank">{header.title}</List.Header>
              <List.Description>
                <br/>
                <p>
                  {description}
                </p>
                {repos.map(({title, href}) => <Repository key={title} title={title} href={href}/>)}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    )
  }
}
const Repository: React.SFC<Link> = props => <a href={props.href}><Icon name="github" />{props.title}</a>

interface Props {
  header: Link
  description: string
  repos: Link[]
}

interface Link {
  title: string
  href: string
}
