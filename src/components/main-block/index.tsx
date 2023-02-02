import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import UploadBlock from './upload-block';
import PreviewUploadedFiles from './preview-uploaded-files';
import ListOfUploads from './list-of-uploads';
import TypeOfDocuments from './type-of-documents';
import styles from './index-style.module.scss';


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
          width: '95%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }
        }}
      >

        <div className={styles['left-box']}>
          <TypeOfDocuments />
          {
            uploadActive &&
            <div className='container'>
              <ListOfUploads setUploadActive={setUploadActive} uploadActive={uploadActive} />
            </div>
          }
        </div>

        <div className={styles['right-box']}>
          <div>
            <UploadBlock />
          </div>
          <div>
            <PreviewUploadedFiles />
          </div>
        </div>


      </Paper>
    </Box>
  )
}

export default MainBlock;
