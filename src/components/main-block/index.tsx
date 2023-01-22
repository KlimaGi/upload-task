import React, { useState } from 'react';
import { Box, Paper, Typography, FormControl, Radio, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { UploadBlock } from './upload-block';
import PreviewUploadedFiles from './preview-uploaded-files';
import ListOfUploads from './list-of-uploads';

export const MainBlock = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('a');
  const [uploadActive, setUploadActive] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log('selectedValue', selectedValue);
  };

  const [selected, setSelected] = useState('');
  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    setSelectedValue('b');
    console.log('selectedValue', selectedValue);
  };


  return (
    <Box
      component="main"
      sx={{ flexGrow: 1 }}
      height="95vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Paper
        elevation={3}
        sx={{
          marginTop: "5.5rem",
          padding: "1rem",
          background: 'primary.light',
          borderRadius: '34px',
          height: '90%',
          width: '95%'
        }}
      >
        <div className='d-flex'>

          <div className='left-box'>
            <div className='container'>
              <Typography variant='body2'>Type of Documents</Typography>

              <div className='d-flex'>
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
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
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                  sx={{
                    color: theme.palette.primary.main,
                    '&.Mui-checked': {
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                />

                <FormControl sx={{ m: 1, minWidth: '82%', boxShadow: '-1px 3px 5px 1px #d7d9db', borderRadius: '8px' }}>

                  <Select
                    value={selected}
                    onChange={handleSelectChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ height: '2rem', borderRadius: '8px', }}
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

            <div className='container'>
              {/* get results list from uploadBlock */}
              {
                uploadActive &&
                <ListOfUploads uploadActive={uploadActive} />
              }


            </div>

          </div>
          {/* ------- right side --------- */}
          <div className='right-box'>

            <div className='upload-container'>
              <UploadBlock setUploadActive={setUploadActive} />
            </div>

            <div>
              <PreviewUploadedFiles />
            </div>




          </div>
        </div>

      </Paper>
    </Box>
  )
}

// veikia check radio & select as subselect, but need to add logic for forward logic

// pritaikyti plain css - ten kur corner case reikalingi mui, islaikyti paprastuma ir aiskuma projekto

// drag and drop logika
// upload files
// saugojimas su redux
// api call for person icon