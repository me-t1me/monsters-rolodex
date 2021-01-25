import React , { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';

import { SearchBox } from './component/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super ();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone => respone.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log('error'));
  }

  render(){
    
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder = 'search monsters'
          handlechange = {e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
