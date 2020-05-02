import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        return(
            <div className="tc">
                <SearchBar searchChange={ this.onSearchChange }/>
                <CardList robots={ filteredRobots }/>
            </div>
        );
    }
}

export default App;