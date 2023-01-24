import React, { MouseEventHandler } from 'react'

type IPopupClear = {
  handleRemoveAllPermanently: MouseEventHandler<HTMLButtonElement>,
  setShowPopup: Function
}

const PopupClear: React.FC<IPopupClear> = ({ handleRemoveAllPermanently, setShowPopup }) => {
  return (
    <div className='module--wrapper'>
      <div className='clear-module'>
        <p>Are you sure you want to delete all files? You'll have to start uploading process from the very beginning.</p>
        <div className='clear-module--btn-container'>

          <button
            className='green-btn green-btn--outline'
            onClick={() => setShowPopup(false)}>Cancel</button>
          <button
            className='green-btn green-btn--filled'
            onClick={handleRemoveAllPermanently}
          >Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default PopupClear;
