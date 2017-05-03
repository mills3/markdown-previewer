import React, { Component } from 'react';
import './App.css';

const marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: `# *Mark* ~~Down~~\n---\n## Example\n *Italic*, **bold**, and \`monospace\`.
                \nItemized lists look like:
                * this one
                * that one
                * the other one`,
    }
  }

  handleChange = (e) => {
    this.setState({
      example: e.target.value
    });
  }

  markup() {
    const md = this.state.example;
    return {__html: marked(md)};
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Markdown Previewer</h1>
        <textarea className="input areas" onChange={this.handleChange} value={this.state.example}></textarea>
        <div className="output areas" dangerouslySetInnerHTML={this.markup()}></div>
      </div>
    );
  }
}

export default App;
