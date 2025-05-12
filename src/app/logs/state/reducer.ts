import { Action, createReducer, on } from "@ngrx/store";
import { initialState, LogsState } from "../state/state";
import * as actions from './action';

const _reducer = createReducer(
  initialState,
  on(actions.logLoaded, (state) => ({
    ...state, loading: { ...state.loading, list: true }
  })),
  on(actions.logsSuccess, (state, { payload }) => ({
    ...state, logs: [...state.logs, ...payload.logs], loading: { ...state.loading, list: false }
  })),
  on(actions.logAdd, (state) => ({
    ...state, loading: { ...state.loading, add: true }
  })),
  on(actions.logAddSuccess, (state, { payload }) => ({
    ...state, logs: [...state.logs, payload.log], loading: { ...state.loading, add: false }
  })),
  on(actions.deleteLog, (state) => ({
    ...state, loading: { ...state.loading, add: true }
  })), // This is for delete log
  on(actions.deleteLogSuccess, (state, { payload }) => ({
    ...state, logs: state.logs.filter((log) => log.id !== payload.id), loading: { ...state.loading, add: false }
  })),
  on(actions.logUpdate, (state) => ({
    ...state, loading: { ...state.loading, add: true }
  })), // This is for update log
  on(actions.logUpdateSuccess, (state, { payload }) => ({
    ...state, logs: state.logs.map((log) => (log.id === payload.log.id ? { ...log, ...payload.log } : log)), loading: { ...state.loading, add: false }
  })),
);


export const logsReducer = (state: LogsState, action: Action) => {
  return _reducer(state, action);
}
