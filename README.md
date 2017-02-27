
A weather app created using React and Redux

User can enter a city name to receive a 5 day weather forecast with charts for temperature, pressure and humidity. City is shown on Googlemaps thumbnail.

The app makes an api request to openweathermap.org and presents the weather data using Sparklines charts.

The axios library is used to make the ajax request which returns a promise which is handled by redux-promise.

When the promise resolves redux-promise creates a new action containing the data which is passed to the reducers to update application state.
