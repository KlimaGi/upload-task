import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface FileTypeState {
  value: string
}

const initialState: FileTypeState = {
  value: 'pdf'
}

export const fileCheckerSlice = createSlice({
  name: 'filetype',
  initialState,
  reducers: {
    setPdf: state => {
      state.value = 'pdf'
    },
    unsetPdf: state => {
      state.value = 'other'
    },
    setByUpload: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPdf, unsetPdf, setByUpload } = fileCheckerSlice.actions;

export const selectType = (state: RootState) => state.filetype.value;

export default fileCheckerSlice.reducer;