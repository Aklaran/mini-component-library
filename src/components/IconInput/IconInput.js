import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder} style={styles} width={width} label={label}/>
      <IconWrapper 
        id={icon} 
        color={COLORS.gray700}
        size={styles["--icon-size"]} 
        strokeWidth={styles["--icon-width"]} />
    </Wrapper>
  )
};

const SIZES = {
  small: {
    "--font-size": 14 + "px",
    "--border-width": 1 + "px",
    "--icon-size": 15,
    "--icon-width": 1,
    "--text-padding": 24 + "px"
  },
  large: {
    "--font-size": 18 + "px",
    "--border-width": 2 + "px",
    "--icon-size": 22.5,
    "--icon-width": 2,
    "--text-padding": 36 + "px"
  }
}

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  width: ${p => p.width + "px"};

  font-size: var(--font-size);

  color: ${COLORS.gray700};
  font-weight: 700;

  border: none;
  border-bottom: var(--border-width) solid black;

  padding-left: var(--text-padding);
  height: var(--text-padding);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: black;
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 1px;
  height: ${p => p.size + "px"};
  margin: auto;
  pointer-events: none;

  ${Input}:hover + & > svg {
    stroke: black;
  }
`

export default IconInput;
