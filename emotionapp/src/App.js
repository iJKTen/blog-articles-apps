import React from 'react';
import {DivClass as AppStyle} from './AppStyle';
import ExampleCssOne from './ExampleCssOne';
import ExampleCssTwo from './ExampleCssTwo';
import ExampleThree from './ExampleThree';
import ExampleFour from './ExampleFour';
import ExampleFive from './ExampleFive';
import ExampleSix from './ExampleSix';
import ExampleSeven from './ExampleSeven';

function App() {
  return (

    <AppStyle fontSize={16}>
      <ExampleCssOne />
      <ExampleCssTwo />
      this is a test
      <ExampleThree />
      <ExampleFour primary sizeOfFont="24px" />
      <ExampleFive css={{backgroundColor: 'pink'}} />
      <ExampleSix bgColor="yellow" iAmACondition/>
      <ExampleSeven bgColor="red"/>
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppStyle>
  );
}

export default App;
