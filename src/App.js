import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchField } from './components/searchField/searchField.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		//declare latest state to monsters and searchfield
		const { monsters, searchField } = this.state;

		//disect monsters
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Inc</h1>
				<SearchField placeholder="search for monsters" handleChange={this.handleChange} />
				<CardList monsters={filteredMonsters}> </CardList>
			</div>
		);
	}
}
export default App;
