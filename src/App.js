import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import './App.css';

// Icons
import { HiOutlineSearch } from 'react-icons/hi';
import { HiMenuAlt4 } from 'react-icons/hi';

class App extends Component {
  constructor() {
    super();

    this.state = {
      planten: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/luukvanettinger/plantenData/users')
    .then(response => response.json())
    .then(users => this.setState({planten: users }));
  }

  render() {
    const { planten, searchField } = this.state;
    const filteredPlanten = planten.filter(plant =>
      plant.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
    <div className="App">
      <div className="navbar">
        <ul>
          <li><a className="logo" href="./index.html">luuk</a></li>
          <li className="menu"><HiMenuAlt4 size={26} /></li>
          <li className="search"><HiOutlineSearch size={21} padding-left='-5vw' /></li>
          <li>
        <input 
          type='search' 
          placeholder='search planten' 
          onChange={ e => this.setState({ searchField: e.target.value }) } 
        /></li>
        </ul>
      </div>
      <Cardlist planten={filteredPlanten} />
    </div>
    )
  }
}

export default App;

