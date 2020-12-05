import styled from '@emotion/styled'


export const ButtonStyled = styled.button({
  color: 'turquoise'
}, props => ({
  backgroundColor: props.bgColor,
  fontSize: props.iAmACondition ? '24px' : '12px',
  padding: props.primary ? '20px' : '0px'
}))
