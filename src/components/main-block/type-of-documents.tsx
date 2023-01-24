import React, { useState } from 'react';
import { Typography, FormControl, Radio, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setPdf, unsetPdf } from '../../features/file-checker/file-checker-slice';

const TypeOfDocuments = () => {
  const fileType = useAppSelector(state => state.filetype.value);
  const dispatch = useAppDispatch();

  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPdf());
  };

  const [selected, setSelected] = useState('');
  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    dispatch(unsetPdf());
  };



  return (
    <div className='container'>
      <Typography variant='body2'>Type of Documents</Typography>
      <div className='d-flex'>
        <Radio
          checked={fileType === 'pdf'}
          onChange={handleChange}
          value="pdf"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'PDF' }}
          sx={{
            color: theme.palette.primary.main,
            '&.Mui-checked': {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
        <div className='box-paper'>
          <span>PDF</span>
        </div>
      </div>
      <div className='d-flex'>
        <Radio
          checked={fileType === 'other'}
          onChange={handleChange}
          value="other"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'OTHER' }}
          sx={{
            color: theme.palette.primary.main,
            '&.Mui-checked': {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
        <FormControl sx={{ my: 1, borderRadius: '8px', flex: 1 }}>
          <Select
            value={selected}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ height: '2rem', borderRadius: '8px', boxShadow: '0 3px 5px 1px #d7d9db' }}
          >
            <MenuItem value="">
              <em>Other values</em>
            </MenuItem>
            <MenuItem value='1'>Other 1</MenuItem>
            <MenuItem value='2'>Other 2</MenuItem>
            <MenuItem value='3'>Other 3</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default TypeOfDocuments;
