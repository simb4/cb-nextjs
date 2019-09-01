// @flow
import { actionTypes } from '../../constants';

export const setLocale = (locale) => ({
    type: actionTypes.SETLOCALE,
    payload: locale,
});
