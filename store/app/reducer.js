// @flow
import {SETLOCALE} from '../../constants/actionTypes'

export default (state='en-US', action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case SETLOCALE: {
            return {
                ...state,
                locale: payload,
            };
        }
    }

    return state;
};
