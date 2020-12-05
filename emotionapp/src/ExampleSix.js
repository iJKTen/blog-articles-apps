import styled from '@emotion/styled'
import React from 'react';

const ExampleSix = (props) => {
  const ButtonStyled = styled.button`
    color: turquoise;
    background-color: ${props.bgColor};
    font-size: ${props.iAmACondition ? '24px' : '12px'};
    padding: ${props => props.primary ? '20px' : '0px'};
  `
  return (
    <ButtonStyled primary>I am a button</ButtonStyled>
  )
}

export default ExampleSix;
