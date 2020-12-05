
// Add the line below. If you do not, your css wil render as [object object]
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// Pause to reflect that we do not import React here.

const ExampleCssTwo = () => {
  return (
    <div
      // Here you import css module from emotion core
      // Now you can write css as a tagged template literal.
      // Find out more about tagged template literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      // Inside the tagged template literal you can now write css as you would normally
      // except any pseudo class still begin with &: and the pseudo class will not get a semi-colon.
      // Adding a semi-colon to your pseudo class will cause your pseudo class to not work.
      css={css`
          background-color: purple;
          color: white;
          &:hover {
            color: purple;
            background-color: white;
          }
        `}
    >
      I am a second simple div
    </div>
  )
}

export default ExampleCssTwo;
