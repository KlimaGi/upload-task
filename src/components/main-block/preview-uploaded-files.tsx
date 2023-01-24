import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import localForage from 'localforage';
import ClearIcon from '@mui/icons-material/Clear';

const PreviewUploadedFiles = () => {
  const [expanded, setExpanded] = useState(false);
  const [filesNames, setFilesNames] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [preview, setPreview] = useState(false);

  const handlePrev = (currentFileIndex: number) => {
    if (currentFileIndex !== 0) setCurrentFileIndex(currentFileIndex - 1);
    else setCurrentFileIndex(0);
  }
  const handleNext = (currentFileIndex: number) => {
    if (currentFileIndex < filesNames.length - 1) setCurrentFileIndex(currentFileIndex + 1);
    else setCurrentFileIndex(filesNames.length - 1);
  }

  useEffect(() => {
    localForage.keys().then(function (keys: any) {
      // An array of all the key names.
      setFilesNames(keys);
    }).catch(function (err: any) {
      console.log(err);
    });
  }, [expanded]);

  const handleDownload = () => {
    console.log('handle download');
  }

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
                <button onClick={() => setPreview(true)}>
                  <PreviewOutlinedIcon sx={{ color: '#62727f' }} />
                </button>
                <button onClick={() => handleDownload()}>
                  <FileDownloadOutlinedIcon sx={{ color: '#62727f' }} /></button>
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
      {
        preview && <div className='module--wrapper'>
          <div className='popup-window'>

            <div className='popup--file-name'>
              <span>{filesNames[currentFileIndex]}</span>
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
      }
    </div>
  )
}

export default PreviewUploadedFiles
