import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import localForage from 'localforage';
import PopupFile from './popup-file';
import { useAppSelector } from '../../../app/hooks';
import styles from './index-style.module.scss';

const PreviewUploadedFiles = () => {
  const appearValue = useAppSelector(state => state.appear.value);
  const [expanded, setExpanded] = useState(false);
  const [filesNames, setFilesNames] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [preview, setPreview] = useState(false);
  console.log('expanded', expanded);
  console.log('appearValue', appearValue);

  useEffect(() => {
    setExpanded(appearValue);
  }, [appearValue]);

  useEffect(() => {
    localForage.keys().then((keys) => {
      // An array of all the key names.
      return setFilesNames(keys as never);
    }).catch((err) => {
      console.log(err as Error);
    });
  }, [expanded]);

  const handlePrev = (currentFileIndex: number) => {
    if (currentFileIndex !== 0) setCurrentFileIndex(currentFileIndex - 1);
    else setCurrentFileIndex(0);
  }
  const handleNext = (currentFileIndex: number) => {
    if (currentFileIndex < filesNames.length - 1) setCurrentFileIndex(currentFileIndex + 1);
    else setCurrentFileIndex(filesNames.length - 1);
  }

  const handleDownload = () => {
    console.log('handle download');
  }

  return (
    <div className='box-paper'>
      <div className={`accordion ${!expanded && 'accordion--preview-block'} `}>
        {
          expanded &&
          <button className='btn' onClick={() => setExpanded(!expanded)}>
            <div className={expanded ? "" : 'hide-no-space'}>
              <Typography variant='body2'>Preview uploaded files</Typography>
            </div>
          </button>
        }

        {
          !expanded
          && <div>
            <div className={styles['preview-wrapper']}>
              <div className={styles['preview-file-name-container']}>

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
            <div className={styles['preview-block']}> </div>
          </div>
        }

        {
          !expanded
            ? <span onClick={() => setExpanded(!expanded)} className='accordion-row'>       <KeyboardArrowUpIcon />
            </span>
            : <span onClick={() => setExpanded(expanded)} className='accordion-row'>  <KeyboardArrowDownIcon />
            </span>
        }

      </div>
      {
        preview && <PopupFile
          fileName={filesNames[currentFileIndex]}
          setPreview={setPreview}
        />
      }
    </div>
  )
}

export default PreviewUploadedFiles;
