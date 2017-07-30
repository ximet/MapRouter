import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

export const SimpleGoogleMap = withGoogleMap(props => (
  <GoogleMap ref = { props.onMapLoad }
    defaultZoom = { 3 }
    defaultCenter = {
        { lat: -25.363882, lng: 131.044922 }
    }
   >
    </GoogleMap>
));