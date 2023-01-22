import React, { memo, useState, useCallback } from 'react';
import { DropZone } from './drop-zone';

export const DropFileZone = memo(() => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = useCallback((files: File[]) => {
    setFiles(files);
    console.log('files--', files);
  }, []);

  return (
    <div>
      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}>

        <div className='accordion-item'>
          <h4>Select files</h4>
          <p>Drop files here or click <button className='btn-link'>browse</button> </p>
          <img src='assets/select-file-img.jpg' alt='select file' />
        </div>

      </DropZone>
    </div>
  )
})

DropFileZone.displayName = 'DropFileZone';