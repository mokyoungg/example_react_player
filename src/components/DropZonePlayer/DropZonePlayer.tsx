import React from 'react';
import * as S from './DropZonePlayer.style';
import Player from 'components/Player/Player';
import DropZone from 'components/DropZone/DropZone';
import useDropZone from 'hooks/useDropZone';

const DropZonePlayer: React.FC = () => {
  const { dropZoneRef, isDragging, url } = useDropZone();

  return (
    <S.Wrap ref={dropZoneRef}>
      <S.PlayerContainer>
        <Player url={url} />
      </S.PlayerContainer>

      {isDragging && (
        <S.DropZoneContainer isDragging={isDragging}>
          <DropZone isDragging={isDragging} />
        </S.DropZoneContainer>
      )}
    </S.Wrap>
  );
};

export default DropZonePlayer;
