import React, { MouseEventHandler } from 'react';
import styles from './popup-clear-style.module.scss';

type IPopupClear = {
  handleRemoveAllPermanently: MouseEventHandler<HTMLButtonElement>,
  setShowPopup: Function
}

const PopupClear: React.FC<IPopupClear> = ({ handleRemoveAllPermanently, setShowPopup }) => {
  return (
    <div className='module--wrapper'>
      <div className={styles['clear-module']}>
        <p>Are you sure you want to delete all files? You'll have to start uploading process from the very beginning.</p>
        <div className={styles['clear-module--btn-container']}>

          <button
            className={styles['green-btn--outline']}
            onClick={() => setShowPopup(false)}>Cancel</button>
          <button
            className={styles['green-btn--filled']}
            onClick={handleRemoveAllPermanently}
          >Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default PopupClear;
