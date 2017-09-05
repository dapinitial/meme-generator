import React, { Component } from 'react';
import './MemeItem.css';

class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    }
  }

  render() {
    return (
      <div
        className="MemeItem"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
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

export default MemeItem;