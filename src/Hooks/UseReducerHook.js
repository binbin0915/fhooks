import React,{useReducer,useContext} from "react";

const AppContext = React.createContext({});

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function ShowCount(){
    const { count } = useContext(AppContext);
    return (
        <div>Count - {count}</div>
    )
}

function Action(){
    const { dispatch } = useContext(AppContext);
    return (
        <>
            <button onClick={() => dispatch('increment')}>增加</button>
            <button onClick={() => dispatch('decrement')}>减少</button>
            <button onClick={() => dispatch('reset')}>重置</button>
        </>
    )
}



function UseReducerHook (){
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AppContext.Provider value={{
            count,
            dispatch
          }}>
            <div>
                <ShowCount />
                <Action />
            </div>
          </AppContext.Provider>
    )
}

export {
    UseReducerHook
}