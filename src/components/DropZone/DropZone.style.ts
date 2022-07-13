import styled, { css } from 'styled-components';

const grayOpacity = 'rgba(241, 241, 241, 0.4)';
export const gray = '#D8D8D8';

export const DropZone = styled.div<{ isDragging: boolean }>`
  width: 92%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  border-radius: 16px;

  ${({ isDragging }) =>
    isDragging &&
    css`
      background: ${grayOpacity};
      border: 2px dashed gray;
    `}
`;

export const Notice = styled.p`
  font-size: 16px;
  color: #101010;
`;
