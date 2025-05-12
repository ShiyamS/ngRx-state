import { Log } from './state';
import { createAction, props } from "@ngrx/store";


// To Load the logs from the server
export const logLoaded = createAction(
  "[Log List] Log Loaded"
)

export const logsSuccess = createAction(
  "[Log List] Log Success",
  props<{ payload: { logs: Log[], message?: string } }>()
);

export const logsError = createAction(
  "[Log List] Log Error"
)



// To Add the logs to the server
export const logAdd = createAction(
  "[Log Add] Log Add",
  props<{ log: Log }>()
);
export const logAddSuccess = createAction(
  "[Log Add] Log Add Success",
  props<{ payload: { log: Log, message?: string } }>()
);

export const logAddError = createAction(
  "[Log Add] Log Add Error",
  props<{ error: string }>()
);


// To Add the logs to the server
export const deleteLog = createAction(
  "[Log Delete] Log Delete",
  props<{ id: string }>()
);
export const deleteLogSuccess = createAction(
  "[Log Delete] Log Delete Success",
  props<{ payload: { id: string, message?: string } }>()
);

export const deleteLogError = createAction(
  "[Log Delete] Log Delete Error",
  props<{ error: string }>()
);



// To Update the logs to the server
export const logUpdate = createAction(
  "[Log Update] Log Update",
  props<{ log: Log }>()
)


export const logUpdateSuccess = createAction(
  "[Log Update] Log Update Success",
  props<{ payload: { log: Log, message?: string } }>()
);

export const logUpdateError = createAction(
  "[Log Update] Log Update Error",
  props<{ error: string }>()
);

