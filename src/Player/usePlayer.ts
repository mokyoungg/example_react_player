import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { BaseReactPlayerProps } from 'react-player/base';

const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleDuration = useCallback((duration: number) => {
    setTotalTime(duration);
  }, []);

  const handleEndPlayer = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  }, []);

  const handleProgress: BaseReactPlayerProps['onProgress'] = useCallback(
    (state: { played: React.SetStateAction<number> }) => {
      if (!isSeeking) {
        setPlayedTime(state.played);
      }
    },
    [isSeeking],
  );

  const handleSeekChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayedTime(parseFloat(e.target.value));
  }, []);

  const handleSeekMouseDown = useCallback(() => {
    setIsSeeking(true);
  }, []);

  const handleSeekMouseUp = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.currentTarget.value));
  }, []);

  return {
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
  };
};

export default usePlayer;
