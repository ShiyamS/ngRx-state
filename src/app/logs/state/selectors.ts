
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LogsState } from "./state";



// Old
// export const logs = (state: LogsState) => state.logs;

// Inbuild functionfor selectors
const logsFeature = createFeatureSelector<LogsState>('logs');
export const logs = createSelector(logsFeature, (state) => state.logs);

export const selectIsLoadingList = createSelector(
  logsFeature,
  (logsState: LogsState) => logsState.loading.list
);

export const selectIsLoadingAdd = createSelector(
  logsFeature,
  (logsState: LogsState) => logsState.loading.add
);
