import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';

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
          && <div className='list-item'>
            <div>
              Item list
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
