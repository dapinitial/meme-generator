import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to the meme generator</h2>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <h4 key={index}>{meme.name}</h4>
            )
          })
        }
        <div
          className="App-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }}
        >Load 10 more memes...</div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);