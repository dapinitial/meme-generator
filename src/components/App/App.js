import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from '../MemeItem/MemeItem';
import MyMemes from '../MyMemes/MyMemes';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to the meme generator</h2>
        <MyMemes />
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text0: event.target.value })}
            ></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text1: event.target.value })}
            ></FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem
                key={index}
                meme={meme}
                text0={this.state.text0}
                text1={this.state.text1}
              />
            )
          })
        }
        <div
          className="App-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }}
        >Load 10 more memes...</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);