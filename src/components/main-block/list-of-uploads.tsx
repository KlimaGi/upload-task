import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import localForage from 'localforage';

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
    <div>
      <Typography variant='body2'>List of uploads</Typography>

      <ul>
        {
          filesNames.length > 0 &&
          filesNames.map((name) => (
            <li key={name}>
              <span>{name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListOfUploads;
