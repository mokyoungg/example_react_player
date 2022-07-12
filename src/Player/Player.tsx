import React from 'react';
import ReactPlayer from 'react-player';
import * as S from './Player.style';
import usePlayer from './usePlayer';
import { formatTime } from 'utils/formatTime';

const Player: React.FC = () => {
  const {
    containerRef,
    playerRef,
    controlsRef,
    isPlaying,
    playedTime,
    totalTime,
    volume,
    isControlVisible,
    handlePlay,
    handleDuration,
    handleProgress,
    handleEndPlayer,
    handleVolume,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
    showControl,
    hideControl,
    handleFullScreen,
  } = usePlayer();

  return (
    <S.Wrapper>
      <div className="video-container">
        <S.PlayerWrapper>
          <S.PlayerContainer ref={containerRef} onMouseMove={showControl} onMouseLeave={hideControl}>
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

            <S.ControlsWrapper ref={controlsRef} isControlVisible={isControlVisible}>
              <S.ControlsContainer>
                <S.TimeAndScreenControls>
                  <S.PlayTime>
                    <span className="current-time">{formatTime(totalTime * playedTime)}</span> /{' '}
                    <span className="total-time">{formatTime(totalTime)}</span>
                  </S.PlayTime>

                  <S.VolumeAndScreenControlContainer>
                    <S.VolumeControlContainer>
                      <S.SpeakerIcon icon="speaker" />
                      <S.VolumeControl type="range" min={0} max={1} step="any" onChange={handleVolume} value={volume} />
                    </S.VolumeControlContainer>

                    <S.FullScreenButton icon="FullScreen" onClick={handleFullScreen} />
                  </S.VolumeAndScreenControlContainer>
                </S.TimeAndScreenControls>

                <S.ProgressBar
                  type="range"
                  min={0}
                  max={0.9999}
                  value={playedTime}
                  step="any"
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekMouseUp}
                  onMouseDown={handleSeekMouseDown}
                />
              </S.ControlsContainer>

              <S.PlayBtnWrap>
                <S.PlayButton icon={isPlaying ? 'videoPause' : 'videoPlay'} onClick={handlePlay} />
              </S.PlayBtnWrap>
            </S.ControlsWrapper>
          </S.PlayerContainer>
        </S.PlayerWrapper>
      </div>
    </S.Wrapper>
  );
};

export default Player;
