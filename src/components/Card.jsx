import React, { Component } from 'react'
import './Card.css'
import Cardbottom from './Cardbottom'
import Cardtop from './Cardtop'

export class Card extends Component {
  render() {
    return (
      <div>
            <div className="card">
                <Cardtop />
                <Cardbottom />
            </div>
      </div>
    )
  }
}

export default Card
