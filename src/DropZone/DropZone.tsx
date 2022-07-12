import React from 'react';
import * as S from './DropZone.style';
import useDropZone from './useDropZone';

const DropZone: React.FC = () => {
  const { isDragging, dropZoneRef } = useDropZone();

  return (
    <S.DropZone isDragging={isDragging} ref={dropZoneRef}>
      <S.Notice>Drag and drop the video file</S.Notice>
    </S.DropZone>
  );
};

export default DropZone;
