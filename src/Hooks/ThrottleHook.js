import React,{useState} from "react";
import {useThrottle} from "./customHooks";

function ThrottleHook (){
    const [value, setValue] = useState();
    const throttledValue = useThrottle(value,  500 );
    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Typed value"
                style={{ width: 280 }}
            />
            <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
        </div>
    )
}

export default ThrottleHook;