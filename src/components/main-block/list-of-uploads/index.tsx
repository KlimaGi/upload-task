import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import localForage from 'localforage';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PopupClear from './popup-clear';

type IListOfUploads = {
  uploadActive: boolean
}

const ListOfUploads: React.FC<IListOfUploads> = ({ uploadActive }) => {
  const [filesNames, setFilesNames] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localForage.keys().then((keys: string[]) => {
      // An array of all the key names.
      console.log("keys", keys);
      setFilesNames(keys);
    }).catch(function (err: any) {
      console.log(err);
    });
  }, [uploadActive]);

  const handleRemoveItem = (name: string) => {
    localForage.removeItem(name).then(() => {
      // Run this code once the key has been removed.
      console.log('Key is cleared!');
    }).catch(function (err) {
      console.log(err);
    });
  }

  const handleRemoveAll = () => {
    setShowPopup(true);
  }
  const handleRemoveAllPermanently = () => {
    setShowPopup(false);
    localForage.clear().then(function () {
      // Run this code once the database has been entirely deleted.
      console.log('Database is now empty.');
    }).catch(function (err) {
      console.log(err);
    });
  }


  return (
    <div className=''>
      <Typography variant='body2'>List of uploads</Typography>

      <ul className='ul'>
        {
          filesNames.length > 0 &&
          filesNames.map((name) => (
            <li className='list-item' key={name}>
              <span>{name}</span>

              <div className='btn-container'>
                <button >
                  <EditOutlinedIcon sx={{ color: '#62727f' }} />
                </button>
                <button
                  onClick={() => handleRemoveItem(name)}
                >
                  <DeleteOutlineOutlinedIcon sx={{ color: '#62727f' }} />
                </button>
              </div>

            </li>
          ))
        }
      </ul>
      <div className='clear-btn-container'>
        <button
          onClick={handleRemoveAll}
          className='btn-clear'
        >Clear all</button>
      </div>
      {
        showPopup && <PopupClear
          handleRemoveAllPermanently={handleRemoveAllPermanently}
          setShowPopup={setShowPopup}
        />

      }

    </div>
  )
}

export default ListOfUploads;
