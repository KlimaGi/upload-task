import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import localForage from 'localforage';

interface FileNameListState {
  value: string[]
}

const initialState: FileNameListState = {
  value: []
}

export const fileNameListSlice = createSlice({
  name: 'filenamelist',
  initialState,
  reducers: {
    addItemToList: state => {
      let arr: string[] = [];
      localForage.keys().then((keys: string[]) => {
        arr = [...keys];
      })
      state.value = [...arr];
    },
    unsetList: state => {
      state.value = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { unsetList, addItemToList } = fileNameListSlice.actions;

export const selectList = (state: RootState) => state.filenamelist.value;

export default fileNameListSlice.reducer;