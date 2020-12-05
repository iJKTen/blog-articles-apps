
// Add the line below. If you do not, your css wil render as [object object]
/** @jsx jsx */
import { jsx } from '@emotion/core'

// Pause to reflect that we do not import React here.

const SomeDiv = (props) => {
  return (
    <div css={{
      backgroundColor: 'pink',
      color: 'white'
    }} {...props}>
      Some div here
    </div>
  )
}

const ExampleThree = (props) => {
  return (
    <div>
      <SomeDiv css={{
        color: 'grey',
        fontFamily: 'Helvetica'
      }} />
      Some div in example Example Three
    </div>
  )
}

export default ExampleThree;
