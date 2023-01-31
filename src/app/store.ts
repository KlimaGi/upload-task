import { configureStore } from "@reduxjs/toolkit";
import fileChecker from '../features/file-checker/file-checker-slice';
import fileListReducer from '../features/file-name-list/file-name-list-slice';
import appearReducer from '../features/control-appearness/appear-slice';
import mainIndexReducer from '../features/main-file/main-file-index-slice';

export const store = configureStore({
  reducer: {
    filetype: fileChecker,
    filenamelist: fileListReducer,
    appear: appearReducer,
    mainFileIndex: mainIndexReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

