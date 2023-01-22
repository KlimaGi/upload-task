import React, { memo, PropsWithChildren } from 'react';

export interface FileListProps {
  files: File[]
}

export const FileList = memo(
  (props: PropsWithChildren<FileListProps>) => (
    <ul>
      {props.files.map((file: File) => (
        <li key={`${file.name}`}>
          <span>{file.name}</span>
        </li>
      ))}
    </ul>
  )
)

FileList.displayName = 'FileList';