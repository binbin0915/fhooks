import React from "react";
import { useToggle } from "ahooks";

function AHooks(){
    const [ state, { toggle } ] = useToggle();
    return (
        <div>
        <p>Current Boolean: {String(state)}</p>
        <p>
            <button onClick={() => toggle()}>Toggle</button>
        </p>
        </div>
    );
}

export default AHooks;