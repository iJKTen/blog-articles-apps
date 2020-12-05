
// Add the line below. If you do not, your css wil render as [object object]
/** @jsx jsx */
import { jsx } from '@emotion/core'

// Pause to reflect that we do not import React here.

const ExampleFour = (props) => {
  return (
    <div
    // We are passing an object to the css prop. 
    // The first curly braces say that we want to write some JavaScript code
    // The second curly braces is the JSON object
    // When using object, pseudo classes will get a colon
    // hover is a pseudo selector. Learn more https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
    // Since this is JavaScript, you write backgroundColor and not background-color
    // If you have a JavaScript then you can use props like below.
      css={{
        backgroundColor: 'green',
        color: props.primary ? 'white' : 'yellow',
        fontSize: props.sizeOfFont
      }}
    >
      I am a simple div example four
    </div>
  )
}

export default ExampleFour;
