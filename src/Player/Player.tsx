import React from 'react';
import ReactPlayer from 'react-player';
import * as S from './Player.style';
import usePlayer from './usePlayer';

const Player: React.FC = () => {
  const {
    containerRef,
    playerRef,
    isPlaying,
    playedTime,
    totalTime,
    volume,
    handlePlay,
    handleDuration,
    handleProgress,
    handleEndPlayer,
    handleVolume,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
  } = usePlayer();

  return (
    <S.PlayerWrapper>
      <S.PlayerContainer ref={containerRef}>
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          playsinline
          playing={isPlaying}
          volume={volume}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onEnded={handleEndPlayer}
        />
      </S.PlayerContainer>
    </S.PlayerWrapper>
  );
};

export default Player;
