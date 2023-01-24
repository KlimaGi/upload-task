import { configureStore } from "@reduxjs/toolkit";
import fileChecker from '../features/file-checker/file-checker-slice';

export const store = configureStore({
  reducer: {
    filetype: fileChecker

  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

