import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!robots.length) ?
            <h1 className="tc">Loading</h1> :
            <div className="tc">
                <SearchBar searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundary>
                    
                </Scroll>
            </div>
    }
}

export default App;