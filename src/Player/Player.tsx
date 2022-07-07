import React from 'react';
import ReactPlayer from 'react-player';
import * as S from './Player.style';

const Player: React.FC = () => {
  return (
    <S.PlayerWrapper>
      <S.PlayerContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </S.PlayerContainer>
    </S.PlayerWrapper>
  );
};

export default Player;
