import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import localForage from 'localforage';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PopupClear from './popup-clear';
import { useAppSelector } from '../../../app/hooks';

type IListOfUploads = {
  setUploadActive: Function,
  uploadActive: boolean
}

const ListOfUploads: React.FC<IListOfUploads> = ({ setUploadActive, uploadActive }) => {
  const appearValue = useAppSelector(state => state.appear.value);
  const [filesNames, setFilesNames] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    localForage.keys().then((keys: string[]) => {
      setFilesNames(keys);
    }).catch(function (err: any) {
      console.log(err);
    });
  }, [toggle, uploadActive]);

  useEffect(() => { setToggle(appearValue) }, [appearValue])

  const handleRemoveItem = (name: string) => {
    localForage.removeItem(name).then(() => {
      console.log('Key is cleared!');
    }).catch(function (err) {
      console.log(err);
    });
    setToggle(!toggle);
  }

  const handleRemoveAll = () => {
    setShowPopup(true);
  }
  const handleRemoveAllPermanently = () => {
    setShowPopup(false);

    localForage.clear().then(function () {
      console.log('Database is now empty.');
    }).catch(function (err) {
      console.log(err);
    });

    setUploadActive(false);
  }

  return (
    <div>
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
