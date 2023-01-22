import React, { memo, PropsWithChildren, useRef, useState, useCallback, useEffect } from 'react';

export interface DropZoneProps {
  onDragStateChange?: (isDragActive: boolean) => void
  onDrag?: () => void
  onDragIn?: () => void
  onDragOut?: () => void
  onDrop?: () => void
  onFilesDrop?: (files: File[]) => void
}

export const DropZone = memo(
  (props: PropsWithChildren<DropZoneProps>) => {
    const {
      onDragStateChange,
      onFilesDrop,
      onDrag,
      onDragIn,
      onDragOut,
      onDrop,
    } = props;

    const [isDragActive, setIsDragActive] = useState(false);
    const dropZoneRef = useRef<null | HTMLDivElement>(null);

    const handleDragIn = useCallback(
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        onDragIn?.();

        if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
          setIsDragActive(true);
        }
      },
      [onDragIn]
    );


    const handleDragOut = useCallback(
      (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
        event.preventDefault();
        event.stopPropagation();
        onDragOut?.();
        setIsDragActive(false);
      },
      [onDragOut]
    );

    const handleDrag = useCallback(
      (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
        event.preventDefault();
        event.stopPropagation();
        onDrag?.();
        if (!isDragActive) setIsDragActive(true);
      },
      [isDragActive, onDrag]
    );

    const mapFileListToArray = (files: FileList) => {
      const array = [];
      for (let i = 0; i < files.length; i++) {
        array.push(files.item(i))
      }
      return array;
    };

    const handleDrop = useCallback(
      (event) => {
        event.preventDefault()
        event.stopPropagation()

        setIsDragActive(false);
        onDrop?.();

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
          const files = mapFileListToArray(event.dataTransfer.files);

          onFilesDrop?.(files);
          event.dataTransfer.clearData();
        }
      },
      [onDrop, onFilesDrop]
    );

    useEffect(() => {
      onDragStateChange?.(isDragActive);
    }, [isDragActive]);

    useEffect(() => {
      const tempZoneRef = dropZoneRef?.current;
      if (tempZoneRef) {
        tempZoneRef.addEventListener('dragenter', handleDragIn)
        tempZoneRef.addEventListener('dragleave', handleDragOut)
        tempZoneRef.addEventListener('dragover', handleDrag)
        tempZoneRef.addEventListener('drop', handleDrop)
      }

      return () => {
        tempZoneRef?.removeEventListener('dragenter', handleDragIn)
        tempZoneRef?.removeEventListener('dragleave', handleDragOut)
        tempZoneRef?.removeEventListener('dragover', handleDrag)
        tempZoneRef?.removeEventListener('drop', handleDrop)
      }
    }, []);

    return (
      <div
        ref={dropZoneRef}>
        {props.children}
      </div>
    )
  }
)

DropZone.displayName = 'DropZone';