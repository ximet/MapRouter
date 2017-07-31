import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
          <MuiThemeProvider>
          <div style={{  height: `100%`, flex: 1 }}>
            <Button />
            <ActionButton />
            <Input />
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
          </MuiThemeProvider>
        )
    }
}

export default AppView;
