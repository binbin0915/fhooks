import React from 'react';
import BaseHook from "./Hooks/BaseHook";
import {UseStateHook,ComputeState} from "./Hooks/UseStateHook";
import { UseReducerHook } from "./Hooks/UseReducerHook";
import UseEffectHook from "./Hooks/UseEffectHook";

function App() {
  return (
    <div className="App">
      {/* <BaseHook /> */}
      {/* <UseStateHook /> */}
      {/* <ComputeState /> */}
      {/* <UseReducerHook /> */}
      <UseEffectHook />
    </div>
  );
}

export default App;
