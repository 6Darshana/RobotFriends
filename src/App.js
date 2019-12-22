import React from 'react';
import Card from './Component/Card/card.js';
import {CardList} from './Component/CardList/cardlist.js';
import './App.css';

 class App extends React.Component{
  constructor(){
    super()
    this.state={users:[],searchField:""}
  }
 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>this.setState({users:data},console.log(this.state.users)));
 }
 render()
 {
  console.log(this.state.users)
  const filterRobot=this.state.users.filter(users=>{
    return users.name.toLowerCase().includes(this.state.searchField)
  });
  return(
    <div className="App">
    <h1 id='title'>ROBO FRIENDS</h1>
    <input onChange={(e)=>this.setState({searchField:e.target.value})} type="text" placeholder="Search Robots"/>
    <CardList users={filterRobot}/>
    </div>
    );
 }
}

export default App;
