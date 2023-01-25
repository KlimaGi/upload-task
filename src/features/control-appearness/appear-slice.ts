import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface AppearState {
  value: boolean
}

const initialState: AppearState = {
  value: true
}

export const appearSlice = createSlice({
  name: 'appear',
  initialState,
  reducers: {
    setAppear: state => {
      state.value = true
    },
    unsetAppear: state => {
      state.value = false
    },
    setByUpload: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAppear, unsetAppear, setByUpload } = appearSlice.actions;

export const selectType = (state: RootState) => state.appear.value;

export default appearSlice.reducer;