import React, { Component } from 'react';
import './App.css';
import Article from './Article.js'
import NewArticle from './components/NewArticle.js'

class App extends Component {

  componentDidMount() {
    window.fetch('/api/articles')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <Article/>
        <NewArticle/>
      </div>
    );
  }
}

export default App;
