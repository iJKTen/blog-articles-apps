import styled from '@emotion/styled'

export const DivClass = styled.div(
  {
    color: 'red'
  }, 
  props => ({
    fontSize: props.fontSize
  })
);
