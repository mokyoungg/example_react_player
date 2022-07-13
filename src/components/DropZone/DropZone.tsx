import React from 'react';
import * as S from './DropZone.style';

interface Props {
  isDragging: boolean;
}

const DropZone: React.FC<Props> = ({ isDragging }) => {
  return (
    <S.DropZone isDragging={isDragging}>
      <S.Notice>Drag and drop the video file</S.Notice>
    </S.DropZone>
  );
};

export default DropZone;
