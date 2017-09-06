import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../../actions';
import './MemeItem.css';

class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    }
  }

  postMeme() {
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj);
  }

  render() {
    return (
      <div
        className="MemeItem"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={this.state.hovered ?
            "MemeItem-img darken"
            :
            "MemeItem-img"
          }
        />
        <p
          className={this.state.hovered ?
            "MemeItem-text"
            :
            "no-text"
          }>
          {this.props.meme.name}
        </p>
      </div>
    )
  }
}

export default connect(null, { createMeme })(MemeItem);