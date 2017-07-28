const prefixActions = 'APP_VIEW_';

export const ACTIVE_MAP = `${prefixActions}ACTIVE_MAP`;

export const appViewActions = {
    [ ACTIVE_MAP ]: (map) => ({
        type: ACTIVE_MAP,
        payload: {
            map
        }
    })
};
