import React from 'react';
import { SimpleGoogleMap } from '../components/googleMap.jsx';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        return (
          <div style={{  height: `100%`, flex: 1 }}>
            OLOLO
            <SimpleGoogleMap
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
