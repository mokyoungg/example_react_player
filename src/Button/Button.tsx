import React, { MouseEventHandler } from 'react';
import svgIcon from '../assets/index';
import * as S from './Button.style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: keyof typeof svgIcon;
}

const Button: React.FC<Props> = ({ onClick, icon }) => {
  const SvgIcon = svgIcon[icon];

  return (
    <S.IconButton onClick={onClick}>
      <SvgIcon />
    </S.IconButton>
  );
};

export default Button;
