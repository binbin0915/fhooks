import React from 'react';
import BaseHook from "./Hooks/BaseHook";
import {UseStateHook,ComputeState} from "./Hooks/UseStateHook";
import { UseReducerHook } from "./Hooks/UseReducerHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseRefHook from "./Hooks/UseRefHook";
import CustomHook from "./Hooks/CustomHook";
import AHooks from "./Hooks/AHooks";
import DebounceHook from "./Hooks/DebounceHook";
import ThrottleHook from "./Hooks/ThrottleHook";

function App() {
  return (
    <div className="App">
      {/* <BaseHook /> */}
      {/* <UseStateHook /> */}
      {/* <ComputeState /> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <CustomHook /> */}
      {/* <AHooks /> */}
      {/* <DebounceHook /> */}
      <ThrottleHook />
    </div>
  );
}

export default App;
