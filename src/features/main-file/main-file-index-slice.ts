import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface MainFileIndexState {
  value: number
}

const initialState: MainFileIndexState = {
  value: 0
}

export const mainFileIndexSlice = createSlice({
  name: 'mainFileIndex',
  initialState,
  reducers: {
    nextIndex: state => {
      state.value += 1
    },
    prevIndex: state => {
      state.value -= 1
    },
    setByClick: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { nextIndex, prevIndex, setByClick } = mainFileIndexSlice.actions;

export const selectIndex = (state: RootState) => state.mainFileIndex.value;

export default mainFileIndexSlice.reducer;