import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
  <Wrapper>
    <NativeSelect value={value} onChange={onChange} length = {displayedValue.length}>
      {children}
    </NativeSelect>
    <DisplayedSelect>
      {displayedValue}
      <MyIcon id="chevron-down" strokeWidth="2" />
    </DisplayedSelect>
  </Wrapper>
  );
};

const MyIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
  pointer-events: none;
`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const DisplayedSelect = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black}
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`
export default Select;
