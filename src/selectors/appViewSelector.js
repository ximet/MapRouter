import { createSelector } from 'reselect';

const getMarkers = state => state.appViewReducer.get('markers');

export const appViewSelector = createSelector(
    [
        getMarkers
    ],
    ( markers ) => {
        return {
            markers
        };
    }
);