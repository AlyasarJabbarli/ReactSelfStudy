import React, { Component } from 'react'
import Person from './Person'

export class App extends Component {
  render() {
    let x = 'Salam'
    return (
      <div className='' style={{color: 'red' , fontSize: '40px'}}>
        <h1>Helloo World</h1>
        <label htmlFor=''></label>
        <h2>{x}</h2>
        <input type={'text'} />
        <Person />
      </div>
    )
  }
}

export default App
