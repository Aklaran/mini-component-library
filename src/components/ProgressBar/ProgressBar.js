/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Container style={styles}>
      <FluidWrapper>
        <Fluid 
          role="progressbar" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          aria-valuenow={value}
          percentage={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </Fluid>
      </FluidWrapper>
    </Container>
  )
};

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px"
  },
  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px"
  },
  large: {
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px"
  }
}

const Container = styled.div`
  height: var(--height);
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const FluidWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Fluid = styled.div`
  height: 100%;
  width: ${ p => (p.percentage ? p.percentage : 0) + "%"};
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
