import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { GOOGLE_API_KEY } from '../../config.js';

const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=${GOOGLE_API_KEY}`

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap ref = { props.onMapLoad }
    defaultZoom = { 3 }
    defaultCenter = {
        { lat: -25.363882, lng: 131.044922 }
    }
    googleMapURL = { googleMapURL } >
    </GoogleMap>
));


class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div >
            OLOLO
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              onMapLoad={()=>{}}
              onMapClick={()=>{}}
              onMarkerRightClick={()=>{}}
            />
          </div>
        )
    }
}

export default AppView;
