import React, { Component } from 'react'
import Border from './components/Border'
import Card from './components/Card'
import Heading from './components/Heading'
import Headingtext from './components/Headingtext'
import './App.css'


export class App extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <Border/>
        <Headingtext/>
        <div className='gridParent'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}

export default App
