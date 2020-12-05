import React, { useState } from 'react';

export const Example = () => {

  const [aVariable, setAVariable] = useState(0);

  return(
    <div>Value of the variable is {aVariable}</div>
  )
}
