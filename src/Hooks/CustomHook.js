import React from "react";
import {useTitle,useBind,useUpdate,useMount,useUnmount} from "./customHooks";
import { useToggle } from 'ahooks';


const MyComponent = () => {
    useMount(() => {
      console.log('mount');
    });
    useUnmount(() => {
        console.log('unmount');
    });    
    return <div>Hello World</div>;
  };

function CustomHook (){
    const [state, { toggle }] = useToggle(false);
    useTitle('my use title');
    const valueObj = useBind("");
    const update = useUpdate();
    return (
        <div>
            <input {...valueObj} />
            <button onClick={update}>update</button>  
            <button type="button" onClick={() => toggle()}>
                {state ? 'unmount' : 'mount'}
            </button>
            {state && <MyComponent />}
        </div>
    )
}

export default CustomHook;