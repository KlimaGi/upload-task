import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const PreviewUploadedFiles = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className='box-paper'>
      <div className={`accordion ${expanded && 'accordion--preview-block'} `}>
        {
          !expanded &&
          <button className='btn' onClick={() => setExpanded(!expanded)}>
            <div className={expanded ? 'hide-no-space' : ""}>
              <Typography variant='body2'>Preview uploaded files</Typography>
            </div>

          </button>
        }

        {
          expanded
          && <div>
            <div className='d-flex preview-wrapper'>
              <div className='preview-file-name-container'>
                <button><KeyboardArrowLeftIcon sx={{ color: '#62727f', fontWeight: 100 }} /></button>
                <span>Name of the file.pdf</span>
                <button><KeyboardArrowRightIcon sx={{ color: '#62727f', fontWeight: 'light' }} /></button>
              </div>
              <div className='btn-container'>
                <button><PreviewOutlinedIcon sx={{ color: '#62727f' }} /></button>
                <button><FileDownloadOutlinedIcon sx={{ color: '#62727f' }} /></button>
              </div>
            </div>
            <div className='preview-block'> </div>
          </div>
        }

        {
          expanded
            ? <span onClick={() => setExpanded(!expanded)} className='accordion-row'> <KeyboardArrowUpIcon />  </span>
            : <span onClick={() => setExpanded(!expanded)} className='accordion-row'> <KeyboardArrowDownIcon /> </span>
        }

      </div>

    </div>
  )
}

export default PreviewUploadedFiles
