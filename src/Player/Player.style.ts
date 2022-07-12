import styled from 'styled-components';
import IconButton from 'IconButton/IconButton';

const purple = '#785CFF';
const gray = '#505057';

export const Wrapper = styled.div`
  max-width: 580px;

  .video-container {
    position: relative;
    padding-top: 56.25%;
  }
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  video {
    object-fit: fill;
  }
`;

export const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
`;

export const ControlsWrapper = styled.div<{ isControlVisible: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  visibility: ${({ isControlVisible }) => (isControlVisible ? 'visible' : 'hidden')};
`;

export const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

export const TimeAndScreenControls = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const PlayTime = styled.div`
  color: #fff;
`;

export const ProgressBar = styled.input<{ value: number }>`
  width: 100%;
  height: 8px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: ${({ value }) =>
    `linear-gradient(to right, ${purple} 0%, ${purple} ${value * 100}%, ${gray} ${value * 100}%, ${gray} 100%);`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${purple};
    outline: none;
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${purple};
    border: none;
  }

  :focus {
    box-shadow: none;
  }
`;

export const VolumeAndScreenControlContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const VolumeControl = styled.input<{ value: number }>`
  display: none;
  width: 64px;
  height: 4px;
  border-radius: 8px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: ${({ value }) =>
    `linear-gradient(to right, ${purple} 0%, ${purple} ${value * 100}%, ${gray} ${value * 100}%, ${gray} 100%);`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${purple};
    outline: none;
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${purple};
    border: none;
  }

  :focus {
    box-shadow: none;
  }
`;

export const VolumeControlContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;

  :hover ${VolumeControl} {
    display: block;
  }
`;

export const SpeakerIcon = styled(IconButton)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const FullScreenButton = styled(IconButton)`
  width: 24px;
  height: 24px;
`;

export const PlayButton = styled(IconButton)`
  width: 54px;
  height: 49px;
  overflow: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PlayBtnWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
