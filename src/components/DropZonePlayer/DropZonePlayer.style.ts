import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 580px;
  height: auto;
  position: relative;
`;

export const PlayerContainer = styled.div`
  /* position: relative;
  padding-top: 56.25%; */
`;

export const DropZoneContainer = styled.div<{ isDragging: boolean }>`
  width: 100%;
  inset: 0;
  position: absolute;
  top: 0;
  z-index: ${({ isDragging }) => (isDragging ? 10 : 0)};
`;
