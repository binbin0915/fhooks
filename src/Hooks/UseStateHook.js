import React,{useState} from 'react';

function UseStateHook(){
    const [count, setCount] = useState(0);

    return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me UseStateHook
        </button>
    </div>
    )
}

function ComputeState(){
    const [count,setCount] = useState(()=>{
        const newCount = Math.random();
        return newCount;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me ComputeState
            </button>
        </div>
        )
}

export {UseStateHook,ComputeState};