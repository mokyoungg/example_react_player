import styled from 'styled-components';

const purple = '#785CFF';
const gray = '#505057';

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
