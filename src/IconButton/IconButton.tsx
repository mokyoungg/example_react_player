import React, { MouseEventHandler } from 'react';
import svgIcon from '../assets/index';
import * as S from './IconButton.style';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: keyof typeof svgIcon;
}

const IconButton: React.FC<Props> = ({ onClick, icon }) => {
  const SvgIcon = svgIcon[icon];

  return (
    <S.IconButton onClick={onClick}>
      <SvgIcon />
    </S.IconButton>
  );
};

export default IconButton;
