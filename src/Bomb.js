// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super ();
        this.state = {
            secondsLeft: props.initialCount,
        }
    }
    render() {
        if (this.state.secondsLeft === 0) {
          return <h3>Boom!</h3>;
        } else {
          return <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>;
        }
      }
}
