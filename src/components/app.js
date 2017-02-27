// import React
import React from 'react';
import { Component } from 'react';

// import created components
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

// export App component so it can be imported in index.js 
export default class App extends Component {
  render() {
    return (
      <div>
        
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
