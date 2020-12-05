import React from 'react';
import {ButtonStyled as ExampleSevenStyles} from './ExampleSevenStyled';

const ExampleSeven = (props) => {
  return (
    <ExampleSevenStyles primary {...props}>I am a button</ExampleSevenStyles>
  )
}

export default ExampleSeven;
