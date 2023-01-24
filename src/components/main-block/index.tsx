import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import UploadBlock from './upload-block';
import PreviewUploadedFiles from './preview-uploaded-files';
import ListOfUploads from './list-of-uploads';
import TypeOfDocuments from './type-of-documents';

const MainBlock = () => {
  const [uploadActive, setUploadActive] = useState(true);

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
            <TypeOfDocuments />
            {
              uploadActive &&
              <div className='container'>
                <ListOfUploads setUploadActive={setUploadActive} uploadActive={uploadActive} />
              </div>
            }
          </div>

          <div className='right-box'>
            <div>
              <UploadBlock uploadActive={uploadActive} />
            </div>
            <div>
              <PreviewUploadedFiles uploadActive={uploadActive} />
            </div>
          </div>
        </div>

      </Paper>
    </Box>
  )
}

export default MainBlock;
