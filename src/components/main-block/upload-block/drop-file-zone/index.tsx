/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState, useCallback } from 'react';
import { DropZone } from './drop-zone';
import styles from './index-style.module.scss';

const DropFileZone = memo(() => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [filess, setFiless] = React.useState<File[] | FileList>([]);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = useCallback((files: File[] | FileList) => {
    setFiless(files);
  }, []);

  return (
    <div>
      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}>

        <div className={styles['accordion-item']}>
          <h4>Select files</h4>
          <p>
            Drop files here or click
            <button className={styles['btn-link']}>browse</button>
          </p>
          <img src='assets/select-file-img.jpg' alt='select file' />

        </div>

      </DropZone>
    </div>
  )
})

export default DropFileZone;