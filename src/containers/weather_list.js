import React, { Component} from 'react';
import { connect } from 'react-redux';

// import Chart component
import Chart from '../components/chart';
// import GoogleMap component
import GoogleMap from '../components/google_map';

// create WeatherList class component
class WeatherList extends Component {
    
    // create renderWeather function which gets cityData as props 
    renderWeather(cityData){
        
        // store city name as const
        const name = cityData.city.name;
        // get required data to draw the chart by mapping over api data to create 3 arrays for temps, pressures, humidities
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273); // convert from Kelvin to C
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //destructuring using es6
        const { lon, lat } = cityData.city.coord;
        
        
        
        // call Googemap and Chart components to render map and temp, pressure & humidity charts passing in above arrays as props
        return (
        
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="C"/></td>
                <td><Chart data={pressures} color="green" units="hPA"/></td>
                <td><Chart data={humidities} color="black" units = "%"/></td>
            </tr>
        );
        
    }

    render() {
        
        return (
    
        <table className="table table-hover">
            <thead>
             <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPA)</th>
              <th>Humidity (%)</th> 
             </tr>
            </thead>
            <tbody>
             {this.props.weather.map(this.renderWeather)}
            </tbody>
           </table>
     );
  }
}



function mapStateToProps( { weather }){

    return { weather }; // {weather } is es6 === { weather: weather};
}

// connect component to application state 
export default connect(mapStateToProps)(WeatherList);