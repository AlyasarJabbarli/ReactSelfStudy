import React, { Component } from 'react'
let y ="mashin";

export class Person extends Component {
    state ={
        firstName: 'Ehmed',
        lastName: 'Memmedov',
        car: '',
        user : ''
    }
    getFullName(){
        return this.state.firstName + " " + this.state.lastName
    }
    stateChange(){
      //y = "car" //olmaz
      this.setState({
        lastName: 'Ehmedov'
      })
    }
    userDeyish(e){
      this.setState({
        // user: e.target.value
        [e.target.name]: e.target.value
      })
    }
  render() {
    return (
      <div>
        <h2>{this.state.firstName}</h2>
        <h2>{this.state.lastName}</h2>
        <h2>{this.state.car}</h2>
        <h2>{this.state.user}</h2>
        <p>{y}</p>
        <button onClick={()=>this.setState({firstName : 'Memmed'})}>Change</button>
        <button onClick={this.stateChange.bind(this)}>Change 2</button>
        <h2>{this.getFullName()}</h2>
        <input type="text" placeholder='car' onChange={(e)=>this.setState({car : e.target.value})}/>
        <input type="text" placeholder='user' name='user' onChange={this.userDeyish.bind(this)}/>
        <input type="text" placeholder='car' name='car' onChange={this.userDeyish.bind(this)}/>

      </div>
    )
  }
}

export default Person
