import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { DropFileZone } from './drop-file-zone';

type IUploadBlock = {
  setUploadActive: Function
}

export const UploadBlock: React.FC<IUploadBlock> = ({ setUploadActive }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setUploadActive(true);
  }, [expanded]);

  return (
    <div className='box-paper' >
      <div className='accordion'>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          <span className={expanded ? 'hide' : ""}>
            Select more files for upload
          </span>

          {
            expanded
              ? <span> <KeyboardArrowUpIcon />  </span>
              : <span> <KeyboardArrowDownIcon /> </span>
          }

        </button>
        {
          expanded
          &&
          <DropFileZone />

        }
      </div>

    </div>

  );
}