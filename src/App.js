import React, { Component } from 'react';
import './App.css';

const marked = require('marked');
const example = `# *Mark* ~~Down~~\n---\n## Example\n *Italic*, **bold**, and \`monospace\`.`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleText: example
    }
  }

  handleChange = (e) => {
    this.setState({
      exampleText: e.target.value
    });
  }

  markup() {
    const md = this.state.exampleText;
    return {__html: marked(md)};
  }

  clearExample = () => {
    this.setState({exampleText: ''})
  }

  resetExample = () => {
    this.setState({exampleText: example})
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Markdown Previewer</h1>
        <div className="btnsContainer">
          <button className="clearBtn" onClick={this.clearExample}>Clear</button>
          <button className="resetBtn" onClick={this.resetExample}>Reset</button>
        </div>
        <textarea className="input areas" onChange={this.handleChange} value={this.state.exampleText}></textarea>
        <div className="output areas" dangerouslySetInnerHTML={this.markup()}></div>
        <a className="githubLink" href="https://github.com/mills3/markdown-previewer" target="_blank">
          <img className="profileImage" src={require('./images/profileImage.png')} alt="" />
          See the code on Github.
        </a>
      </div>
    );
  }
}

export default App;
