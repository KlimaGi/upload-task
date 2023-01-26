import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './popup-file-style.module.scss';

type IPopupFile = {
  fileName: string,
  setPreview: Function
}

const PopupFile: React.FC<IPopupFile> = ({ fileName, setPreview }) => {
  return (
    <div className='module--wrapper'>
      <div className={styles['popup-window']}>

        <div className={styles['popup--file-name']}>
          <span>{fileName}</span>
        </div>

        <div className={styles['popup--content']}>
          <div className={styles['popup-pages']}></div>
          <div className={styles['popup-pages']}></div>
          <div className={styles['popup-pages']}></div>

        </div>

      </div>
      <div>
        <button
          className={styles['popup--x']}
          onClick={() => setPreview(false)}>
          <ClearIcon sx={{ color: '#62727f' }} />
        </button>
      </div>
    </div>
  )
}

export default PopupFile;
