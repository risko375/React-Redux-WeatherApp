// import React library
import React from 'react';

// import Googlemaps library
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
    // calling Googlemaps component passing in props
    return(
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon }} />
            }
        />
    );
}