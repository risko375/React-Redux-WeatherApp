// import React
import React, {Component} from 'react';
// import connect from react-redux library 
import {connect} from 'react-redux';
// import bindActionCreators from redux library
import { bindActionCreators } from 'redux';

//import fetchWeather action creator 
import { fetchWeather} from '../actions/index'

// create SearchBar class component
class SearchBar extends Component {

    constructor(props){
    
        super(props);
        
        // set initial state to empty string
        this.state = { term: ''};
        
        // passing functions as callbacks referencing 'this' so bind to 'this'
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange (event) {
    
        //console.log(event.target.value);
        // change state when user inputs search terms
        this.setState({ term: event.target.value})
    }
    
    onFormSubmit(event){
        
        // prevents browser submitting form - don't want standard form functionality
        event.preventDefault();
        
        // Fetch weather data by calling action creator
        this.props.fetchWeather(this.state.term);
        // clear search term in input field by resetting component state
        this.setState({ term: '' });
    }
    
    render() {
    
        return (
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
                placeholder="Get a five-day forecast in your favourite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
            />
            
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
        
        );
    }
}


function mapDispatchToProps(dispatch){
    // allows returned action from fetchWeather to be dispatched to middleware then reducers
    return bindActionCreators({ fetchWeather }, dispatch);
}

// hook up the fetchWeather action creator to the SearchBar container 
// first argument is null as component doesn't require access to application state
export default connect(null, mapDispatchToProps)(SearchBar);