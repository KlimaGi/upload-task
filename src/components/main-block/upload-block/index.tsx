import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DropFileZone from './drop-file-zone';

type IUploadBlock = {
  uploadActive: boolean
}

const UploadBlock: React.FC<IUploadBlock> = ({ uploadActive }) => {
  const [expanded, setExpanded] = useState(uploadActive);

  useEffect(() => {
    setExpanded(true);
  }, [uploadActive]);

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

export default UploadBlock;