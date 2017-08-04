import React from 'react';
import { SimpleGoogleMap } from '../components/GoogleMap.jsx';
import { Button } from '../components/Button.jsx';
import { ActionButton } from '../components/ActionButton.jsx';
import { Input } from '../components/Input.jsx';

class AppView extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        return (
          
          <div style={{  height: `100%`, flex: 1 }}>
            <Button />
            <ActionButton />
            <Input />
            <SimpleGoogleMap
              containerElement={
                <div style={{ height: `80%` }} />
              }
              mapElement={
                <div style={{ height: `80%` }} />
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
