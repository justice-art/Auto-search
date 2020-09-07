import React from 'react';
import SearchContent from './searchContent.js';

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            showingSearch: false
        };
    }

    toggleSearch(e) {
        e.preventDefault();
        this.setState(prevState => ({
            showingSearch: !prevState.showingSearch
        }));
    }

    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.toggleSearch(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <SearchContent toggleSearch = {this.toggleSearch.bind(this)}/>
                </div>
            </header>
        );
    }
}

