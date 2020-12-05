import React, { useState, useEffect } from 'react';

const Example = () => {

  const [timesButtonClicked, setTimesButtonClicked] = useState(0);
  const [timesCheckboxClicked, setTimesCheckboxClicked] = useState(0);

  /*
    This is similar to componentDidMount and componentDidUpdate
    Return an array of values telling React to only run useEffect when that values changes
  */
  useEffect(() => {
    console.log(`Checkbox was checked ${timesCheckboxClicked} times`);
  }, [timesCheckboxClicked]);

  /*
    You can even write functions inside of useEffect and call them later to organize your code.
    This is possible because of JavaScript closures. 
    You can have multiple useEffect hooks to seperate concerns.
  */
  useEffect(() => {
    const logToConsole = () => {
      console.log(`Button was clicked ${timesButtonClicked} times`);
    };

    logToConsole();

    return function cleanup() {
      console.log('perform cleanup in this function');
    }
  }, [timesButtonClicked]);

  return (
    <div>
      <button onClick={() => { setTimesButtonClicked(timesButtonClicked + 1) }}>Click Me</button><br />
      <input type="checkbox" onClick={() => setTimesCheckboxClicked(timesCheckboxClicked + 1)} /> Check me
    </div>
  )
};

export default Example;
