import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

export default class NewArticle extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      color: '',
      material: '',
      category: '',
      brand: '',
      subcategory: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    // alert(this.state.description);
    event.preventDefault();
    // const data = new FormData(event.target);
    let info = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: this.state.description,
        color: this.state.color,
        material: this.state.material,
        category: this.state.category,
        brand: this.state.brand,
        subcategory: this.state.subcategory
      })
    }
    fetch('/api/articles', info)
  }

  render() {
    let subcategory;
    if (this.state.category !== ''){
      subcategory =
        <label>Sub-category:
          {this.state.category === "top" ? (
            <select value={this.state.value} name="subcategory" onChange={this.handleChange}>
              <option value=""></option>
              <option value="t-shirt">T-shirt</option>
              <option value="blouse">Blouse</option>
              <option value="tank">Tank</option>
            </select>
          ) : (
            <select value={this.state.value} name="subcategory" onChange={this.handleChange}>
              <option value=""></option>
              <option value="jeans">Jeans</option>
              <option value="shorts">Shorts</option>
              <option value="skirt">Skirt</option>
            </select>
          )}
          <br/>
        </label>
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Category:
          <select value={this.state.value} name="category" onChange={this.handleChange}>
            <option value=""></option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>
        <br/>

        {subcategory}

        <label>
          Description:
          <input type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <br/>

        <label>
          Color:
          <select value={this.state.value} name="color" onChange={this.handleChange}>
            <option value=""></option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <br/>

        <label>
          Material:
          <select value={this.state.value} name="material" onChange={this.handleChange}>
            <option value=""></option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
            <option value="linen">Linen</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
