import { SET_MARKER } from '../actions/appViewActions.js';
import { initialState } from '../initials/appViewInitials.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_MARKER: {
            const { marker } = action.payload;

            return state.push(marker);
        }

        default: {
            return state;
        }
    }
}