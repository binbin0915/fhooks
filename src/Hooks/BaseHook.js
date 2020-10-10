import React,{useState} from 'react';

function BaseHook(){
    const [name,setName] = useState('jack');
    

    const handleClick = ()=>{
        setName('frank');
    }

    return (
        <div>
            {name}
            <button onClick={handleClick}>设置姓名</button>  
        </div> 
    )
}

export default BaseHook;