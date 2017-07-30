import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { GOOGLE_API_KEY } from '../../config.js';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap ref = { props.onMapLoad }
    defaultZoom = { 3 }
    defaultCenter = {
        { lat: -25.363882, lng: 131.044922 }
    }
   >
    </GoogleMap>
));

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{  height: `100%`, flex: 1 }}>
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
