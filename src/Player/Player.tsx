import React from 'react';
import ReactPlayer from 'react-player';
import * as S from './Player.style';
import usePlayer from './usePlayer';
import Button from 'Button/Button';

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
    <S.Wrapper>
      <div className="video-container">
        <S.PlayerWrapper>
          <S.PlayerContainer ref={containerRef}>
            <ReactPlayer
              ref={playerRef}
              width="100%"
              height="100%"
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              playsinline
              playing={isPlaying}
              volume={volume}
              onProgress={handleProgress}
              onDuration={handleDuration}
              onEnded={handleEndPlayer}
            />
          </S.PlayerContainer>

          <Button onClick={handlePlay} icon={isPlaying ? 'videoPause' : 'videoPlay'} />
        </S.PlayerWrapper>
      </div>
    </S.Wrapper>
  );
};

export default Player;
