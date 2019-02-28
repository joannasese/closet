import React, { Component } from 'react';
// import NewArticle from './components/NewArticle.js'

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    fetch('/api/articles')
      .then((resp) => {return resp.json()})
      .then((data) => {this.setState( { articles: data })})
  }

  render(){
    let articles = this.state.articles.map( (article) => {
      return(
        <div key={article.id}>
        <h1>{article.description}</h1>
        </div>
      )
    })
    return (
      <div>
        {articles}
      </div>
    )
  }
}
