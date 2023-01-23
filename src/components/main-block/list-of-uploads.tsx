import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import localForage from 'localforage';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type IListOfUploads = {
  uploadActive: boolean
}

const ListOfUploads: React.FC<IListOfUploads> = ({ uploadActive }) => {
  const [filesNames, setFilesNames] = useState([]);

  useEffect(() => {
    localForage.keys().then(function (keys: any) {
      // An array of all the key names.
      console.log("keys", keys);
      setFilesNames(keys);
    }).catch(function (err: any) {
      // This code runs if there were any errors
      console.log(err);
    });
  }, [uploadActive])



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
                <button>
                  <EditOutlinedIcon sx={{ color: '#62727f' }} />
                </button>
                <button>
                  <DeleteOutlineOutlinedIcon sx={{ color: '#62727f' }} />
                </button>
              </div>

            </li>
          ))
        }
      </ul>
      <div className='clear-btn-container'>
        <button className='btn-clear'>Clear all</button>
      </div>

    </div>
  )
}

export default ListOfUploads;
