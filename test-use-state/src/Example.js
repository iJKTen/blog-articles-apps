import React, { useState } from 'react';

const Example = () => {
  
    /*
        useState function returns an array with a length of two where the
        first item is the state variable and the second item is a function
        which will update the first variable. 

        the variables are in a square bracket and its part of the JavaScript
        syntax called array destructuring or destructuring assignment.
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    */
    const [timesButtonClicked, setTimesButtonClicked] = useState({counter: 0});
    const [timesCheckboxChecked, settimesCheckboxChecked] = useState(0);
    
    return (
    	<div>
            <p>
              {/* 
                    To update the variable timesButtonClicked holding a JSON object
                    we have to pass a JSON object with the new value.

                    setTimesButtonClicked is not called directly in onClick because
                    doing so will call the function as soon as the functional component is rendered.
                */}

                Button has been clicked {timesButtonClicked.counter} times.<br/>
        	    <button onClick={() => setTimesButtonClicked({counter: timesButtonClicked.counter + 1})}>Click Me</button>
            </p>
            <p>
                Checkbox has been checkd {timesCheckboxChecked} times.<br/>
                <input type='checkbox' onClick={() => settimesCheckboxChecked(timesCheckboxChecked + 1)} />
            </p>
        </div>
    );
    
};

export default Example;