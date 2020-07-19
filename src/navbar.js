import React, { Component } from 'react'
import { Input, Menu, Segment, Card } from 'semantic-ui-react'
import ArticleCard from './ArticleCard'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            activeItem: 'Blockchain news from news api',
            blockchain: [],
            usBusiness: []
        }
    }

    componentDidMount() {
        var blockchainNews = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-19&sortBy=publishedAt&apiKey=ca4a4baadd7545febb3ce11685cc3649';
        var req = new Request(blockchainNews);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    blockchain: data.articles
                })
                console.log(this.state.blockchain)
            })

        var usBusinessNews = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca4a4baadd7545febb3ce11685cc3649';
        var usBusinessNewsReq = new Request(usBusinessNews);
          fetch(usBusinessNewsReq)
            .then(response => response.json())
            .then(data => {
            // console.log(data);
                this.setState({
                usBusinessNews: data.articles
                })
                console.log(this.state.usBusinessNews)
            })
    }
    
    handleItemClick = (e, { name }) => { 
        this.setState({ activeItem: name })
    }

    render() {
        const blockchainCards = this.state.blockchain.map(
            (i, index) => {
            return (
              <ArticleCard
                key={index}
                image={i.urlToImage}
                header={i.title}
                meta={i.author}
                description={i.description}
                extra={i.publishedAt}
                onClick = {i.url}
              />
            )
            })
        
        const usBusinessNewsCards = this.state.usBusiness.map(
            (i, index) => {
            return (
                <ArticleCard
                key={index}
                image={i.urlToImage}
                header={i.title}
                meta={i.author}
                description={i.description}
                extra={i.publishedAt}
                onClick = {i.url}
                />
            )
            })
        
        const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing position="center">
          <Menu.Item 
            name='Blockchain news from news api'
            active={activeItem === 'Blockchain news from news api'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
            <div style={{ align: "justified"}}>
                <Card.Group>
                    {
                        activeItem === 'Blockchain news from news api' ?
                            blockchainCards : usBusinessNewsCards
                    }
                </Card.Group>
            </div>
        </Segment>
            
      </div>
    )
  }
}