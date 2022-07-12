import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { BaseReactPlayerProps } from 'react-player/base';

const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [controlVisibleCount, setControlVisibleCount] = useState(0);
  const [isControlVisible, setIsControlVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

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
    (state) => {
      if (controlVisibleCount > 2) {
        setControlVisibleCount(0);
        setIsControlVisible(false);
      }

      if (isControlVisible && controlVisibleCount <= 2) {
        const newcontrolVisibleCount = controlVisibleCount + 1;
        setControlVisibleCount(newcontrolVisibleCount);
      }

      if (!isSeeking) {
        setPlayedTime(state.played);
      }
    },
    [controlVisibleCount, isSeeking],
  );

  const handleSeekChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayedTime(parseFloat(e.target.value));
  }, []);

  const handleSeekMouseDown = useCallback(() => {
    setIsSeeking(true);
  }, []);

  const handleSeekMouseUp = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    setIsSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.currentTarget.value));
  }, []);

  const showControl = useCallback(() => {
    setControlVisibleCount(0);
    setIsControlVisible(true);
  }, []);

  const hideControl = useCallback(() => {
    setControlVisibleCount(3);
    setIsControlVisible(false);
  }, []);

  return {
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
  };
};

export default usePlayer;
