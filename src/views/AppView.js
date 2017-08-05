import React from 'react';
import { connect } from 'react-redux';
import { appViewActions, SET_MARKER } from '../actions/appViewActions.js';
import { appViewSelector } from '../selectors/appViewSelector.js';
import { SimpleGoogleMap } from '../components/GoogleMap.jsx';
import { Button } from '../components/Button.jsx';
import { ActionButton } from '../components/ActionButton.jsx';
import { Input } from '../components/Input.jsx';

const marker = {
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }

export const AppView = connect(appViewSelector, appViewActions)((props) => {
    return (
      <div style={{  height: `100%`, flex: 1 }}>
          <Button onTouchTap={() => appViewActions[ SET_MARKER ](marker)} />
          <ActionButton onTouchTap={() => appViewActions[ SET_MARKER ](marker)} />
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
              markers = {props.markers}
          />
      </div>      
    )
})
