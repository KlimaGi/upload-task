import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import localForage from 'localforage';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PopupClear from './popup-clear';
import { useAppSelector } from '../../../app/hooks';
import styles from './index-style.module.scss';

type IListOfUploads = {
  setUploadActive: (arg0: boolean) => void,
  uploadActive: boolean
}

const ListOfUploads: React.FC<IListOfUploads> = ({ setUploadActive, uploadActive }) => {
  const appearValue = useAppSelector(state => state.appear.value);
  const currentFileIndex = useAppSelector(state => state.mainFileIndex.value);
  const [filesNames, setFilesNames] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [toggle, setToggle] = useState(true);
  const currentLiStyle = (i: number) => currentFileIndex === i ? 'list-item-active' : 'list-item';

  useEffect(() => {
    localForage.keys().then((keys: string[]) => {
      setFilesNames(keys);
    }).catch((err) => {
      console.log(err as Error);
    });
  }, [toggle, uploadActive]);

  useEffect(() => { setToggle(appearValue) }, [appearValue])

  const handleRemoveItem = (name: string) => {
    localForage.removeItem(name).then(() => {
      console.log('Key is cleared!');
    }).catch((err) => {
      console.log(err as Error);
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
      <ul className={styles.ul}>
        {
          filesNames.length > 0 &&
          filesNames.map((name, i) => (
            <div className='d-flex'>

              <li className={styles[currentLiStyle(i)]} key={name}>
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
              {
                i === currentFileIndex
                  ? <span className={styles.main}>Main</span>
                  : <span className={styles['sub-text']}>Attachment</span>
              }

            </div>
          ))
        }
      </ul>
      <div className={styles['clear-btn-container']}>
        <button
          onClick={handleRemoveAll}
          className={styles['btn-clear']}
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
