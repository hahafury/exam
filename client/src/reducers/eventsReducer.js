import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  eventsModeView: CONSTANTS.EVENTS_INFO_MODE,
  isAddEvent: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.CHANGE_EVENTS_MODE_VIEW: {
      return {
        ...state,
        eventsModeView: action.data,
      };
    }
    case ACTION.CHANGE_ADD_EVENTS_MODE_ON_EVENTS_PAGE: {
      return {
        ...state,
        isAddEvent: action.data,
      };
    }
    default:
      return state;
  }
}
