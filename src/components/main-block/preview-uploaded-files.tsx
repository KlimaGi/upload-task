import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import localForage from 'localforage';

const PreviewUploadedFiles = () => {
  const [expanded, setExpanded] = useState(false);
  const [filesNames, setFilesNames] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const handlePrev = (currentFileIndex: number) => {
    if (currentFileIndex !== 0) setCurrentFileIndex(currentFileIndex - 1);
  }

  const handleNext = (currentFileIndex: number) => {
    if (currentFileIndex < filesNames.length) setCurrentFileIndex(currentFileIndex + 1);
  }

  useEffect(() => {
    localForage.keys().then(function (keys: any) {
      // An array of all the key names.
      console.log("keys", keys);
      setFilesNames(keys);
    }).catch(function (err: any) {
      console.log(err);
    });
  }, [expanded]);

  // for getting item
  useEffect(() => {
    localForage.getItem('cloud.png').then(function (value) {
      // This code runs once the value has been loaded
      // from the offline store.
      console.log(value);
      console.log('value---', value);
    }).catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
  }, []);

  return (
    <div className='box-paper'>
      <div className={`accordion ${expanded && 'accordion--preview-block'} `}>
        {
          !expanded &&
          <button className='btn' onClick={() => setExpanded(!expanded)}>
            <div className={expanded ? 'hide-no-space' : ""}>
              <Typography variant='body2'>Preview uploaded files</Typography>
            </div>

          </button>
        }

        {
          expanded
          && <div>
            <div className='d-flex preview-wrapper'>
              <div className='preview-file-name-container'>

                <button onClick={() => handlePrev(currentFileIndex)}>
                  <KeyboardArrowLeftIcon sx={{ color: '#62727f', fontWeight: 100 }} />
                </button>

                <span>{filesNames[currentFileIndex]}</span>

                <button onClick={() => handleNext(currentFileIndex)}>
                  <KeyboardArrowRightIcon sx={{ color: '#62727f', fontWeight: 'light' }} />
                </button>

              </div>

              <div className='btn-container'>
                <button><PreviewOutlinedIcon sx={{ color: '#62727f' }} /></button>
                <button><FileDownloadOutlinedIcon sx={{ color: '#62727f' }} /></button>
              </div>
            </div>
            <div className='preview-block'> </div>
          </div>
        }

        {
          expanded
            ? <span onClick={() => setExpanded(!expanded)} className='accordion-row'> <KeyboardArrowUpIcon />  </span>
            : <span onClick={() => setExpanded(!expanded)} className='accordion-row'> <KeyboardArrowDownIcon /> </span>
        }

      </div>

    </div>
  )
}

export default PreviewUploadedFiles
