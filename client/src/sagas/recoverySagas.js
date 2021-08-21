import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';


export function* recoverySaga(action) {
    yield put({ type: ACTION.RECOVERY_PASSWORD_REQUEST });
    try {
      yield restController.recoveryPasswordRequest(action.data);
      action.history.replace('/');
      console.log(action.data);
      yield put({ type: ACTION.RECOVERY_PASSWORD_SEND_BY_MAIL });
    } catch (e) {
      yield put({ type: ACTION.RECOVERY_PASSWORD_ERROR, error: e.response });
    }
};

export function* changePassword(action){
  yield put({ type: ACTION.CHANGE_PASSWORD_REQUEST });
    try {
      yield restController.changePassword(action.data);
      console.log(action.data);
      yield put({ type: ACTION.CHANGE_PASSWORD_SUCCEED });
    } catch (e) {
      yield put({ type: ACTION.CHANGE_PASSWORD_ERROR, error: e.response });
    }
};
