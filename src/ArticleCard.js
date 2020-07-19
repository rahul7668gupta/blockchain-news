import React from 'react'
import { Card } from 'semantic-ui-react'

const ArticleCard = (props) => (
  <a href={props.onClick} target="_blank" rel="noopener noreferrer">
    <Card
    image={props.image}
    header={props.title}
    meta={props.author}
    description={props.description}
    extra={props.extra}
      />
  </a>
)

export default ArticleCard