import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function UploadBlock() {
  const [expanded, setExpanded] = React.useState(false);



  return (
    <div className='box-paper' >
      <div className='acordion'>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          <span>Select more files for upload</span>
          {
            expanded
              ? <span> <KeyboardArrowUpIcon />  </span>
              : <span> <KeyboardArrowDownIcon /> </span>
          }

        </button>

        {
          expanded && <div className='acordion-item'>
            <h4>Select files</h4>
            <p>Drop files here or click browse</p>

          </div>
        }
      </div>

    </div>





  );
}