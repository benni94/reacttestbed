import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Child } from './Child';


/**
* Utility function to define a fieldset.
*
* @param fields The fields of the fieldset.
* @returns The fieldset.
*/
/* declare function fieldset<R extends ResourceType<any, string, string, string>>(fields: ReadonlyArray<FieldType<R>>): ReadonlyArray<Field<R>>; */


const App: React.FC = () => {

  const tt = useCallback((a: string) => {
    console.log("a", a);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Child getName={tt} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}





export default App;


