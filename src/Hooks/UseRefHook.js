import React, { useRef,useImperativeHandle,forwardRef, useEffect } from "react";

class Child extends React.Component{
    render() {
        return <div>Child</div>;
    }
}

let Child2 = (props,ref)=>{
    return (
        <div ref={ref}>不能在函数组件上使用 ref 属性</div>
    )
}

Child2 = React.forwardRef(Child2);

class ClassRefComp extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    componentDidMount(){
        console.log(this.myRef.current);
    }
    render() {
      return (
          <>
            {/* <Child ref={this.myRef} /> */}
            {/* <div ref={this.myRef} /> */}
            <Child2 ref={this.myRef} />
          </>
      )
    }
}

function FuncRefComp(){
    const inputRef = useRef(null);

    const handleChange = ()=>{
        console.log(inputRef.current.value);
    }

    return (
        <input ref={inputRef} type="text" onChange={handleChange} />
    )
}

function UseImperativeHandleRef(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} />;
}
UseImperativeHandleRef = forwardRef(UseImperativeHandleRef);
  

function UseRefHook(){
    const inputRef = useRef();
    useEffect(()=>{
        console.log(inputRef.current);
    })
    return (
        <div>
            {/* <ClassRefComp /> */}
            {/* <FuncRefComp />  */}
            <UseImperativeHandleRef ref={inputRef} />
        </div>
    )
}

export default UseRefHook;