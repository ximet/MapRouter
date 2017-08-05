const prefixActions = 'APP_VIEW_';

export const SET_MARKER = `${prefixActions}SET_MARKER`;

export const appViewActions = {
    [ SET_MARKER ]: (marker) => ({
        type: SET_MARKER,
        payload: {
            marker
        }
    })
};
