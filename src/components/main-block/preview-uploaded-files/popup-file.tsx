import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

type IPopupFile = {
  fileName: string,
  setPreview: Function
}

const PopupFile: React.FC<IPopupFile> = ({ fileName, setPreview }) => {
  return (
    <div className='module--wrapper'>
      <div className='popup-window'>

        <div className='popup--file-name'>
          <span>{fileName}</span>
        </div>

        <div className='popup--content'>
          <div className='popup-pages'></div>
          <div className='popup-pages'></div>
          <div className='popup-pages'></div>

        </div>

      </div>
      <div>
        <button
          className='popup--x'
          onClick={() => setPreview(false)}>
          <ClearIcon sx={{ color: '#62727f' }} />
        </button>
      </div>
    </div>
  )
}

export default PopupFile;
